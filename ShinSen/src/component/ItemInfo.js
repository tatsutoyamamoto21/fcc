import React, { useState } from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';
import AddItem from './AddItem';

const ItemInfo = ( props ) => {
  const { text, init, setModalVisibility } = props;
  const [editVisible, setEditVisible] = useState(false);

  const editItem = () => {
    setEditVisible(true);
  };

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={init}
    >
      <View style={styles.centerView}>
        <View style={styles.modalView}>

          <Text style={styles.text}>{text}</Text>

          <View style={styles.presses}>
            <TouchableOpacity
              style={styles.pressEdit}
              onPress={() => setEditVisible(true)}
            >
              <Text>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.pressClose}
              onPress={setModalVisibility}
            >
              <Text>Close</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
      <AddItem
        init={editVisible}
        setModalVisibility={
          ()=>{setEditVisible(preState => preState = !preState)}
        }
        title={text.toString()}
        editMode={true}
      />
    </Modal>
  );
};

const styles=StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    alignItems: 'stretch',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
  },
  text: {
    alignSelf: 'center',
  },
  presses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressEdit: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  pressClose: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#00BBF2',
  },
});

export default ItemInfo;
