import React from 'react';
import {View, Text} from 'react-native';
import {Feather} from '@expo/vector-icons';

const FoodItem = (prop) => {
  const {itemName, iconName} = prop;
  const [name, setName] = useState();
  setName(name);
  return (
    <View>
      <Feather name={iconName} size={24} color="black" />
      <Text>{itemName}</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  view: {
    float: 'left',
  },
});

export default FoodItem;
