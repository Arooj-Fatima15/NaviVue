import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../screens/SettingsScreen'; // Import your SettingScreen
import EditMyProfileScreen from '../screens/SettingsScreens/EditMyProfileScreen'; // Import MyProfileScreen
import FavoritePlacesScreen from '../screens/SettingsScreens/FavoritePlacesScreen'; // Import FavoritePlacesScreen
import NavigationHistoryScreen from '../screens/SettingsScreens/NavigationHistoryScreen'; // Import NavigationHistoryScreen
import HelpCenterScreen from '../screens/SettingsScreens/HelpCenterScreen'; // Import HelpCenterScreen
import PrivacyPolicyScreen from '../screens/SettingsScreens/PrivacyPolicyScreen'; // Import PrivacyPolicyScreen
import LanguageSupportScreen from '../screens/SettingsScreens/LanguageSupportScreen'; // Import LanguageSupportScreen

import {StackParamList} from '../navigation/StackParamList'; // Ensure correct path here

// Define the stack with StackParamList
const Stack = createNativeStackNavigator<StackParamList>();

const SettingStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingsScreen" component={SettingScreen} />
      <Stack.Screen name="EditMyProfile" component={EditMyProfileScreen} />
      <Stack.Screen name="FavoritePlaces" component={FavoritePlacesScreen} />
      <Stack.Screen
        name="NavigationHistory"
        component={NavigationHistoryScreen}
      />
      <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="LanguageSupport" component={LanguageSupportScreen} />
    </Stack.Navigator>
  );
};

export default SettingStackNavigator;
