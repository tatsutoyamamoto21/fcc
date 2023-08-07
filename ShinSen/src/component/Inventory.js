import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const Inventory = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Text>
          Hello World Dev
          Hello World Tats
        </Text>
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})

export default Inventory;