import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from "./app/navigation/navigationTheme";



export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    
    Font.loadAsync({
      // Ladda dina typsnitt här...
    }).then(() => {
      setIsLoading(false); 
    });
  }, []);

  return(
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};










