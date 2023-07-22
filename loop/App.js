import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './components/Splash';
import Onboarding from './components/Onboarding';
import Signup from './components/Signup';
import SelectTran from './components/SelectTran';
import Explore from './components/Explore';
import Profile from './components/Profile';
import Cycle from './components/Cycle';
import Train from './components/Train';
import Bus from './components/Bus';
import Car from './components/Car';

const MainTab = createBottomTabNavigator();
const IntroStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

// if option is selected
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

// if user signed up
  const handleSignUp = () => {
    setSelectedOption('Cycle'); 
  };

  return (
    <NavigationContainer>
      {selectedOption ? ( // if option is selected show main stack
        
        <MainStack.Navigator>
          <MainStack.Screen
            name="SelectTran"
            component={SelectTran}
            options={{ headerShown: false }}
            initialParams={{ handleOptionSelect }}
          />
          <MainStack.Screen
            name="Main"
            component={MainNavigator}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      ) : (
        
        <IntroStack.Navigator>
          <IntroStack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <IntroStack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />
          <IntroStack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
            initialParams={{ handleSignUp }}
          />
        </IntroStack.Navigator>
      )}
    </NavigationContainer>
  );
}

const MainTabNavigator = () => (
  <MainTab.Navigator>
    <MainTab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <MainTab.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
    <MainTab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
  </MainTab.Navigator>
);
