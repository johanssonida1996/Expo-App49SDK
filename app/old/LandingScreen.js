// import React from 'react';
// import { StyleSheet, Dimensions, Image, Platform } from 'react-native';
// import { ApplicationProvider, Layout, Text, Button, Icon } from '@ui-kitten/components';
// import FeatherIcon from 'react-native-vector-icons/Feather';
// import Screen from './Screen';
// import * as eva from '@eva-design/eva';
// import { default as theme } from '../config/custom-theme.json';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';

// import morning from '../assets/morning.jpg';
// import day from '../assets/day.jpg';
// import night from '../assets/night.jpg';
// import goals from '../assets/goals.jpg';

// const { width } = Dimensions.get('window');

// const CIRCLE_SIZE = width / 2.5;

// const items = [
//   {
//     uri: morning,
//     text: 'Morgon',
//     position: [0, 40],
//   },
//   {
//     uri: day,
//     text: 'Dag',
//     position: [100, 140],
//   },
//   {
//     uri: night,
//     text: 'Kväll',
//     position: [190, 40],
//   },
//   {
//     uri: goals,
//     text: 'Mål',
//     position: [290, 140],
//   },
// ];

// export const LandingScreen = ({ navigation }) => {
//   const navigateDetails = () => {
//     navigation.navigate('Home');
//   };
//   const renderRightIcon = (props) => (
//     <Icon {...props} name='arrow-ios-forward-outline' fill='white' animation='pulse' />
//   );
//   return (
//   <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }} customMapping={{ icon: EvaIconsPack }}>
//     <Screen style={styles.container}>
//       <Layout style={styles.content}>
//         <Text category="h1" style={styles.title}>
//           My Routines
//         </Text>
//         <Text category="p1" style={styles.text}>
//           Logga och följ dina vanor med lätthet. Bygg positiva vanor, få påminnelser och
//           skapa en balanserad vardag.
//         </Text>
//       </Layout>
//       <Layout style={styles.circles}>
//         {items.map(({ uri, text, position: [top, left] }, index) => (
//           <Layout
//             key={index}
//             style={[
//               styles.circle,
//               { top, left, zIndex: items.length - index },
//             ]}
//           >
//             <Image source={uri} style={styles.circleImage} />
//             <Text style={styles.circleText}>{text}</Text>
//           </Layout>
//         ))}
//       </Layout>
//       <Layout style={styles.buttonLayout}>
//         <Button
//             appearance='filled'
//             status='basic'
//             accessoryRight={renderRightIcon}
//             icon={renderRightIcon}
//             style={styles.button}
//             onPress={navigateDetails}
//           >
//              {evaProps => (
//             <Text category='h6' {...evaProps} style={styles.buttonText}>
//               Kom igång
//             </Text>
//               )}
//           </Button>
//       </Layout>
   
//     </Screen>
//     </ApplicationProvider>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 40,
//     fontWeight: '700',
//     color: '#3a3b3d',
//     marginBottom: 16,
//     textAlign: 'center',
//     color: theme['color-primary-500'],
//   },
//   text: {
//     fontSize: 15,
//     lineHeight: 20,
//     fontWeight: '400',
//     color: '#a1377f',
//     textAlign: 'center',
//     marginBottom: 8,
//     color: theme['color-text-gray']
//   },
//   content: {
//     justifyContent: 'center',
//     paddingVertical: 24,
//     paddingHorizontal: 24,
//   },
//   circles: {
//     position: 'relative',
//     flex: 1,
//     marginHorizontal: 24,
//   },
//   circle: {
//     width: CIRCLE_SIZE,
//     height: CIRCLE_SIZE,
//     borderRadius: 9999,
//     position: 'absolute',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: 2.62,
//     elevation: 4,
//   },
//   circleImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 9999,
//     opacity: 0.8,
//   },
//   circleText: {
//     width: '100%',
//     textAlign: 'center',
//     position: 'absolute',
//     textTransform: 'uppercase',
//     top: CIRCLE_SIZE / 2 - 20 / 2,
//     fontSize: 15,
//     lineHeight: 20,
//     fontWeight: '700',
//     color: '#fff',
//   },
//   buttonLayout:{
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: 40
//   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignContent: 'center',
//     width: '70%',
//     backgroundColor: theme['color-primary-500'],
//     borderColor: theme['color-primary-500'],
//     elevation: 8,
//     ...(Platform.OS === 'ios' && {
//        shadowColor: 'rgba(0, 0, 0, 0.1)',
//        shadowOpacity: 0.9,
//        elevation: 8,
//        shadowRadius: 4,
//        shadowOffset: { width: 1, height: 13 },
//      }),
//   },
//   buttonText:{
//     color: '#fff',
//   }
// });