import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SettingsScreenProps} from '../navigation/StackParamList';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Fetch user data from Firebase Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = auth().currentUser?.uid;
      if (userId) {
        try {
          const userDoc = await firestore()
            .collection('users')
            .doc(userId)
            .get();
          if (userDoc.exists) {
            const userData = userDoc.data();
            setFirstName(userData?.firstName || ''); // Set first name from Firestore
            setLastName(userData?.lastName || ''); // Set last name from Firestore
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Account</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/profileImage.png')} // Replace with your image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>
          {firstName} {lastName}
        </Text>
      </View>

      {/* Options Section */}
      <View style={styles.optionsSection}>
        <OptionItem
          icon="person-outline"
          title="Edit Profile"
          onPress={() => navigation.navigate('EditMyProfile')}
        />
        <OptionItem
          icon="heart-outline"
          title="Favorite Places"
          onPress={() => navigation.navigate('FavoritePlaces')}
        />
        <OptionItem
          icon="time-outline"
          title="Navigation History"
          onPress={() => navigation.navigate('NavigationHistory')}
        />
        <OptionItem
          icon="help-circle-outline"
          title="Help Center"
          onPress={() => navigation.navigate('HelpCenter')}
        />
        <OptionItem
          icon="lock-closed-outline"
          title="Privacy Policy"
          onPress={() => navigation.navigate('PrivacyPolicy')}
        />
        <OptionItem
          icon="language-outline"
          title="Language Support"
          onPress={() => navigation.navigate('LanguageSupport')}
        />
        <OptionItem
          icon="log-out-outline"
          title="Logout"
          onPress={() => navigation.navigate('Onboarding')}
        />
      </View>
    </ScrollView>
  );
};

// Option Item Component
const OptionItem = ({
  icon,
  title,
  onPress,
}: {
  icon: string;
  title: string;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.optionItem} onPress={onPress}>
    {/* Icon on the left */}
    <Ionicons name={icon} size={20} color="#2CBCEF" style={styles.optionIcon} />

    {/* Text */}
    <Text style={styles.optionText}>{title}</Text>

    {/* Chevron icon on the right */}
    <Ionicons name="chevron-forward-outline" size={20} color="#898989" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004F6B',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00AEEF',
    padding: 16,
    borderRadius: 20,
    margin: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginRight: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  optionsSection: {
    paddingHorizontal: 16,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#E7EAEE',
    justifyContent: 'space-between',
  },
  optionIcon: {
    marginRight: 16,
    fontSize: 24,
  },

  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#898989',
    flex: 1,
  },
});

export default SettingsScreen;
