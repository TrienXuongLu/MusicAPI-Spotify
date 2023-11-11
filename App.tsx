/* eslint-disable prettier/prettier */
import React from 'react';
import Home from './src/screens/home';
import Search from './src/screens/search';
import List from './src/screens/list';
import Play from './src/screens/play';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Play" component={Play} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}