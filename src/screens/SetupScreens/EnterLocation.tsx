import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { EnterLocationProps } from '../../navigation/StackParamList';
import Feather from 'react-native-vector-icons/Feather'; // Import Feather icons


const EnterLocation: React.FC<EnterLocationProps> = ({navigation})  => {
  const [searchText, setSearchText] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const locations = [
    { id: '1', name: 'Golden Avenue', address: '8502 Preston Rd. Ingl..' },
    { id: '2', name: 'University of Central Punjab', address: 'Khayaban-e-Jinnah, Johar Town' },
    { id: '3', name: 'The University of Lahore', address: '1 Km- Defence Road, near bhuptian..' },
  ];

  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const filtered = locations.filter((location) =>
        location.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations([]);
    }
  };

  const renderLocation = ({ item }) => (
    <TouchableOpacity style={styles.locationItem}>
      <Text style={styles.locationName}>{item.name}</Text>
      <Text style={styles.locationAddress}>{item.address}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('SettingsScreen')}>
          <Feather name="arrow-left" size={24} color="#AFAFAF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help Centre</Text>
      </View>

      {/* Use Current Location Button */}
      <TouchableOpacity
        style={styles.currentLocationButton}
        onPress={() => navigation.navigate('AllowLocation')} // Navigate to AllowLocation
      >
        <Text style={styles.currentLocationText}>Use my current location</Text>
      </TouchableOpacity>

      {/* Location List */}
      <FlatList
        data={searchText ? filteredLocations : locations}
        keyExtractor={(item) => item.id}
        renderItem={renderLocation}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },


  header: {
   
    height: 40,
    
   marginTop:40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
   
    left: 16,
    
  },
  headerTitle: {
    color: '#023880',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  searchInput: {
    height: 50,
    borderColor: '#D0D0D0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#F7F7F7',
  },
  currentLocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    marginBottom: 20,
  },
  currentLocationText: {
    fontSize: 16,
    color: '#003366',
  },
  list: {
    marginTop: 10,
  },
  locationItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  locationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003366',
  },
  locationAddress: {
    fontSize: 14,
    color: '#7A7A7A',
  },
});

export default EnterLocation;
