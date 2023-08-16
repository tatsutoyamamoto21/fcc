import React, { useState } from 'react'
import { StyleSheet, Modal, View, Text, Pressable, TouchableHighlight } from 'react-native'

const ItemInfo = ( props ) => {
  const { text, init, setModalVisibility } = props

  return (
    <View>
      <Modal 
        animationType='slide'
        transparent={true}
        visible={init}
      >
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.presses}>
              <TouchableHighlight
                style={styles.pressEdit}
                onPress={setModalVisibility}
              >
                <Text>Edit</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.pressClose}
                onPress={setModalVisibility}
              >
                <Text>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles=StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    alignItems: 'stretch',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
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

export default ItemInfo