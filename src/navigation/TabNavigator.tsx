import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import MaterialCommunityIcons

import HomeStackNavigator from './HomeStackNavigator';
import SettingStackNavigator from './SettingStackNavigator';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'; // Filled Home Icon
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog-outline'; // Filled Settings (Cog) Icon
          }

          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={focused ? '#004F6B' : 'gray'}
            />
          );
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#004F6B',
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 70,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Settings"
        component={SettingStackNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
