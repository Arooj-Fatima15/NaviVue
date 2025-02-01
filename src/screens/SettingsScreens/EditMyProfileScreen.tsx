import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Feather from 'react-native-vector-icons/Feather';
import {EditMyProfileScreenProps} from '../../navigation/StackParamList';

const EditMyProfileScreen: React.FC<EditMyProfileScreenProps> = ({
  navigation,
}) => {
  const [title, setTitle] = useState('');
  const [surname, setSurname] = useState('Vick');
  const [firstName, setFirstName] = useState('John');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('44207334 3456');
  const [religion, setReligion] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');

  const handleMobileChange = text => {
    const numericText = text.replace(/[^0-9]/g, ''); // Allow only numbers
    setMobile(numericText);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Personal Information</Text>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/profileImage.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Feather name="edit-2" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formContainer}>
        <CustomInput
          label="Title"
          value={title}
          onChangeText={setTitle}
          placeholder="Select one Mr./Mrs."
          dropdownOptions={['Mr.', 'Mrs.']}
          required
        />
        <CustomInput
          label="Surname"
          value={surname}
          onChangeText={setSurname}
          required
        />
        <CustomInput
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
          required
        />
        <CustomInput
          label="Date of Birth"
          value={dob}
          onChangeText={setDob}
          placeholder="Pick Date"
          isDate
        />
        <CustomInput
          label="Gender"
          value={gender}
          onChangeText={setGender}
          placeholder="Select Gender"
          dropdownOptions={['Male', 'Female']}
        />
        <CustomInput
          label="Mobile No."
          value={mobile}
          onChangeText={handleMobileChange}
          required
          keyboardType="numeric"
        />
        <CustomInput
          label="Religion"
          value={religion}
          onChangeText={setReligion}
          placeholder="Type Here"
        />
        <CustomInput
          label="Marital Status"
          value={maritalStatus}
          onChangeText={setMaritalStatus}
          placeholder="Select Status"
          dropdownOptions={['Single', 'Married']}
        />
      </View>

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  required,
  isDate,
  dropdownOptions,
  keyboardType,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>
      {required ? <Text style={styles.required}>* </Text> : ''} {label}
    </Text>
    <View style={styles.inputWrapper}>
      {dropdownOptions ? (
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={value}
            onValueChange={onChangeText}
            style={styles.picker}>
            <Picker.Item label="Select..." value="" />
            {dropdownOptions.map((option, index) => (
              <Picker.Item key={index} label={option} value={option} />
            ))}
          </Picker>
          <Feather
            name="chevron-down"
            size={20}
            color="#555"
            style={styles.pickerIcon}
          />
        </View>
      ) : (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType || 'default'}
        />
      )}
      {isDate && (
        <Feather name="calendar" size={20} color="#555" style={styles.icon} />
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    padding: 10,
    zIndex: 1, // Ensures it's on top
    backgroundColor: 'rgba(255,255,255,0.5)', // Debugging: Check if it overlaps
  },

  header: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#002F67',
  },

  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  imageWrapper: {
    position: 'relative', // Ensures the edit icon is positioned relative to this container
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: -10, // Moves it slightly over the image's right edge
    backgroundColor: '#002F67',
    padding: 5,
    borderRadius: 15,
  },

  formContainer: {
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#737373',
    marginBottom: 5,
  },
  required: {
    color: 'red',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: '#E8E6EA',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#999CAD',
    fontWeight: '500',
  },
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  picker: {
    flex: 1,
    fontSize: 16,
    color: '#999CAD',
  },
  pickerIcon: {
    position: 'absolute',
    right: 10,
    pointerEvents: 'none',
  },
  icon: {
    marginLeft: 10,
    color: '#555',
  },
  nextButton: {
    backgroundColor: '#002F63',
    borderRadius: 99,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 50,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditMyProfileScreen;
