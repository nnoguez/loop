// App.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from 'react-native-vector-icons/FontAwesome';
import Cycle from "./components/Cycle";
import Explore from "./components/Explore";
import Profile from './components/Profile';
import Splash from './components/Splash';
import Signup from './components/Signup';
import Login from './components/Login';
import Onboarding from './components/Onboarding';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [active, setActive] = useState(false);
  const handlePress = () => {
    setActive(!active);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Cycle" options={{
          headerShown: false
        }}>{() => (
          <Tab.Navigator initialRouteName="Cycle">

            <Tab.Screen name="Main" component={Cycle}
              options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color,focused }) => (
                <Icon name="home" color={focused?'#FFC42D':'grey'} size={30} />
              )
            }}/>
            <Tab.Screen 
              name="Explore" 
              component={Explore} 
              options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color,focused }) => (
                  <Icon name="compass" color={focused?'#FFC42D':'grey'} size={30} />
                )
            }}/>

          <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color,focused }) => (
                <Icon name="user" color={focused?'#FFC42D':'grey'} size={30} />
              )
            }}/>
          </Tab.Navigator>)}
        </Stack.Screen>

{/* hidden */}
        <Tab.Screen 
            name="Splash" 
            component={Splash} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarVisible: false, 
              tabBarButton: (props) => null, 
            }}
          />
        <Tab.Screen 
            name="Onboarding" 
            component={Onboarding} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarVisible: false, 
              tabBarButton: (props) => null, 
            }}
        />
        <Tab.Screen 
            name="Login" 
            component={Login} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarVisible: false, 
              tabBarButton: (props) => null, 
            }}
        />
        <Tab.Screen 
            name="Signup" 
            component={Signup} 
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarVisible: false, 
              tabBarButton: (props) => null, 
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
