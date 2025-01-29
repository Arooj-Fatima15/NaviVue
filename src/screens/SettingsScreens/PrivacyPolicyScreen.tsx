import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; // Import Feather icons
import { PrivacyPolicyScreenProps } from "../../navigation/StackParamList";

const PrivacyPolicyScreen: React.FC<PrivacyPolicyScreenProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('SettingsScreen')}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          "We are committed to protecting your privacy and ensuring the security of your personal information. 
          Our app collects and uses data solely to provide and improve our services, such as enhancing navigation 
          accuracy, personalizing your experience, and maintaining the functionality of the app. 
          We do not share your information with third parties without your explicit consent, except where required by law. 
          All data is stored securely and handled in accordance with industry standards. 
          You have the right to access, update, or delete your personal information at any time. 
          For detailed information on how we collect, use, and protect your data, please review our full Privacy Policy."
        </Text>
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
    height: 200,
    backgroundColor: '#2CBCEF',
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
    color: '#023880',
    fontSize: 48,
    fontWeight: '900',
  },
  content: {
    padding: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#023880',
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default PrivacyPolicyScreen;
