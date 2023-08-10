import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import FoodItem from './FoodItem';

const data = [
  {name: 'element 1', itemIcon: 'sun'},
  {name: 'element 2', itemIcon: 'sun'},
  {name: 'element 3', itemIcon: 'sun'},
];

const Inventory = (data) => {

  const listOfItems = (item) => {
    return (
      <FoodItem
        name={item.name}
        iconName={item.itemIcon}
        style={styles.item}
      />
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      {listOfItems(data)}
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  item: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
});

export default Inventory;
