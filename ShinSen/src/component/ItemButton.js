import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ItemButton = ( props ) => {
  const { text, col } = props
  return (
    <View>
      <Button
        title={text}
        onPress={() => {
          console.log('Button press.')
        }}
        color={col}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ItemButton;
