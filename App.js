import React from 'react';
import { View, Text, StatusBar, Button, StyleSheet, Image } from 'react-native';

export default function App() {
  const handleButtonPress = () => {
    try {
      console.log('Button clicked!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Click Me" onPress={handleButtonPress} />
        <Image style={styles.image} source={require('./assets/icon.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:
  {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
