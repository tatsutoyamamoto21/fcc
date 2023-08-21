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
import APIUtils from '../utilities/http-request-func';

const width = Dimensions.get('window').width;
const API = new APIUtils('http://192.168.1.12:5000');

const AddItem = ( props ) => {
  const {init, title, setModalVisibility, editMode} = props;

  const [text, setText] = useState(title);
  const [portion, setPortion] = useState('');
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
    console.log(isBestBefore);
    console.log(portion);
    API.getItems().then((data) => {
      console.log(data['data'][0][2]);
    });
    setModalVisibility();
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
              onPress={sendInfo}
              style={styles.doneButton}
            >
              <Text>Done</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>

            <View style={styles.nameContainer}>
              <View style={styles.nameText}>
                <Text>Name</Text>
              </View>
              <TextInput
                style={styles.nameInput}
                value={text}
                onChangeText={setText}
                placeholder='Item Name'
              />
            </View>

            <View style={styles.portionContainer}>
              <View style={styles.portionText}>
                <Text>Portion(s)</Text>
              </View>
              <TextInput
                style={styles.portionInput}
                value={portion}
                onChangeText={setPortion}
                placeholder='Enter portion(s)'
              />
            </View>

            <View style={styles.dateType}>
              <View style={styles.dateTypeText}>
                <Text>Date Type</Text>
              </View>
              <View style={styles.dateToggleContainer}>
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
            </View>

            <View style={styles.dateContainer}>
              <View style={styles.datePromptView}>
                <Text style={styles.datePromptText}>Expiry Date</Text>
              </View>
              <View style={styles.datePicker}>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  onChange={onChange}
                  minimumDate={new Date()}
                />
              </View>
            </View>

          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

`
<DateTimePicker
  testID="dateTimePicker"
  value={date}
  onChange={onChange}
  minimumDate={new Date()}
/>
`;

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

  nameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 2,
    marginTop: 10,
    marginHorizontal: 5,
  },
  nameText: {
    flex: 1,
    marginLeft: 13,
  },
  nameInput: {
    flex: 2,
    borderColor: 'grey',
    height: 40,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  portionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 2,
    marginHorizontal: 5,
  },
  portionText: {
    flex: 1,
    marginLeft: 13,
  },
  portionInput: {
    flex: 2,
    borderColor: 'grey',
    height: 40,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  dateType: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 2,
    marginHorizontal: 5,
    height: 40,
  },
  dateTypeText: {
    flex: 1,
    marginLeft: 13,
  },
  dateToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
  },
  activeToggle: {
    flex: 1,
    height: 40,
    backgroundColor: '#00BBF2',
    justifyContent: 'center',
  },
  inactiveToggle: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    height: 40,
  },
  toggleText: {
    alignSelf: 'center',
    color: 'white',
  },

  dateContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 2,
    marginHorizontal: 5,
    height: 40,
    marginBottom: 20,
  },
  datePromptView: {
    flex: 1,
    marginLeft: 13,
  },
  datePicker: {
    flex: 2,
  },
});

export default AddItem;
