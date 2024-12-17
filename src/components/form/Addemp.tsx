import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// import DatePicker from 'react-native-date-picker';
import { Picker } from '@react-native-picker/picker';


export default function  Addemp () {

  const [loading, setLoading] = useState(false);

  const [employeeCode, setEmployeeCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [doj, setDoj] = useState(new Date());
  const [openDob, setOpenDob] = useState(false);
  const [openDoj, setOpenDoj] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');

  
  const handleSubmit = () => {
    setLoading(true);
    const employeeData = {
      employeeCode,
      firstName,
      lastName,
      dob,
      doj,
      mobileNumber,
      aadhaarNumber
    };
    console.log(employeeData);
    Alert.alert('Success', 'Employee appointed successfully!');
    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Appoint Employee</Text>

      <TextInput
        placeholder="Employee Code"
        value={employeeCode}
        onChangeText={setEmployeeCode}
        style={styles.input}
      />
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />

      {/* Date of Birth Picker */}
      <TouchableOpacity onPress={() => setOpenDob(true)} style={styles.input}>
        <Text style={styles.inputText}>Date Of Birth: {dob.toDateString()}</Text>
      </TouchableOpacity>
      {/* <DatePicker
        modal
        open={openDob}
        date={dob}
        mode="date"
        onConfirm={(date) => {
          setOpenDob(false);
          setDob(date);
        }}
        onCancel={() => {
          setOpenDob(false);
        }}
      /> */}

      {/* Date of Joining Picker */}
      <TouchableOpacity onPress={() => setOpenDoj(true)} style={styles.input}>
        <Text style={styles.inputText}>Date Of Joining: {doj.toDateString()}</Text>
      </TouchableOpacity>
      {/* <DatePicker
        modal
        open={openDoj}
        date={doj}
        mode="date"
        onConfirm={(date) => {
          setOpenDoj(false);
          setDoj(date);
        }}
        onCancel={() => {
          setOpenDoj(false);
        }}
      /> */}

      <TextInput
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Aadhaar Number"
        value={aadhaarNumber}
        onChangeText={setAadhaarNumber}
        style={styles.input}
        keyboardType="numeric"
      />

      

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#3897f0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
  },
  inputText: {
    fontSize: 16,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  pickerContainer: {
    opacity :0.7,
    borderWidth: 1,
    borderColor: '#3897f0',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#3897f0',
  },
  picker: {
    
    width: '100%',
    height: 50,
    backgroundColor: '#3897f0',
  },
  pickerItem: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#3897f0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});


