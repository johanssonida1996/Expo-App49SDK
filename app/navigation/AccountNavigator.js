import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../Screen/AccountScreen";
import { LanguageScreen } from "../Screen/LanguageScreen";
import { useTranslation } from "react-i18next";
import colors from "../config/colors";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  const { t } = useTranslation(); // Flyttad inuti komponenten

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ 
         headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
           },
           headerTitleStyle: {
            color: colors.black,
            fontSize: 18,
            fontWeight: 800,
          },
          headerTitleAlign: 'center',
          headerStatusBarHeight: Platform.OS === 'android' ? 35 : 50,
         headerTitle: t('Account') }}
      />
      <Stack.Screen 
      name="Language" 
      component={LanguageScreen}
      options={{ 
         headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
           },
           headerTitleStyle: {
            color: colors.black,
            fontSize: 18,
            fontWeight: 800,
          },
          headerTitleAlign: 'center',
          headerStatusBarHeight: Platform.OS === 'android' ? 35 : 50,
         headerTitle: t('Language'),
         headerBackTitleVisible: false, // Ta bort texten på tillbaka-pilen
         headerBackTitle: ''
      }}
         
       />
    </Stack.Navigator>
  );
};

export default AccountNavigator;