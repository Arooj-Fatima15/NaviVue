import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../navigation/StackParamList';

const WelcomeScreen: React.FC<{navigation: NativeStackNavigationProp<StackParamList>}> = ({navigation}) => {
  return (
    <ImageBackground
    source={require('../../assets/onboarding-bg.jpg')}

      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/offlkfudir9-353%3A314?alt=media&token=007144ad-f515-4a63-a666-18913914745f',
            }}
          />
           <Text style={styles.title}>Welcome to NaviVue</Text>
          <Text style={styles.subtitle}>
            Discover the next generation of navigation solutions, designed for
            your independence.
          </Text>
          
         
        </View>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Login')} // Replace 'NextScreenName' with your target screen
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>


{/* Login Navigation */}
<Text style={styles.loginPrompt}>
          Shortcut to move to Screen{" "}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate("Main")} // Navigate to the Login screen
          >
            Home Screen
          </Text>
          </Text>

      </View>
    </ImageBackground>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a slight overlay for readability
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: width * 0.6, // Responsive width
    height: width * 0.6, // Maintain aspect ratio
    resizeMode: 'contain',
  },

  loginPrompt: {
    fontSize: 11,
    color: "#999cae",
    marginTop: 20,
  },
  loginLink: {
    color: "rgba(2,56,128,1)",
    fontWeight: "700",
  },
  subtitle: {
    color: '#E4E5E6',
    fontSize: 14,
    lineHeight: 21, // 1.5x fontSize for better readability
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginVertical: 20,
  },
  decorativeImage: {
    width: width * 0.7,
    height: height * 0.05,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  title: {
    color: '#5AC0E4',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  getStartedButton: {
    backgroundColor: '#5AC0E4',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
