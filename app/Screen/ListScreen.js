import React from 'react';
import { View } from 'react-native';

import Text from '../components/AppText';


import Screen from './Screen'




export const ListScreen = ({ navigation }) => {
  return (
   <Screen>
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Lista</Text>
         </View>
   </Screen>
  );
};