import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';

import WelcomeScreen from './app/screens/Welcome';
import SigninScreen from './app/screens/Signin';
import SignupScreen from './app/screens/Signup';
import HomeScreen from './app/screens/Home';
import CategoryScreen from './app/screens/Category';
import WishlistScreen from './app/screens/Wishlist';
import ProfileScreen from './app/screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerTitleAlign: "center",    
      headerStyle: {
        backgroundColor: '#0037BA',
      },
      headerTintColor: '#fff',
    }}>
      <Tab.Screen 
          name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => {
            const icon = focused ? 'home' : 'home';
            return (
              <Icon name={icon} color={color} size={size} />
            );
          },
          tabBarActiveTintColor: '#0037BA',
          tabBarInactiveTintColor: '#997E7E'
      }}/>
      <Tab.Screen 
        name="Category" component={CategoryScreen} options={{
        tabBarLabel: 'Category',
        tabBarIcon: ({ focused, color, size }) => {
          const icon = focused ? 'list' : 'list';
          return (
            <Icon name={icon} color={color} size={size} />
          );
        },
        tabBarActiveTintColor: '#0037BA',
        tabBarInactiveTintColor: '#997E7E'
      }}/>
       <Tab.Screen 
        name="Wishlist" component={WishlistScreen} options={{
        tabBarLabel: 'Wishlist',
        tabBarIcon: ({ focused, color, size }) => {
          const icon = focused ? 'heart' : 'heart';
          return (
            <Icon name={icon} color={color} size={size} />
          );
        },
        tabBarActiveTintColor: '#0037BA',
        tabBarInactiveTintColor: '#997E7E'
      }}/>
      <Tab.Screen 
        name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused, color, size }) => {
          const icon = focused ? 'user-circle' : 'user-circle';
          return (
            <Icon name={icon} color={color} size={size} />
          );
        },
        tabBarActiveTintColor: '#0037BA',
        tabBarInactiveTintColor: '#997E7E'
      }}/>
    </Tab.Navigator>
  );
}

const StackNavigation = () => {
  return (
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={BottomTab}
          options={{ 
            headerShown: false, 
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator> 
  );
}

const App = () => {

  return (
    <NavigationContainer>
      {/* <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={BottomTab}
          options={{ 
            headerShown: false, 
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName="Home">
        {/* <Drawer.Screen name="Home" component={StackNavigation} /> */}
        <Drawer.Screen name="Home" component={BottomTab} options={{headerShown: false}} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
  
};

export default App;
