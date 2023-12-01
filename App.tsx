/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/home';
import Play from './src/screens/play';
import Search from './src/screens/search';
import Reel from './src/screens/reel';
import Account from './src/screens/account';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeScreen = "HomeScreen";
const PlayScreen = "Play";
const ReelScreen = "Reel";
const SearchScreen = "Search";
const AccountScreen = "Account";

function HomeStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name={SearchScreen} component={Search} />
      <Stack.Screen name={AccountScreen} component={Account} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={HomeScreen}>
        <Tab.Screen name={HomeScreen} component={HomeStack} options={{headerShown: false}}/>
        <Tab.Screen name={PlayScreen} component={Play} />
        <Tab.Screen name={ReelScreen} component={Reel} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}