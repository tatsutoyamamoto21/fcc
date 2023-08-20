import React from 'react';
import { View, Modal, StyleSheet, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const width = Dimensions.get('window').width;

const AddItem = ( props ) => {
  const { init, setModalVisibility } = props;

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={init}
    >
      <View style={styles.centerView}>
        <View style={styles.modalView}>
          <ScrollView style={styles.scrollView}>

            <View style={styles.header}>
              <TouchableOpacity
                onPress={setModalVisibility}
                style={styles.backButton}
              >
                <AntDesign name="left" size={30} color="black" />
              </TouchableOpacity>
              <View>
                <Text style={styles.headerText}>Add Item</Text>
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
  },
  backButton: {
    position: 'absolute',
    zIndex: 11,
    left: 10,
    borderRadius: 10,
  },
  headerText: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#00BBF2',
  },
});

export default AddItem;
