import isEmpty from 'lodash/isEmpty';
import React, {useCallback, useState} from 'react';
import {StyleSheet, Alert, View, Text, TouchableOpacity, Button} from 'react-native';
import ItemInfo from '../component/ItemInfo';

const AgendaItem = ( props ) => {
  const { item } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const buttonPressed = useCallback(() => {
    Alert.alert('Show me more');
  }, []);

  const itemPressed = useCallback(() => {
    setModalVisible(true);
  }, []);

  if (isEmpty(item)) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned Today</Text>
      </View>
    );
  }

  return (
    <View>
      <TouchableOpacity onPress={itemPressed} style={styles.item}>
        <View style={styles.isBestBeforeContainer}>
          <Text style={styles.isBestBeforeText}>{item.IsBestBefore ? 'Best Before' : 'Use by'}</Text>
        </View>
        <View style={styles.itemNameContainer}>
          <Text style={styles.itemNameText}>{item.ItemName}</Text>
        </View>
        <View style={styles.itemButtonContainer}>
          <Button color={'grey'} title={'Info'} onPress={buttonPressed}/>
        </View>
      </TouchableOpacity>
      <ItemInfo
        initModal={modalVisible}
        initText={item.ItemName}
        initPortion={''}
        initBestBefore={item.IsBestBefore}
        setModalVisibility={()=>{setModalVisible(preState => preState = !preState)}}
      />
    </View>
  );
};


export default React.memo(AgendaItem);

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
  },
  isBestBeforeContainer: {
    flex: 1,
  },
  isBestBeforeText: {
    color: 'black',
    textAlign: 'center',
  },
  itemNameContainer: {
    flex: 3,
  },
  itemNameText: {
    color: 'black',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  emptyItemText: {
    color: 'lightgrey',
    fontSize: 14,
  },
});
