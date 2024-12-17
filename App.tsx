import React, { Component, useState  ,useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './src/components/Dashboard/Dashboard';
import EmployeeList from './src/components/list/EmployeeList';
import Addemp from './src/components/form/Addemp';
import Settings from './src/components/Settings';
import AddClient from './src/components/form/AddClient';
import ClientList from './src/components/list/ClientList';
import AddTask from './src/components/taskmangement/AddTask';
import AssignTask from './src/components/taskmangement/AssignTask';
import TaskList from './src/components/taskmangement/TaskList';
import { getDrawerItems } from './src/components/Api/api';







function CustomDrawerContent(props) {
  const [mainDrawer, setMainDrawer] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);
  const [drawerItemsMain, setDrawerItems] = useState([]);
  const navigation:any=useNavigation();

  useEffect(() => {
    const fetchDrawerItems = async () => {
      try {
        const response = await getDrawerItems(); 
        const data = typeof response === 'string' ? JSON.parse(response) : response;

    // console.log(data.data.data);  

    setDrawerItems(data.data.data);
      } catch (error) {
        console.error("Error fetching drawer items:", error);
      }
    };
  
    fetchDrawerItems();
  }, []);

  const toggleMainDrawer = () => {
    setMainDrawer(true);
    setFilteredItems([]);
  };

  const onItemParentPress = (key) => {
    const filteredMainDrawerRoutes:any = drawerItemsMain.find((e) => e.key === key);
    if (filteredMainDrawerRoutes.routes.length === 1) {
      const selectedRoute = filteredMainDrawerRoutes.routes[0];
      // props.navigation.toggleDrawer();
      navigation.navigate(filteredMainDrawerRoutes.routes[0]?.routeName);
    } else {
      setMainDrawer(false);
      setFilteredItems(filteredMainDrawerRoutes);
      
    }
  };

  const logOut = () => console.log('User logged out.');

  const renderMainDrawer = () => (
    <View>
      {drawerItemsMain.map((parent) => (
        <TouchableOpacity
          key={parent.key}
          onPress={() => onItemParentPress(parent.key)}>
          <View style={styles.parentItem}>
            <Text style={styles.title}>{parent.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={logOut}>
        <View style={styles.parentItem}>
          <Text style={styles.title}>Log out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderFilteredItemsDrawer = () => (
    <View>
      <TouchableOpacity onPress={toggleMainDrawer} style={styles.backButtonRow}>
        <Text style={styles.backButtonText}>BACK</Text>
      </TouchableOpacity>
      {filteredItems.routes.map((route) => (
        <TouchableOpacity
          key={route.routeName}
          onPress={() =>
            // console.log(route)
            navigation.navigate(route?.routeName)
          }>
          <View style={styles.item}>
            <Text style={styles.title}>{route.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.drawerContainer}>
      <SafeAreaView style={styles.container} edges={["top", "horizontal"]}>
        <View style={styles.centered}>
          <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.logo} />
        </View>
        {mainDrawer ? renderMainDrawer() : renderFilteredItemsDrawer()}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContainer: { backgroundColor: '#222222' },
  container: { flex: 1 },
  centered: { alignItems: 'center' },
  logo: { width: 100, height: 75 },
  parentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingVertical: 8,
  },
  title: { margin: 16, fontWeight: 'bold', color: '#F0F0F0' },
  backButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  backButtonText: { marginLeft: 10, color: '#F0F0F0', fontWeight: 'bold' },
});

const Drawer = createDrawerNavigator();

function MainDrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="EmployeeList" component={EmployeeList} />
      <Drawer.Screen name="Addemp" component={Addemp} />
      <Drawer.Screen name="ClientList" component={ClientList} />
      <Drawer.Screen name="AddClient" component={AddClient} />
      <Drawer.Screen name="AddTask" component={AddTask} />
      <Drawer.Screen name="AssignTask" component={AssignTask} />
      <Drawer.Screen name="TaskList" component={TaskList} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainDrawerNavigation />
    </NavigationContainer>
  );
}
