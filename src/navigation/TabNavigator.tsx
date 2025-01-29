import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'; // Import Image component from React Native

import HomeStackNavigator from './HomeStackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import SettingStackNavigator from './SettingStackNavigator';

// Import PNG images from the assets folder


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({

       

        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          // Set the correct PNG icon based on the route
          if (route.name === 'Home') {
            iconSource = require('../assets/icons/homeIcon.png');
          } else if (route.name === 'Profile') {
            iconSource = require('../assets/icons/profileIcon.png');
          } else {
            iconSource =  require('../assets/icons/homeIcon.png'); // Default fallback icon
          }

          // Return the Image component with the source and styles applied
          return (
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
                tintColor: focused ? '#004F6B' : 'gray', // Change color based on focus state
              }}
            />
          );
        },

        tabBarLabelStyle: {
          fontSize: 12, // Adjust this value to change the text size
          fontWeight: 'bold', // Optional: Customize the font weight
        },
        tabBarActiveTintColor: '#004F6B', // Navy Blue when active
        tabBarInactiveTintColor: 'gray', // Gray when inactive
        

        tabBarStyle: {
          paddingBottom: 10, // Padding at the bottom of the tab bar
          paddingTop: 10, // Padding at the top of the tab bar
          height: 70, // Adjust the height to accommodate the padding

        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }} // Hides the header for the Home screen
      />
      
      <Tab.Screen
        name="Profile"
        component={SettingStackNavigator}
        options={{ headerShown: false }} // Hides the header for the Settings screen
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
