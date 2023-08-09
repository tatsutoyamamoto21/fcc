import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ItemButton from '../component/ItemButton';

const Inventory = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <ItemButton
          text={'This is a button.'}
          col={'red'}
        />
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    alignContent: 'center',

  }
})

export default Inventory;