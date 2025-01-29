import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; // Import Feather icons
import { HelpCenterScreenProps } from "../../navigation/StackParamList";

const HelpCentreScreen: React.FC<HelpCenterScreenProps> = ({ navigation }) => {
  // FAQ Data
  const faqs = [
    {
      question: "How do I pair my glasses with the app?",
      answer: "Enable Bluetooth, open the app, and follow the on-screen instructions to select and connect your glasses.",
    },
    {
      question: "What permissions does the app require and why?",
      answer: "The app needs location, Bluetooth, and microphone access for navigation, device connection, and voice commands.",
    },
    {
      question: "How can I reset my glasses?",
      answer: "Hold the power button for 10 seconds to reset the glasses, then re-pair with the app.",
    },
    {
      question: "How do I update my account information?",
      answer: "Go to ‘Account’ in settings to update your details, then save the changes.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('SettingsScreen')}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help Centre</Text>
      </View>

      {/* FAQ Section */}
      <View style={styles.faqContainer}>
        <Text style={styles.faqTitle}>FAQs</Text>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqItem}>
            <Text style={styles.question}>{index + 1}. {faq.question}</Text>
            <Text style={styles.answer}><Text style={styles.answerLabel}>Answer:</Text> {faq.answer}</Text>
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
  faqContainer: {
    padding: 16,
    backgroundColor: '#D4F2FF',

  },
  faqTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#023880',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#023880',
    marginBottom: 5,
  },
  answer: {
    fontSize: 14,
    color: '#2CBCEF',
  },
  answerLabel: {
    fontWeight: 'bold',
    color: '#023880',
  },
});

export default HelpCentreScreen;
