import React from 'react';
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ItemButton from '../component/ItemButton';

const arr = Array.apply(null, Array(10)).map((v, i) => {
  return { id: i };
});

const Inventory = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={arr}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <ItemButton text={item.id}/>
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
    flex: 1,
    margin: 1,
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default Inventory;
