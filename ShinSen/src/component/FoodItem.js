import React from 'react';
import {View, Text} from 'react-native';
import {Feather} from '@expo/vector-icons';

const FoodItem = (prop) => {
  const {name, iconName} = prop;
  return (
    <View>
      <Feather name={iconName} size={24} color="black" />
      <Text>{name}</Text>
    </View>

  );
};

export default FoodItem;
