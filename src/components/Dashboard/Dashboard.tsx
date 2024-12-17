import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export default function ServiceDeskDashboard() {
  const handleSubmitSettings = () => console.log('Settings pressed');
  const handleSubmitTasks = () => console.log('Tasks pressed');
  const handleSubmitRequest = () => console.log('New Request pressed');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Service Desk</Text>
        <Text style={styles.headerDate}>12-Dec-2024</Text>
      </View>

      {/* Task Summary */}
      <View style={styles.summarySection}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Pending Requests</Text>
          <Text style={styles.summaryCount}>15</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>In Progress</Text>
          <Text style={styles.summaryCount}>8</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Completed</Text>
          <Text style={styles.summaryCount}>20</Text>
        </View>
      </View>

      {/* Active Tasks */}
      <Text style={styles.sectionTitle}>Active Tasks</Text>
      <ScrollView style={styles.taskList}>
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Fix Internet Issue</Text>
          <Text style={styles.taskSubtitle}>Client: John Doe</Text>
          <Text style={styles.taskSubtitle}>Location: 123 Main St</Text>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Air Conditioner Repair</Text>
          <Text style={styles.taskSubtitle}>Client: Jane Smith</Text>
          <Text style={styles.taskSubtitle}>Location: 456 Elm St</Text>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Fix Internet Issue</Text>
          <Text style={styles.taskSubtitle}>Client: John Doe</Text>
          <Text style={styles.taskSubtitle}>Location: 123 Main St</Text>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Air Conditioner Repair</Text>
          <Text style={styles.taskSubtitle}>Client: Jane Smith</Text>
          <Text style={styles.taskSubtitle}>Location: 456 Elm St</Text>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Fix Internet Issue</Text>
          <Text style={styles.taskSubtitle}>Client: John Doe</Text>
          <Text style={styles.taskSubtitle}>Location: 123 Main St</Text>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Air Conditioner Repair</Text>
          <Text style={styles.taskSubtitle}>Client: Jane Smith</Text>
          <Text style={styles.taskSubtitle}>Location: 456 Elm St</Text>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Fix Internet Issue</Text>
          <Text style={styles.taskSubtitle}>Client: John Doe</Text>
          <Text style={styles.taskSubtitle}>Location: 123 Main St</Text>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Air Conditioner Repair</Text>
          <Text style={styles.taskSubtitle}>Client: Jane Smith</Text>
          <Text style={styles.taskSubtitle}>Location: 456 Elm St</Text>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Wave Background */}
        <Svg height="100" width="100%" style={styles.wave} viewBox="0 0 1440 320">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <Stop offset="100%" stopColor="#2575FC" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Path
            fill="url(#grad)"
            d="M0,160L48,149.3C96,139,192,117,288,101.3C384,85,480,75,576,101.3C672,128,768,192,864,218.7C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </Svg>

        {/* Footer Buttons */}
        <View style={styles.footerContent}>
          <TouchableOpacity onPress={handleSubmitTasks} style={styles.footerButton}>
            <Text style={styles.iconText}>📋</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSubmitRequest} style={styles.middleButton}>
            <Text style={styles.iconText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSubmitSettings} style={styles.footerButton}>
            <Text style={styles.iconText}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  headerDate: {
    fontSize: 16,
    color: '#555',
  },
  summarySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryCard: {
    width: '30%',
    backgroundColor: '#FFF',
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  summaryTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  summaryCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  taskList: {
    flex: 1,
    marginBottom: 120,
  },
  taskCard: {
    backgroundColor: '#FFF',
    elevation: 5,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  taskSubtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 110,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 0,
    // marginTop: -30,
  },
  footerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  middleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#2575FC',
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 10,
  },
  iconText: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
