import React from 'react';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

import Screen from './Screen'





export const HomeScreen = ({ navigation }) => {
  return (
   <Screen>
      <TopNavigation title='Hem' alignment='center' />
      <Divider/>
         <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>Hem</Text>
         </Layout>
   </Screen>
  );
};