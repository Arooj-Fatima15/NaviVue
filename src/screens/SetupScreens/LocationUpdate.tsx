import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackParamList } from '../../navigation/StackParamList';
import { RouteProp } from '@react-navigation/native';

type LocationUpdateRouteProp = RouteProp<StackParamList, 'LocationUpdate'>;

interface LocationUpdateProps {
  route: LocationUpdateRouteProp;
  navigation: any;
}

const LocationUpdate: React.FC<LocationUpdateProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Location Pin Icon */}
      <Ionicons name="location-outline" size={100} color="#023880" style={styles.icon} />

      {/* Title */}
      <Text style={styles.title}>Your location has been updated successfully!</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>You're all set to start navigating hands-free.</Text>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('AllowBluetooth')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#023880',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#999cae',
    textAlign: 'center',
    marginBottom: 40,
  },
  continueButton: {
    backgroundColor: '#023880',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LocationUpdate;
