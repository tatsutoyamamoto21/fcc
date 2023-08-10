import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import FoodItem from './FoodItem';

// const data = [
//   {name: 'element 1', itemIcon: 'sun'},
//   {name: 'element 2', itemIcon: 'sun'},
//   {name: 'element 3', itemIcon: 'sun'},
// ];

const data = ['a', 'b', 'c'];

const Inventory = () => {
  const listOfItems = (data) => {
    return ( data.map(name =>
      <Text>{name}</Text>
      // <FoodItem key={name} name={name} iconName={'sun'} />,
    )
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Hello world</Text>
      <FoodItem name={'test'} iconName={'sun'} />
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
