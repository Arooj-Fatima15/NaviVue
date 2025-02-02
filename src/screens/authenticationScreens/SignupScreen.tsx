import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {SignupScreenProps} from '../../navigation/StackParamList';

const SignupScreen: React.FC<SignupScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  // Validation for inputs
  const validateInput = () => {
    if (!email || !password || !confirmPassword || !firstName || !lastName) {
      Alert.alert('Error', 'Please fill in all fields.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long.');
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return false;
    }

    return true;
  };

  const handleSignup = async () => {
    if (!validateInput()) return;

    try {
      setLoading(true);
      // Create user with Firebase Authentication
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;

      // Save user data to Firestore
      await firestore().collection('users').doc(user.uid).set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('AddProfileDetails'); // Navigate to login screen after successful signup
    } catch (error) {
      console.error('Error signing up:', error);
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'That email address is already in use!');
      } else {
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/oode2rx1rcn-187%3A1093?alt=media&token=d9a63407-5f74-4216-846a-0e9167c2e031',
          }}
        />
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>
          Create an account by entering your details below
        </Text>

        {/* First Name Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="rgba(153,156,173,1)"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>

        {/* Last Name Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="rgba(153,156,173,1)"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="rgba(153,156,173,1)"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(153,156,173,1)"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="rgba(153,156,173,1)"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={[styles.signupButton, , {width: '100%'}]}
          onPress={handleSignup}
          disabled={loading}>
          <Text style={styles.signupButtonText}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Text>
        </TouchableOpacity>

        {/* Login Navigation */}
        <Text style={styles.loginPrompt}>
          Already have an account?{' '}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate('Login')} // Navigate to the Login screen
          >
            Sign In
          </Text>
        </Text>

        <Text onPress={() => navigation.navigate('AddProfileDetails')}>
          Go to Add Information
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FAFAFF',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: '#023880',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#afafaf',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#e8e6ea',
    borderWidth: 1,
    borderRadius: 15,
    padding: 7,
    marginBottom: 10,
  },
  input: {
    fontSize: 14,
    color: '#999cae',
    flex: 1,
  },
  signupButton: {
    backgroundColor: '#023880',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  loginPrompt: {
    fontSize: 11,
    color: '#999cae',
    marginTop: 20,
  },
  loginLink: {
    color: 'rgba(2,56,128,1)',
    fontWeight: '700',
  },
});

export default SignupScreen;
