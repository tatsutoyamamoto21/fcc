import React from 'react';
import Calendar from '../screens/Calendar';
import Inventory from '../screens/Inventory';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#00BBF2',
        tabBarInactiveTintColor: 'grey',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          fontSize: 25,
          color: '#00BBF2',
        },
      }}
    >
      <Tab.Screen name={'Calendar'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="calendar" size={24} color={focused ? "#00BBF2" : 'grey'} />
          ),
        }}
      >
        {() => <Calendar />}
      </Tab.Screen>
      <Tab.Screen name={'Inventory'}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="fridge-outline" size={24} color={focused ? "#00BBF2" : 'grey'} />
          ),
        }}
      >
        {() => <Inventory />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;