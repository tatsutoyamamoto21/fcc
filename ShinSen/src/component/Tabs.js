import React from 'react';
import TestCalendar from '../screens/TestCalendar';
import Inventory from '../screens/Inventory';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'grey',
        tabBarInactiveTintColor: 'lightblue',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          fontSize: 25,
          color: 'lightblue',
        },
      }}
    >
      <Tab.Screen name={'Calendar'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="calendar" size={24} color={focused ? "black" : 'lightblue'} />
          )
        }}
      >
        {() => <TestCalendar />}
      </Tab.Screen>
      <Tab.Screen name={'Inventory'}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="fridge-outline" size={24} color={focused ? "black" : 'lightblue'} />
          )
        }}
      >
        {() => <Inventory />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs