import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Inventory from './src/screens/Inventory';
import Calendar from './src/screens/Calendar';
import TestCalendar from './src/screens/TestCalendar';

const App = () => {
  return (
      <TestCalendar />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App