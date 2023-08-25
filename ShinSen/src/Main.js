import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './component/Tabs';
import AddItem from './component/AddItem';
import APIUtils from './utilities/http-request-func';
import useGetItems from './hooks/useGetItems';
import { API_IP } from '@env';

const Main = () => {
  const [showAdd, setShowAdd] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  API = new APIUtils('http://'+API_IP+':5000');

  const foodItems = useGetItems();

  return (
    <NavigationContainer>
      <TouchableOpacity
        style={showAdd ? styles.addButton : styles.hiddenButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <AddItem
        init={modalVisible}
        setModalVisibility={()=>{setModalVisible(preState => preState = !preState)}}
        api={API}
      />
      <Tabs showAdd={showAdd} setShowAdd={setShowAdd} foodItems={foodItems}/>
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
});

export default Main;
