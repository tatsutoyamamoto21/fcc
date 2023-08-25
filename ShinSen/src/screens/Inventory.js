import React from 'react';
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ItemButton from '../component/ItemButton';

const Inventory = ( props ) => {
  const { foodItemsAPI } = props;

  let arr = [];
  foodItemsAPI.forEach((item) => {
    arr.push(...item.data);
  });

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
