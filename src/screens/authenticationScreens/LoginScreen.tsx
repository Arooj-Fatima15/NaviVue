import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import { LoginScreenProps } from "../../navigation/StackParamList";

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Validation for inputs
  const validateInput = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both email and password.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  // Login function
  const handleLogin = async () => {
    if (!validateInput()) return;

    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert("Success", "Logged in successfully!");
      navigation.replace("Main"); // Replace 'Main' with your main/home screen route
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          Alert.alert("Error", "Invalid email address.");
          break;
        case "auth/user-not-found":
          Alert.alert("Error", "No user found for that email.");
          break;
        case "auth/wrong-password":
          Alert.alert("Error", "Incorrect password.");
          break;
        default:
          Alert.alert("Error", "Something went wrong. Please try again.");
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
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/oode2rx1rcn-187%3A1093?alt=media&token=d9a63407-5f74-4216-846a-0e9167c2e031",
          }}
        />
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          Enter your email address and{"\n"}password to access your account
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

          <Text
            style={styles.forgotPassword}
            onPress={() => navigation.navigate("ForgotPassword")} // Navigate to the Forgot Password screen
          >
            Forgot Password?
          </Text>

          {/* Sign In Button */}
          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={styles.signInButtonText}>
              {loading ? "Signing in..." : "Sign In"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Navigation */}
        <Text style={styles.signupPrompt}>
          Create a new account?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate("Signup")} // Navigate to the Signup screen
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FAFAFF", // For semi-transparent overlay
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    zIndex: 10, // Ensure the logo is above other elements
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    color: "#023880",
    marginVertical: 10,
    zIndex: 5, // Ensure title is above other elements
  },
  subtitle: {
    fontSize: 12,
    color: "#afafaf",
    textAlign: "center",
    marginBottom: 20,
    zIndex: 5, // Ensure subtitle is above other elements
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
    zIndex: 3, // Ensure the input fields are above background but below buttons
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#e8e6ea",
    borderWidth: 1,
    borderRadius: 15,
    padding: 7,
    marginBottom: 10,
    zIndex: 3, // Ensure input fields are above other elements
  },
  input: {
    fontSize: 14,
    color: "#999cae",
  },
  forgotPassword: {
    fontSize: 11,
    fontWeight: "700",
    color: "#004f6b",
    alignSelf: "flex-end",
    marginBottom: 20,
    zIndex: 4, // Ensure it's clickable
  },
  signInButton: {
    backgroundColor: "#023880",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    zIndex: 5, // Make sure the button is on top and clickable
  },
  signInButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
  signupPrompt: {
    fontSize: 11,
    color: "#999cae",
    zIndex: 3, // Ensure it's above the background but below other interactive elements
  },
  signupLink: {
    color: "rgba(2,56,128,1)",
    fontWeight: "700",
  },
});

export default LoginScreen;
