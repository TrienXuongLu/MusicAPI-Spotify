/* eslint-disable prettier/prettier */
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Music from '../screens/play';
import Reel from '../screens/reel';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeScreen = "Home";
const MusicScreen = "Music";
const ReelScreen = "Reel";

export default function App() {
  return (
      <Tab.Navigator initialRouteName={HomeScreen} screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const routeName = route.name;

          if (routeName === HomeScreen) {
            iconName = focused ? "home" : 'home-outline';
          } else if (routeName === MusicScreen) {
            iconName = focused ? 'musical-notes' : 'musical-notes-outline';
          } else if (routeName === ReelScreen) {
            iconName = focused ? 'logo-instagram' : 'logo-instagram';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name={HomeScreen} component={Home} />
        <Tab.Screen name={MusicScreen} component={Music} />
        <Tab.Screen name={ReelScreen} component={Reel} />
      </Tab.Navigator>
  );
}