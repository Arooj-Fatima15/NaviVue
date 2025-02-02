// LanguageSupportScreen.tsx
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const LanguageSupportScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon</Text>
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.goBack()} // Replace 'NextScreenName' with your target screen
      >
        <Text style={styles.getStartedText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
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

export default LanguageSupportScreen;
