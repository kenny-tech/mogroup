import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen'

import WelcomeScreen from './app/screens/Welcome';
import SigninScreen from './app/screens/Signin';
import SignupScreen from './app/screens/Signup';
import HomeScreen from './app/screens/Home';
import RealEstateScreen from './app/screens/RealEstate';
import SavingsScreen from './app/screens/Savings';
import InvestmentScreen from './app/screens/Investment';

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
      // title: <Image style={{ width: 50, height: 55 }} source={require('./app/images/logo.png')} />
      title: 'Home'

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
          tabBarInactiveTintColor: '#997E7E',
      }}/>
       <Tab.Screen 
        name="Savings" component={SavingsScreen} options={{
        tabBarLabel: 'Savings',
        tabBarIcon: ({ focused, color, size }) => {
          const icon = focused ? 'money' : 'money';
          return (
            <Icon name={icon} color={color} size={size} />
          );
        },
        tabBarActiveTintColor: '#0037BA',
        tabBarInactiveTintColor: '#997E7E',
        title: 'Savings'
      }}/>
      <Tab.Screen 
        name="Investment" component={InvestmentScreen} options={{
        tabBarLabel: 'Investment',
        tabBarIcon: ({ focused, color, size }) => {
          const icon = focused ? 'money' : 'money';
          return (
            <Icon name={icon} color={color} size={size} />
          );
        },
        tabBarActiveTintColor: '#0037BA',
        tabBarInactiveTintColor: '#997E7E',
        title: 'Investment'
      }}/>
      <Tab.Screen 
        name="Real Estate" component={RealEstateScreen} options={{
        tabBarLabel: 'Real Estate',
        tabBarIcon: ({ focused, color, size }) => {
          const icon = focused ? 'building' : 'building';
          return (
            <Icon name={icon} color={color} size={size} />
          );
        },
        tabBarActiveTintColor: '#0037BA',
        tabBarInactiveTintColor: '#997E7E',
        title: 'Real Estate'

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

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // return (
  //   <NavigationContainer>
  //     {/* <Stack.Navigator 
  //       initialRouteName="Welcome"
  //       screenOptions={{
  //         headerShown: false,
  //       }}
  //     >
  //       <Stack.Screen
  //         name="Home"
  //         component={BottomTab}
  //         options={{ 
  //           headerShown: false, 
  //           headerStyle: {
  //             backgroundColor: '#f4511e',
  //           },
  //         }}
  //       />
  //       <Stack.Screen name="Welcome" component={WelcomeScreen} />
  //       <Stack.Screen name="Signin" component={SigninScreen} />
  //       <Stack.Screen name="Signup" component={SignupScreen} />
  //     </Stack.Navigator> */}
  //     <Drawer.Navigator initialRouteName="Home">
  //       {/* <Drawer.Screen name="Home" component={StackNavigation} /> */}
  //       <Drawer.Screen name="Home" component={BottomTab} options={{headerShown: false}} />
  //       <Drawer.Screen name="Investment" component={InvestmentScreen} options={{headerShown: false}} />
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  // );

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
  
};

export default App;
