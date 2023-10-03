import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import colors from '../config/colors'

function AppButton({ style, title, onPress, color = "primary", disabled }) {

  const buttonColor = disabled ? colors.gray : colors[color];
    return (
        <TouchableOpacity style={[style, styles.button, { backgroundColor: buttonColor}]} onPress={onPress} disabled={disabled}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
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
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});

export default AppButton;