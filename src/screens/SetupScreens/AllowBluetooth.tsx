import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const AllowBluetooth = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
     <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
             <Icon name="arrow-back" size={24} color="black" />
           </TouchableOpacity>

      {/* Bluetooth Icon */}
      <Icon name="bluetooth" size={100} color="#023880" style={styles.icon} />



      {/* Title */}
      <Text style={styles.title}>Allow Bluetooth</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        We need permission to access your glasses
      </Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.allowButton}  onPress={() => navigation.navigate('BluetoothConnected')}>
        <Text style={styles.allowButtonText}>Allow Bluetooth Access</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.denyButton}>
        <Text style={styles.denyButtonText}>Do not Allow</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backArrow: {
    fontSize: 20,
    color: "#023880",
  },
  icon: {
    
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#023880",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#999cae",
    textAlign: "center",
    marginBottom: 30,
  },
  allowButton: {
    width: "100%",
    backgroundColor: "#023880",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },
  allowButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  denyButton: {
    width: "100%",
    backgroundColor: "#e8f1ff",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  denyButtonText: {
    color: "#023880",
    fontWeight: "600",
  },
});

export default AllowBluetooth;
