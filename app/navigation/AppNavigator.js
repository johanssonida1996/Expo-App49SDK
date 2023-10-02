import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import routes from "./routes";
import colors from "../config/colors";
import { CustomStackNavigator } from "./navigationHelper";
import { AccountScreen } from '../Screen/AccountScreen';
import { ListScreen } from '../Screen/ListScreen';
import HomeButton from '../components/HomeButton';
import AccountNavigator from "./AccountNavigator";


const { Navigator, Screen } = createBottomTabNavigator();

const BottomNavigator = () => {
  const { t } = useTranslation();
  return (
    <Navigator
      initialRouteName="Hem"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          display: 'flex',
        },
        headerStyle: {
         elevation: 0,
         shadowOpacity: 0,
         borderBottomWidth: 0
        },
       headerTitleStyle: {
         color: colors.black,
         fontSize: 18,
         fontWeight: 800,
       },
       headerTitleAlign: 'center',
       headerStatusBarHeight: Platform.OS === 'android' ? 35 : 50,
       tabBarShowLabel: false,
      }}
    >
      <Screen
        name="Lista"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          ),
          headerTitle: (t('List'))
        }}
      />
    <Screen
         name="Hem"
         component={CustomStackNavigator}
         options={({ navigation, route }) => ({
            tabBarButton: () => (
               <HomeButton
               isActive={navigation.isFocused()} // Check if the screen is active
               onPress={() => navigation.navigate(routes.HOME)}
               />
            ),
            tabBarIcon: ({ color, size }) => (
               <MaterialCommunityIcons
               name="home"
               color={color}
               size={size}
               />
            ),
            headerShown: getFocusedRouteNameFromRoute(route) !== "Detaljer",
            headerTitle: (t('Home'))
         })}
         />
      <Screen
        name="Konto"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerTitle: (t('Account')),
          headerShown: false
        }}
      />
    </Navigator>
  );
};

export default BottomNavigator;

