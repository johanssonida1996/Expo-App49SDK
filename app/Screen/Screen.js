import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View, Dimensions, Text, } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements'

function Screen({ children, style }) {
  const height = useHeaderHeight()
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
  view: {
    flex: 1,
  }
});

export default Screen;