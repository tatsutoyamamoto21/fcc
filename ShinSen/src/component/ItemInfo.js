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
        <View>
          <View style={styles.modalView}>
            <Text>{text}</Text>
            <TouchableHighlight
              style={styles.press}
              onPress={setModalVisibility}
            >
              <Text>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>

  )
}

const styles=StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  press: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  }
})

export default ItemInfo