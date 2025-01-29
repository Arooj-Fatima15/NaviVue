import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import FontAwesome from 'react-native-vector-icons/FontAwesome';  // Correct import for FontAwesome

const SelectLocation = ({ route, navigation }: any) => {
  const { location, latitude, longitude } = route.params;

  // State for the input field and map coordinates
  const [searchText, setSearchText] = useState(location || '');
  const [selectedLatitude, setSelectedLatitude] = useState(latitude || 31.5204); // Default to Lahore if latitude not provided
  const [selectedLongitude, setSelectedLongitude] = useState(longitude || 74.3587); // Default to Lahore if longitude not provided

  const handleNavigationStart = () => {
    // You can pass latitude, longitude, and location to the Started screen
    navigation.navigate('Started', {
      latitude: selectedLatitude,
      longitude: selectedLongitude,
      location: searchText,
    });
  };
  

  return (
    <View style={styles.container}>
      {/* Google Places Autocomplete Input Field */}
      <View style={styles.inputContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search for a location"
          fetchDetails={true}
          onPress={(data, details = null) => {
            setSearchText(data.description);
            if (details) {
              const { lat, lng } = details.geometry.location;
              setSelectedLatitude(lat); // Update latitude on location selection
              setSelectedLongitude(lng); // Update longitude on location selection
            }
          }}
          query={{
            key: 'AIzaSyDxm-Y_KRycp85tUhZR82088vvOa4m7JtE', // Add your Google API key here
            language: 'en',
          }}
          styles={{
            textInput: styles.input,
          }}
        />
        {/* Search Button */}
        <TouchableOpacity style={styles.searchButton} onPress={() => console.log("Search pressed")}>
          <FontAwesome name="search" size={20} color="#007BFF" />
        </TouchableOpacity>
      </View>

      {/* Floating Container with Location Name */}
      <View style={styles.floatingContainer}>
        <Text style={styles.text}>Selected Location: {searchText}</Text>
      </View>

      {/* Map View */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: selectedLatitude,
          longitude: selectedLongitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          latitude: selectedLatitude,
          longitude: selectedLongitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Marker */}
        <Marker
          coordinate={{
            latitude: selectedLatitude,
            longitude: selectedLongitude,
          }}
          title={searchText || 'Default Location'}
          description="Selected Location"
        />
      </MapView>

      {/* Floating Start Navigation Button */}
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={handleNavigationStart}
      >
        <Text style={styles.navigationButtonText}>Start Navigation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  inputContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 10, // Ensure it appears above the map
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    flexDirection: 'row', // Align input and button horizontally
    alignItems: 'flex-start',
  },
  input: {
    height: 50,
    fontSize: 16,
    paddingLeft: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    flex: 1, // Allow input field to take up remaining space
  },
  searchButton: {
    padding: 10,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 25,
    backgroundColor: '#f1f1f1', // Light background for the button
  },
  floatingContainer: {
    position: 'absolute',
    top: 80,
    left: 20,
    right: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  navigationButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    paddingVertical: 15,
    backgroundColor: '#00A9E0',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  navigationButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SelectLocation;
