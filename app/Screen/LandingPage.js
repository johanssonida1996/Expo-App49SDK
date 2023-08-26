import React, { useRef, useEffect } from 'react';
import { StyleSheet, Platform, Image } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import LottieView from 'lottie-react-native';

import { default as theme } from '../config/custom-theme.json';
import Screen from './Screen';

export const LandingPage = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('Home');
  };

  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <Screen style={styles.screen}>
      <Layout style={styles.layout}>
        <LottieView
          style={styles.lottie}
          ref={animationRef}
          source={require('../assets/animations/yogaGirl.json')}
          autoPlay
          loop
        />
        <Button style={styles.button} onPress={navigateDetails}>
          {evaProps => (
            <Text {...evaProps} style={styles.text}>
              Kom igång
            </Text>
          )}
        </Button>
      </Layout>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: theme['color-danger-500'],
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme['color-danger-500'],
  },
  button: {
    marginTop: 400,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '50%',
    height: '8%',
    elevation: 8,
    ...(Platform.OS === 'ios' && {
       shadowColor: 'rgba(0, 0, 0, 0.1)',
       shadowOpacity: 0.9,
       elevation: 8,
       shadowRadius: 4,
       shadowOffset: { width: 1, height: 13 },
     }),
  },
  text: {
    color: theme['color-danger-500'],
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});