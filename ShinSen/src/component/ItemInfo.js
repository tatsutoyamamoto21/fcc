import React, { useState } from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import AddItem from './AddItem';

const width = Dimensions.get('window').width;

const ItemInfo = ( props ) => {
  const { initModal, initText, initPortion, initBestBefore, setModalVisibility } = props;
  const [editVisible, setEditVisible] = useState(false);

  const editItem = () => {
    setEditVisible(true);
    setModalVisibility();
  };

  return (
    <View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={initModal}
      >
        <View style={styles.centerView}>
          <View style={styles.modalView}>

            <Text style={styles.text}>{initText}</Text>
            <Text style={styles.text}>{initPortion+1}</Text>
            <Text style={styles.text}>{initBestBefore.toString()}</Text>

            <View style={styles.presses}>
              <TouchableOpacity
                style={styles.pressEdit}
                onPress={editItem}
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
      </Modal>
      <AddItem
        init={editVisible}
        setModalVisibility={
          () => { setEditVisible(preState => preState = !preState) }
        }
        initText={initText.toString()}
        initPortion={(initText + 3).toString()}
        initBestBefore={false}
        editMode={true}
      />
    </View>
  );
};

const styles=StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    alignSelf: 'center',
    alignItems: 'stretch',
    width: width*0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
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
