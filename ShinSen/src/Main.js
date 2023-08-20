import React, { useState } from 'react'
import { Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './component/Tabs';
import AddItem from './component/AddItem';

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <AddItem 
        init={modalVisible}
        setModalVisibility={
          ()=>{setModalVisible(preState => preState = !preState)}
        }
      />
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: '5%',
    bottom: '11%',
    backgroundColor: '#00BBF2',
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, // IOS
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
  },
})

export default Main;
