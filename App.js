import React from 'react';
import { View, Text, } from 'react-native';
import LottieView from 'lottie-react-native';

import Styles from "./app/config/styles";
import colors from './app/config/colors';
import WhiteButton from './app/components/buttons/button_white';
import GreenButton from './app/components/buttons/button_green';
import Screen from './app/Screen/Screen';
import HomePage from './app/Screen/Home_Page';
import FlatList  from './FlatList';






export default function App() {
  //return <LandingPage />;
  //return <HomePage />;

  //return <Test visible={true}/>
// return <HomePage />;

return <FlatList />

// return(
//  <Screen style={Styles.container}>
//   <View style={{display: 'flex', justifyContent: 'center', flex: 1}}>
//     <GreenButton title='test'></GreenButton>
//   </View>
//  </Screen>
// )



}




