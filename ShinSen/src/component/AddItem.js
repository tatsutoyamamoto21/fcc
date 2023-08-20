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
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const width = Dimensions.get('window').width;

const AddItem = ( props ) => {
  const {init, title, setModalVisibility, editMode} = props;

  const [text, setText] = useState(title);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [isBestBefore, setIsBestBefore] = useState(true);

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
              <Text style={styles.headerText}>{`${editMode ? 'Edit' : 'Add'} Item`}</Text>
            </View>
          </View>

          <ScrollView>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.itemNameInput}
                value={text}
                mode={mode}
                onChangeText={setText}
                placeholder='Item Name'
              />
            </View>

            <View style={styles.dateType}>
              <TouchableOpacity
                style={isBestBefore === true ? styles.activeToggle : styles.inactiveToggle}
                onPress={() => setIsBestBefore(true)}
              >
                <Text style={styles.toggleText}>Best Before</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={isBestBefore === false ? styles.activeToggle : styles.inactiveToggle}
                onPress={() => setIsBestBefore(false)}
              >
                <Text style={styles.toggleText}>Use By</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.dateContainer}>
              <View style={styles.datePromptView}>
                <Text style={styles.datePromptText}>Expiry Date: </Text>
              </View>
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
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  itemNameInput: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'grey',
    height: 40,
    width: width * 0.8,
  },
  dateType: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.8,
    alignSelf: 'center',
  },
  activeToggle: {
    width: 100,
    aspectRatio: 2,
    borderRadius: 50,
    backgroundColor: '#00BBF2',
    justifyContent: 'center',
  },
  inactiveToggle: {
    width: 100,
    aspectRatio: 2,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
  },
  toggleText: {
    alignSelf: 'center',
    color: 'white',
  },
  dateContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
    height: 50,
    alignSelf: 'center',
  },
  datePromptView: {
    justifyContent: 'center',
  },
  datePromptText: {
    fontSize: 20,
  },
  saveButton: {
    alignSelf: 'center',
    margin: 50,
    padding: 10,
    height: 40,
    width: width * 0.4,
    borderRadius: 10,
    backgroundColor: 'green',
  },
});

export default AddItem;
