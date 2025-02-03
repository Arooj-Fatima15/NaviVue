import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {HomeScreenProps} from '../navigation/StackParamList';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth().currentUser;
      if (user) {
        try {
          const userDoc = await firestore()
            .collection('users')
            .doc(user.uid)
            .get();
          if (userDoc.exists) {
            const userData = userDoc.data();
            setFirstName(userData.firstName || 'User');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          Alert.alert('Error', 'Failed to load profile data.');
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('MyProfile')}>
          <Feather name="user" size={26} color="#004F6B" />
        </TouchableOpacity>
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo-main.png')}
          style={styles.logo}
        />
      </View>

      <Text style={styles.welcomeText}>Welcome to NaviVue</Text>

      <View style={styles.profileSection}>
        <Image
          source={require('../assets/profileImage.png')}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.greetingText}>Good Morning, {firstName}!</Text>
          <Text style={styles.subGreetingText}>How are you feeling today?</Text>
        </View>
      </View>

      {/* Quick Access Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle2}>Quick Access</Text>
        <View style={styles.quickAccessContainer}>
          {/* Access Location Button */}
          <TouchableOpacity style={styles.quickAccessButton}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>📍</Text>
            </View>
            <Text style={styles.buttonText}>Access Location</Text>
            <View style={styles.pill}>
              <Text style={styles.pillText}>Location</Text>
            </View>
          </TouchableOpacity>

          {/* Connected Device Button */}
          <TouchableOpacity style={styles.quickAccessButton}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>🔗</Text>
            </View>
            <Text style={styles.buttonText}>Connected device</Text>
            <View style={styles.pill}>
              <Text style={styles.pillText}>Connection</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Navigation History Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Navigation History</Text>
        <View style={styles.historyContainer}>
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <View key={index} style={styles.historyBox} />
            ))}
        </View>
      </View>

      {/* Saved Places Section */}
      <View style={styles.container2}>
        {/* Section Title */}
        <Text style={styles.sectionTitle2}>Saved Places</Text>

        {/* Saved Places */}
        <View style={styles.savedPlacesContainer}>
          {/* Home */}
          <TouchableOpacity style={styles.savedPlace}>
            <Image
              source={require('../assets/home-icon.png')}
              style={styles.icon2}
              resizeMode="contain"
            />
            <Text style={styles.placeText}>Home</Text>
          </TouchableOpacity>

          {/* Hospital */}
          <TouchableOpacity style={styles.savedPlace}>
            <Image
              source={require('../assets/hospital-icon.png')}
              style={styles.icon2}
              resizeMode="contain"
            />
            <Text style={styles.placeText}>Hospital</Text>
          </TouchableOpacity>

          {/* University */}
          <TouchableOpacity style={styles.savedPlace}>
            <Image
              source={require('../assets/university-icon.png')}
              style={styles.icon2}
              resizeMode="contain"
            />
            <Text style={styles.placeText}>University</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Start Navigation Button */}
      <TouchableOpacity
        style={styles.startNavigationButton}
        onPress={() => navigation.navigate('AllowLocation')}>
        <Text style={styles.startNavigationText}>Start Navigation</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 24,
    color: '#000',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 150,
    height: 70,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002F63',
    textAlign: 'center',
    marginBottom: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002F63',
  },
  subGreetingText: {
    fontSize: 14,
    color: '#737373',
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002F63',
    marginBottom: 10,
  },

  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  quickAccessButton: {
    backgroundColor: '#035B73', // Button background color
    borderRadius: 16, // Rounded corners
    alignItems: 'center',
    paddingVertical: 20,
    flex: 1, // Equal space for both buttons
    marginHorizontal: 8, // Space between buttons
    elevation: 5, // Slight shadow for depth
  },
  iconContainer: {
    backgroundColor: '#FFFFFF', // White circular background for icon
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 24,
    color: '#035B73', // Icon color matching the button theme
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF', // Text color
    marginBottom: 10,
  },
  pill: {
    backgroundColor: '#FFFFFF', // White pill background
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  pillText: {
    fontSize: 14,
    color: '#035B73', // Text color for the pill
  },
  sectionTitle2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#035B73',
    marginBottom: 10,
  },

  historyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  historyBox: {
    backgroundColor: '#E3F4FB',
    height: 60,
    width: '22%',
    borderRadius: 10,
  },
  savedPlacesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    marginVertical: 20,
  },
  sectionTitle3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002F63', // Navy blue
    marginBottom: 10,
  },

  savedPlace: {
    backgroundColor: '#E3F4FB', // Light cyan background
    borderRadius: 10,
    paddingVertical: 15,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5, // Space between cards
  },
  icon2: {
    width: 48, // Icon size
    height: 48,
  },
  placeText: {
    fontSize: 14,
    color: '#002F63', // Navy blue
    fontWeight: 'bold',
    marginTop: 8,
  },
  startNavigationButton: {
    backgroundColor: '#002F63',
    borderRadius: 99,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  startNavigationText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
