import Tabs from './component/Tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Main = () => {
  return (
    <NavigationContainer>
      <TouchableOpacity style={styles.addButton}>
        <Text>Hello</Text>
      </TouchableOpacity>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: '5%',
    bottom: '11%',
    backgroundColor: '#00BBF2',
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },

})

export default Main;
