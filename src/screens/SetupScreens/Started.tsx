import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

// Replace with your actual Google Maps API Key
const GOOGLE_MAPS_API_KEY = 'AIzaSyDxm-Y_KRycp85tUhZR82088vvOa4m7JtE';

interface Location {
  latitude: number;
  longitude: number;
}

interface RouteParams {
  latitude?: number;
  longitude?: number;
  location?: string;
}

interface StartedProps {
  route: {
    params: RouteParams;
  };
}

const Started: React.FC<StartedProps> = ({ route }) => {
  const navigation = useNavigation();
  const { latitude, longitude } = route.params || {};

  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location>({
    latitude: latitude || 0,
    longitude: longitude || 0,
  });
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
        console.log('Current Location:', { latitude, longitude });
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

  useEffect(() => {
    if (currentLocation && destination.latitude && destination.longitude) {
      mapRef.current?.fitToCoordinates(
        [currentLocation, destination],
        {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          animated: true,
        }
      );
    }
  }, [currentLocation, destination]);

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.topBarButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topBarButton} onPress={getCurrentLocation}>
          <Icon name="refresh" size={20} color="blue" />
        </TouchableOpacity>
      </View>

      {/* Map */}
      {currentLocation && destination.latitude && destination.longitude && (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={
            {
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }
          }
        >
          <Marker
            coordinate={currentLocation}
            title="You are here"
            pinColor="blue"
          />
          <Marker
            coordinate={destination}
            title="Destination"
            pinColor="red"
          />
          <MapViewDirections
            origin={currentLocation}
            destination={destination}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={3}
            strokeColor="darkblue"
            onReady={(result) => {
              setDistance(result.distance);
              setDuration(result.duration);
              console.log(`Distance: ${result.distance} km`);
              console.log(`Duration: ${result.duration} mins`);
            }}
            onError={(errorMessage) => {
              console.error("Directions Error: ", errorMessage);
              Alert.alert("Error", "Unable to fetch directions.");
            }}
          />
        </MapView>
      )}

      {/* Distance and Time Info */}
      {(distance !== null || duration !== null) && (
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Icon name="walk" size={25} color="#00A9E0" />
            <Text style={styles.statText}>{distance ? `${distance.toFixed(2)} km` : 'N/A'}</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="time" size={25} color="#00A9E0" />
            <Text style={styles.statText}>{duration ? `${Math.ceil(duration)} mins` : 'N/A'}</Text>
          </View>
        </View>
      )}

      {/* Start Navigation Button */}
      <TouchableOpacity style={styles.floatingButton} onPress={() => Alert.alert('Navigation', 'Starting navigation...')}>
        <Text style={styles.buttonText}>Start Navigation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1000,
  },
  topBarButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    elevation: 5,
    marginHorizontal: 5,
  },
  map: {
    flex: 1,
    width: '100%',
  },
  statsContainer: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    borderRadius: 15,
    padding: 15,
    elevation: 5,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#000',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#00A9E0',
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Started;
