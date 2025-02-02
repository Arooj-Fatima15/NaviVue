import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {MyProfileScreenProps} from '../navigation/StackParamList';

const MyProfileScreen: React.FC<MyProfileScreenProps> = ({navigation}) => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = auth().currentUser;
        if (!user) {
          Alert.alert('Error', 'User not authenticated.');
          return;
        }

        const userDoc = await firestore()
          .collection('users')
          .doc(user.uid)
          .get();

        if (userDoc.exists) {
          setProfile(userDoc.data());
        } else {
          Alert.alert('Error', 'User profile not found.');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        Alert.alert('Error', 'Failed to fetch profile.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2CBCEF" />
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>Failed to load profile.</Text>
      </View>
    );
  }

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
          source={require('../assets/profileImage.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>
            {profile.firstName} {profile.lastName}
          </Text>
          <Text style={styles.profilePhone}>{profile.mobile}</Text>
        </View>
      </View>

      {/* Information Section */}
      <View style={styles.infoSection}>
        <InfoItem icon="mail" label="Email ID" value={profile.email} />
        <InfoItem icon="user" label="Gender" value={profile.gender} />
        <InfoItem icon="calendar" label="Date of Birth" value={profile.dob} />
        <InfoItem icon="map-pin" label="Zip Code" value="57000" />
        <InfoItem
          icon="home"
          label="Address"
          value="Cottage, Outfit Compound, Tenebrae..."
        />
        <InfoItem
          icon="book"
          label="Notes"
          value="Some personal notes here..."
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
    <Feather name={icon} size={24} color="#4F4F4F" style={styles.infoIcon} />
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
    height: 80,
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
    top: 30,
  },
  headerTitle: {
    color: '#4F4F4F',
    position: 'absolute',
    right: 60,
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  profileTextContainer: {
    marginLeft: 16,
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
    color: '#4F4F4F',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#AFAFAF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default MyProfileScreen;
