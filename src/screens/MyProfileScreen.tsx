import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; // Import Feather icons
import {MyProfileScreenProps} from '../navigation/StackParamList';

const MyProfileScreen: React.FC<MyProfileScreenProps> = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/profileImage.png')} // Replace with your image URL
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Tristan Caine</Text>
          <Text style={styles.profilePhone}>+92 333 1463875</Text>
        </View>
      </View>

      {/* Information Section */}
      <View style={styles.infoSection}>
        <InfoItem icon="mail" label="Email ID" value="ThePredator@gmail.com" />
        <InfoItem icon="user" label="Gender" value="Male" />
        <InfoItem
          icon="calendar"
          label="Date of Birth"
          value="06 November, 1996 | 28 Years"
        />
        <InfoItem icon="map-pin" label="Zip Code" value="57000" />
        <InfoItem
          icon="home"
          label="Address"
          value="Cottage, Outfit Compound, Tenebrae..."
        />
        <InfoItem
          icon="book" // Feather icon for Notes
          label="Notes"
          value="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
      </View>
    </ScrollView>
  );
};

// Reusable Information Item Component
const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) => (
  <View style={styles.infoItem}>
    <Feather
      name={icon} // Using Feather icon name directly
      size={24} // Size of the icon
      color="#4F4F4F" // Icon color
      style={styles.infoIcon}
    />
    <View>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

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
    right: 60,
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row', // Aligns image and text horizontally
    alignItems: 'center', // Centers vertically within the row
    paddingHorizontal: 16, // Adds padding to the sides
    marginTop: 0, // Adds top margin
  },
  profileTextContainer: {
    marginLeft: 16, // Adds space between the image and text
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  profilePhone: {
    fontSize: 14,
    color: '#898989',
  },
  infoSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  infoIcon: {
    marginRight: 16,
  },
  infoLabel: {
    fontSize: 14,
    color: '#4F4F4F', // Updated color for the label
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#AFAFAF', // Updated color for the value
  },
});

export default MyProfileScreen;
