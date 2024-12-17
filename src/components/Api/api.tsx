import axios from 'axios';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export const getDrawerItems = async () => {
    const response = await axios.post('http://192.168.5.45:5000/drawer/', {
        type: "3",
        MenuId: "4",
        MenuName: "Add Employee",
        ParentId: "0",
        UserTypeID: "0",
        IsActive: "1",
        Isform: "1",
        FormId: "101",
        DisplayName: "Add Employee",
        IconImage: "https://example.com/icons/add-employee.png"
      });
    const data =  response;
    return data;
  };
  