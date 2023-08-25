import React from 'react';
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ItemButton from '../component/ItemButton';

// const arr = Array.apply(null, Array(10)).map((v, i) => {
//   return { id: i };
// });

[
  {
    "ExpDate": "2023-08-22",
    "IsBestBefore": 0,
    "ItemID": 1,
    "ItemName": "add items",
    "Portion": 1
  },
  {
    "ExpDate": "2023-08-22",
    "IsBestBefore": 0,
    "ItemID": 2,
    "ItemName": "Milk",
    "Portion": 1
  },
  {
    "ExpDate": "2023-08-22",
    "IsBestBefore": 0,
    "ItemID": 4,
    "ItemName": "Milk",
    "Portion": 1
  },
]


const Inventory = ( props ) => {
  const { foodItemsAPI } = props;

  let arr = [];
  foodItemsAPI.forEach((item) => {
    arr.push(...item.data)
  });

  console.log(arr);

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={arr}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <ItemButton text={item.ItemName}/>
          </View>
        )}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    width: '33%',
    height: '33%',
    margin: 1,
    alignItems: 'flex-start',
  },
});

export default Inventory;
