import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AllowLocation from '../screens/SetupScreens/AllowLocation';
import EnterLocation from '../screens/SetupScreens/EnterLocation';
import LocationUpdate from '../screens/SetupScreens/LocationUpdate';
import AllowBluetooth from '../screens/SetupScreens/AllowBluetooth';
import BluetoothConnected from '../screens/SetupScreens/BluetoothConnected';
import StartNavigation from '../screens/SetupScreens/StartNavigation';
import NewLocation from '../screens/SetupScreens/NewLocation';
import SelectLocation from '../screens/SetupScreens/SelectLocation';
import Started from '../screens/SetupScreens/Started';
import { StackParamList } from '../navigation/StackParamList'; // Ensure correct path here

// Define the stack with StackParamList
const Stack = createNativeStackNavigator<StackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AllowLocation" component={AllowLocation} />
      <Stack.Screen name="EnterLocation" component={EnterLocation} />
      <Stack.Screen name="LocationUpdate" component={LocationUpdate} />
      <Stack.Screen name="AllowBluetooth" component={AllowBluetooth} />
      <Stack.Screen name="BluetoothConnected" component={BluetoothConnected} />
      <Stack.Screen name="StartNavigation" component={StartNavigation} />
      <Stack.Screen name="NewLocation" component={NewLocation} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
      <Stack.Screen name="Started" component={Started} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
