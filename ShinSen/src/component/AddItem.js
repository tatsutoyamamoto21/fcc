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
      animationType='fade'
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
              <Text>Close</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.headerText}>{`${editMode ? 'Edit' : 'Add'} Item`}</Text>
            </View>
            <TouchableOpacity
              onPress={setModalVisibility}
              style={styles.doneButton}
            >
              <Text>Done</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>

            <View style={styles.inputContainer}>
              <View style={styles.itemNameText}>
                <Text>Name</Text>
              </View>
              <TextInput
                style={styles.itemNameInput}
                value={text}
                mode={mode}
                onChangeText={setText}
                placeholder='Item Name'
              />
            </View>

            <View style={styles.dateType}>
              <View style={styles.dateTypeText}>
                <Text>Date Type</Text>
              </View>
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
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: 'rgb(250,250,250)',
  },
  header: {
    flexDirection: 'row',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  backButton: {
    position: 'absolute',
    zIndex: 11,
    left: 15,
    borderRadius: 20,
    marginVertical: 15,
  },
  doneButton: {
    position: 'absolute',
    zIndex: 11,
    right: 15,
    borderRadius: 20,
    marginVertical: 15,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#00BBF2',
    marginVertical: 15,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 5,
    marginTop: 10,
  },
  itemNameText: {
    flex: 1,
    marginLeft: 10,
  },
  itemNameInput: {
    flex: 2,
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: 'grey',
    height: 40,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  dateType: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dateTypeText: {
    flex: 1,
  },
  activeToggle: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#00BBF2',
    justifyContent: 'center',
    height: 40,
  },
  inactiveToggle: {
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    height: 40,
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
