import React from 'react';
import { View } from 'react-native';

import Screen from './Screen';
import Text from '../components/AppText';



export const LogsScreen = ({ navigation }) => {
  return (
   <Screen>
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loggar</Text>
         </View>
   </Screen>
  );
};