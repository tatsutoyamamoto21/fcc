import React, { useState } from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import AddItem from './AddItem';

const ItemInfo = ( props ) => {
  const { initModal, initText, initPortion, initBestBefore, setModalVisibility } = props;
  const [editVisible, setEditVisible] = useState(false);

  console.log('init text');
  console.log(initText);

  const editItem = () => {
    setEditVisible(true);
    setModalVisibility();
  };

  const deleteItem = () => {
    console.log('DELETE');
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

            <View style={styles.header}>
              <TouchableOpacity
                onPress={setModalVisibility}
                style={styles.backButton}
              >
                <Text>Close</Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.headerText}>{initText}</Text>
              </View>
              <TouchableOpacity
                onPress={editItem}
                style={styles.editButton}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>

            {/* <View style={styles.nameContainer}>
              <View style={styles.nameText}>
                <Text>Item Name </Text>
              </View>
              <View style={styles.nameInput}>
                <Text style={{fontWeight: 'bold'}}>{initText}</Text>
              </View>
            </View> */}

            <View style={styles.portionContainer}>
              <View style={styles.portionText}>
                <Text>Portion(s) </Text>
              </View>
              <View style={styles.portionInput}>
                <Text style={{fontWeight: 'bold'}}>{initPortion}</Text>
              </View>
            </View>

            <View style={styles.dateTypeContainer}>
              <View style={styles.dateTypeText}>
                <Text>Date Type </Text>
              </View>
              <View style={styles.dateTypeInput}>
                <Text style={{fontWeight: 'bold'}}>{initBestBefore ? 'Best Before' : 'Use By'}</Text>
              </View>
            </View>

            <View style={styles.bestBeforeDateContainer}>
              <View style={styles.bestBeforeDateText}>
                <Text>Expiry Date </Text>
              </View>
              <View style={styles.bestBeforeDateInput}>
                <Text style={{fontWeight: 'bold'}}>date</Text>
              </View>
            </View>

            <View style={styles.presses}>
              <TouchableOpacity
                style={styles.pressDelete}
                onPress={deleteItem}
              >
                <Text style={{color: 'white'}}>Delete</Text>
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
        initText={initText?.toString()}
        initPortion={initText?.toString()}
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
    width: '80%',
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
  editButton: {
    position: 'absolute',
    zIndex: 11,
    right: 15,
    borderRadius: 20,
    marginVertical: 15,
  },
  headerText: {
    fontSize: 22,
    color: 'black',
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
    height: 40,
    justifyContent: 'center',
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
    justifyContent: 'center',
    height: 40,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  dateTypeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 2,
    marginHorizontal: 5,
  },
  dateTypeText: {
    flex: 1,
    marginLeft: 13,
  },
  dateTypeInput: {
    flex: 2,
    justifyContent: 'center',
    height: 40,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  bestBeforeDateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 2,
    marginHorizontal: 5,
  },
  bestBeforeDateText: {
    flex: 1,
    marginLeft: 13,
  },
  bestBeforeDateInput: {
    flex: 2,
    justifyContent: 'center',
    height: 40,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  presses: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    margin: 5,
  },
  pressDelete: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: 'red',
  },
});

export default ItemInfo;
