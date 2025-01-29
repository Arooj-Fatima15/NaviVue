import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; // Import Feather icons
import { FavoritePlacesScreenProps } from "../../navigation/StackParamList";

const FavoritePlaces: React.FC<FavoritePlacesScreenProps> = ({ navigation }) => {
  // Array of places
  const places = [
    { id: 1, name: 'Hospital', icon: require('../../assets/icons/hospital.png') },
    { id: 2, name: 'Restaurant', icon: require('../../assets/icons/restaurant.png') },
    { id: 3, name: 'Grocery store', icon: require('../../assets/icons/grocery.png') },
    { id: 4, name: 'Home', icon: require('../../assets/icons/home.png') },
    { id: 5, name: 'University', icon: require('../../assets/icons/university.png') },
    { id: 6, name: 'Office', icon: require('../../assets/icons/office.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('SettingsScreen')}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favorite Places</Text>
      </View>

      {/* Favorite Places List */}
      <View style={styles.placesContainer}>
        {places.map((place) => (
          <View key={place.id} style={styles.card}>

            <View style={styles.flex}>
            <Image source={require("../../assets/icons/favouritePlace.png")} style={styles.icon1} />
            <Image source={place.icon} style={styles.icon} />
            </View>
            <Text style={styles.cardText}>{place.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    marginTop: 30,
    marginRight: 100,
    marginBottom: 30,
    height: 80, // Adjust height to match the design
    backgroundColor: '#2CBCEF',
    borderBottomRightRadius: 35,
    borderTopRightRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 30, // Adjust for proper alignment
  },
  headerTitle: {
    color: '#4F4F4F',
    position: 'absolute',
    right: 40,
    fontSize: 18,
    fontWeight: 'bold',
  },


  placesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  card: {
    width: '40%',
    backgroundColor: '#E8F9FD',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  flex: {
    flex: 1,
    flexDirection: 'row', // Align children horizontally
    justifyContent: 'space-between', // Space out children
    width: '100%', // Makes the component occupy the full width of its parent
  },
  

  icon1: {
    width: 24,
    height: 24,
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  cardText: {
  
    fontSize: 14,
    fontWeight: '700',
    color: '#4F4F4F',
  },
});

export default FavoritePlaces;
