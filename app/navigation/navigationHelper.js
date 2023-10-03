import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { LogsScreen } from '../Screen/LogsScreen';
import CardDetails from '../Screen/CardDetailsScreen';
import RoutinesScreen from '../Screen/RoutinesScreen';
import colors from "../config/colors";
import { useTranslation } from "react-i18next";

const tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export function HomeTabs(){
  const { t } = useTranslation();
  return (
    <tab.Navigator
      screenOptions={{
        tabBarPressColor: 'transparent', 
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle:{
          fontWeight: 600
        },
        tabBarInactiveTintColor: colors.gray,
        tabBarIndicatorStyle:{
          backgroundColor: colors.primary,
        },
      }}
    >
      <tab.Screen 
      name="Rutiner" 
      component={RoutinesScreen} 
      options={{ 
        tabBarLabel: t('Routines') 
        }} />
      <tab.Screen 
      name="Logg" 
      component={LogsScreen} 
      options={{ 
        tabBarLabel: t('Log') 
        }} />
    </tab.Navigator>
  );
};

export function CustomStackNavigator(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="HemTab" component={HomeTabs} options={{ headerShown: false}} />
      <Stack.Screen name="Detaljer" component={CardDetails}     
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
          headerBackTitleVisible: false, // Ta bort texten på tillbaka-pilen
          headerBackTitle: '', // Ta bort texten på tillbaka-pilen (kan vara överflödig beroende på versionen av React Navigation)
        }} />
    </Stack.Navigator>
  );
}
