import React, {useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const width = Dimensions.get('window').width;

const AddItem = ( props ) => {
  const {init, setModalVisibility} = props;

  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    if (event.type == 'set') {
      console.log('set');
    }
  };

  const sendInfo = () => {
    // TODO: add post request to server
    console.log(date);
    console.log(text);
  };


  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={init}
    >
      <View style={styles.centerView}>
        <View style={styles.modalView}>

          <View style={styles.header}>
            <TouchableOpacity
              onPress={setModalVisibility}
              style={styles.backButton}
            >
              <AntDesign name="left" size={30} color="grey" />
            </TouchableOpacity>
            <View>
              <Text style={styles.headerText}>Add Item</Text>
            </View>
          </View>

          <ScrollView style={styles.scrollView}>
            <View style={styles.body}>

              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.ItemNameInput}
                  value={text}
                  mode={mode}
                  onChangeText={setText}
                  placeholder='Item Name'
                />

                <View style={styles.DateContainer}>

                  <Text style={styles.DatePromptText}>Notification Data</Text>

                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    onChange={onChange}
                    minimumDate={new Date()}
                    style={styles.datePicker}
                  />

                </View>

                <TouchableOpacity onPress={sendInfo}>
                  <View style={styles.saveButton}>
                    <Text style={{color: 'white', alignSelf: 'center'}}>Save</Text>
                  </View>
                </TouchableOpacity>


                <Text>Testing text</Text>
              </View>

            </View>


          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '100%',
    height: '100%',
    marginTop: '25%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  backButton: {
    position: 'absolute',
    zIndex: 11,
    left: 10,
    borderRadius: 10,
    marginVertical: 15,
  },
  headerText: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 22,
    color: '#00BBF2',
    marginVertical: 15,
  },
  body: {
    alignItems: 'center',
    width: width,
    flexDirection: 'column',
    flex: 1,
  },
  InputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ItemNameInput: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'grey',
    height: 40,
    width: width * 0.8,
  },
  DateContainer: {
    flexDirection: 'row',
    width: width * 0.8,
    height: 50,
    justifyContent: 'centre',
    alignItems: 'center',
  },
  DatePromptText: {
    fontSize: 20,
  },
  saveButton: {
    margin: 10,
    padding: 10,
    height: 40,
    width: width * 0.5,
    borderRadius: 20,
    backgroundColor: 'red',
  },
});

export default AddItem;
