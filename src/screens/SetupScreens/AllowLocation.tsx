import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocation from '@react-native-community/geolocation'; // Optional library
import { AllowLocationProps } from '../../navigation/StackParamList';

const AllowLocation: React.FC<AllowLocationProps> = ({ navigation }) => {
  const requestLocation = () => {
    // Request location permission
    Geolocation.requestAuthorization();

    // Fetch the location
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log('Current Location:', { latitude, longitude });
       

        // Navigate to the next screen with the location data
        navigation.navigate('LocationUpdate', { latitude, longitude });
      },
      (error) => {
        console.error(error);
        Alert.alert(
          'Location Error',
          'Unable to fetch location. Please check your settings.'
        );
      },
      { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/onboarding-bg.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Back Arrow */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Icon */}
        <View style={styles.iconContainer}>
          <Ionicons name="location-outline" size={60} color="#00A9E0" />
        </View>

        {/* Title */}
        <Text style={styles.title}>Allow Location</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          NaviVue requires permission to access your location
        </Text>

        {/* Buttons */}
        <TouchableOpacity style={styles.allowButton} onPress={requestLocation}>
          <Text style={styles.allowButtonText}>Allow Location Access</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.manualButton}
          onPress={() => navigation.navigate('EnterLocation')}
        >
          <Text style={styles.manualButtonText}>Enter Location Manually</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00A9E0',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  allowButton: {
    backgroundColor: '#00A9E0',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
  },
  allowButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  manualButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  manualButtonText: {
    color: '#00A9E0',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AllowLocation;
