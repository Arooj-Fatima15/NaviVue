import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; // Import Feather icons
import { NavigationHistoryScreenProps } from "../../navigation/StackParamList";

const NavigationHistoryScreen: React.FC<NavigationHistoryScreenProps> = ({ navigation }) => {
  // Data for navigation history
  const historyData = [
    {
      id: 1,
      title: "Lahore Zoo Safari",
      time: "1 hour ago",
      section: "Today",
    },
    {
      id: 2,
      title: "Eiffel Tower, Bahria Town",
      time: "2 hours ago",
      section: "Today",
    },
    {
      id: 3,
      title: "Sozo Water Park",
      time: "2 hours ago",
      section: "Today",
    },
    {
      id: 4,
      title: "Jinnah Garden",
      time: "5 hours ago",
      section: "Yesterday",
    },
    {
      id: 5,
      title: "Safari Park",
      time: "5 hours ago",
      section: "Yesterday",
    },
    {
      id: 6,
      title: "Joyland Park Lahore",
      time: "6 hours ago",
      section: "Yesterday",
    },
    {
      id: 7,
      title: "Shalimar Gardens",
      time: "6 hours ago",
      section: "Yesterday",
    },
    {
      id: 8,
      title: "Minar-e-Pakistan",
      time: "7 hours ago",
      section: "Yesterday",
    },
    {
      id: 9,
      title: "Kamran's Baradari",
      time: "7 hours ago",
      section: "Yesterday",
    },
    {
      id: 10,
      title: "Model Town Park",
      time: "8 hours ago",
      section: "Yesterday",
    },
  ];

  // Grouping data by sections
  const groupedData = historyData.reduce((acc, item) => {
    acc[item.section] = acc[item.section] || [];
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, typeof historyData>);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('SettingsScreen')}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Navigation History</Text>
      </View>

      {/* Navigation History List */}
      <View style={styles.historyContainer}>
        {Object.keys(groupedData).map((section) => (
          <View key={section}>
            <Text style={styles.sectionTitle}>{section}</Text>
            {groupedData[section].map((item) => (
              <View key={item.id} style={styles.historyItem}>
                <View style={styles.historyDetails}>
                  <Feather name="bell" size={24} color="#2CBCEF" style={styles.icon} />
                  <Text style={styles.historyTitle}>{item.title}</Text>
                </View>
                <Text style={styles.historyTime}>{item.time}</Text>
              </View>
            ))}
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


  historyContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4F4F4F',
    marginBottom: 10,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8F9FD',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  historyDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  historyTitle: {
    fontSize: 14,
    color: '#787878',
    fontWeight: '600',
  },
  historyTime: {
    fontSize: 12,
    color: '#828282',
  },
});

export default NavigationHistoryScreen;
