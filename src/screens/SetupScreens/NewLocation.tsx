import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NewLocation = ({ navigation }: any) => {
  const [location, setLocation] = useState('');

  const handlePlaceSelect = (data: any, details: any) => {
    console.log("You pressed on a suggestion");
    const { geometry, formatted_address } = details;
    navigation.navigate('SelectLocation', {
      location: formatted_address,
      latitude: geometry.location.lat,
      longitude: geometry.location.lng,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#004080" />
      </TouchableOpacity>

      {/* Logo */}
      <Image source={require('../../assets/logo-main.png')} style={styles.logo} />

      {/* Header Text */}
      <Text style={styles.headerTitle}>Search for a location...</Text>

      {/* Google Places Autocomplete */}
      <GooglePlacesAutocomplete
        placeholder="Enter a location"
        fetchDetails={true}
        onPress={handlePlaceSelect}
        query={{
          key: 'AIzaSyDxm-Y_KRycp85tUhZR82088vvOa4m7JtE',
          language: 'en',
        }}
        styles={{
          textInputContainer: {
            width: '80%',
            marginBottom: 20,
            zIndex: 10, // Ensure input field is above other elements
            position: 'relative',
          },
          textInput: {
            height: 40,
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: 20,
            paddingLeft: 10,
            fontSize: 16,
          },
          listView: {
            zIndex: 1000, // Ensure suggestions are above other content
            position: 'absolute', // Position the suggestions dropdown absolutely
            top: 60, // Adjust distance from input field
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5, // For Android shadow
          },
        }}
      />

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#004080',
    marginTop: 0,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 40,
    marginTop: 60,
  },
});

export default NewLocation;
