import React from 'react';
import { View, Text, StyleSheet , TouchableOpacity , Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const StartNavigation= ({ navigation }: any) =>{
  return (
    <View style={styles.container}>
      {/* Back Button */}
           <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                   <Icon name="arrow-back" size={24} color="black" />
                 </TouchableOpacity>
       <Image
                style={styles.logo}
                source={require('../../assets/2.png')}
              />

 {/* Title */}
      <Text style={styles.title}>Let's Start Navigating </Text>
      {/* Buttons */}
            <TouchableOpacity style={styles.allowButton} onPress={() => navigation.navigate('NewLocation')}>
              <Text style={styles.allowButtonText}>Begin</Text>
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
  logo: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    zIndex: 10, // Ensure the logo is above other elements
    marginBottom:10,
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign:"center",
    color: "#023880",
    marginBottom: 20,
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
});

export default StartNavigation;
