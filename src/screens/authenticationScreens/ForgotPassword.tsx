import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import auth from "@react-native-firebase/auth";
import { ForgotPasswordScreenProps } from "../../navigation/StackParamList";

// Function to send OTP to the email
const sendOtpToEmail = (email, otpCode) => {
  fetch("https://flourishing-kelpie-672381.netlify.app/.netlify/functions/send-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      otpCode,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("OTP sent successfully:", data);
    })
    .catch((error) => {
      console.error("Error sending OTP:", error);
    });
};



const ForgotPassword: React.FC<ForgotPasswordScreenProps> = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Validate Email Input
  const validateInput = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return false;
    }
    return true;
  };

  // Generate OTP and send to email
  const handleSendOtp = async () => {
    if (!validateInput()) return;

    try {
      setLoading(true);

      // Generate a 6-digit OTP
      const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

      // Send OTP to the user's email
      sendOtpToEmail(email, otpCode);

      // Navigate to OTP verification screen with email and OTP code
      navigation.navigate("OtpVerification", { email, otpCode });

      Alert.alert("Success", "OTP sent successfully! Please check your email.");

    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/c5qfr9k0t7i-187%3A1092?alt=media&token=3bf1a785-499e-4f95-b0f5-1ea1e7b60258",
          }}
        />
        <Text style={styles.title}>Password Reset</Text>
        <Text style={styles.subtitle}>
          If you need help resetting your password, we can help by sending you a link to reset it.
        </Text>
        <View style={styles.inputContainer}>
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

          {/* Send OTP Button */}
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleSendOtp}
            disabled={loading}
          >
            <Text style={styles.resetButtonText}>
              {loading ? "Sending OTP..." : "Send OTP"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Back to Login Navigation */}
        <Text style={styles.loginPrompt}>
          Remember your password?{" "}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate("Login")} // Navigate to the Login screen
          >
            Log In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensures content fits within the screen and is scrollable
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FAFAFF",
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    color: "#023880",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 12,
    color: "#afafaf",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    borderRadius: 15,
    padding: 7,
    marginBottom: 10,
  },
  input: {
    fontSize: 14,
    color: "#999cae",
    flex: 1, // Ensures the input takes the available space
  },
  resetButton: {
    backgroundColor: "#023880",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  resetButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
  loginPrompt: {
    fontSize: 11,
    color: "#999cae",
  },
  loginLink: {
    color: "rgba(2,56,128,1)",
    fontWeight: "700",
  },
});


export default ForgotPassword;