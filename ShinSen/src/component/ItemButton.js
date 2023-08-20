import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import ItemInfo from './ItemInfo';

const scrWidth = Dimensions.get('window').width;

const ItemButton = ( props ) => {
  const { text } = props;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}>
        <View style={styles.item}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
      <ItemInfo
        text={text}
        init={modalVisible}
        setModalVisibility={()=>{setModalVisible(preState => preState = !preState)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: (scrWidth-6) * 1/3,
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default ItemButton;
