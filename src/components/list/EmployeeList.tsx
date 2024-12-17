import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

export default function EmployeeList() {
  const employees = [
    { id: '1', name: 'John Doe', role: 'Service Engineer' },
    { id: '2', name: 'Jane Smith', role: 'Service Manager' },
    { id: '3', name: 'Samuel Green', role: 'Technician' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee List</Text>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listItem: {
    padding: 16,
    marginVertical: 4,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
    color: '#757575',
  },
});
