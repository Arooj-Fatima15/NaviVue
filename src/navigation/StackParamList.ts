import { RouteProp } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

// Define types for your stack parameter list
export type StackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
  Login: undefined;
  Signup: undefined;
  Otp: { email: string; otpCode: string; purpose: 'signup' | 'forgotPassword' };
  ForgotPassword: undefined;
  Main: undefined;
  AllowLocation: undefined;
  SettingsScreen: undefined;
  MyProfile: undefined;
  FavoritePlaces: undefined;
  NavigationHistory: undefined;
  HelpCenter: undefined;
  PrivacyPolicy: undefined;
  LanguageSupport: undefined;
  Logout: undefined;
  HomeScreen: undefined;
  Profile: undefined;

  // New Screens
  EnterLocation: undefined;
  LocationUpdate: { latitude: number; longitude: number }
  AllowBluetooth: undefined;
  BluetoothConnected: undefined;
  StartNavigation: undefined;
  NewLocation: undefined;
  SelectLocation: undefined;
  Started: undefined;

};

// Define types for each screen's navigation and route props
export type OtpScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Otp'>;
  route: RouteProp<StackParamList, 'Otp'>;
};

export type LoginScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Login'>;
};

export type SignupScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Signup'>;
};

export type OnboardingScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Onboarding'>;
};

export type ForgotPasswordScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'ForgotPassword'>;
};

export type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Profile'>;
};

export type HomeScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Main'>;
};

export type SettingsScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'SettingsScreen'>;
};

export type AllowLocationProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'AllowLocation'>;
};

export type MyProfileScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'MyProfile'>;
};

export type FavoritePlacesScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'FavoritePlaces'>;
};

export type NavigationHistoryScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'NavigationHistory'>;
};

export type HelpCenterScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'HelpCenter'>;
};

export type PrivacyPolicyScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'PrivacyPolicy'>;
};

export type LanguageSupportScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'LanguageSupport'>;
};

export type LogoutScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Logout'>;
};


export type EnterLocationProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'EnterLocation'>;
};

export type LocationUpdateProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'LocationUpdate'>;
};

export type AllowBluetoothProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'AllowBluetooth'>;
};

export type BluetoothConnectedProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'BluetoothConnected'>;
};

export type StartNavigationProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'StartNavigation'>;
};

export type NewLocationProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'NewLocation'>;
};

export type SelectLocationProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'SelectLocation'>;
};

export type StartedProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Started'>;
};
