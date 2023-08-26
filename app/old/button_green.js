import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../config/styles';
import colors from '../config/colors';

function GreenButton({title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.buttonGreenText}>{title}</Text>
        </TouchableOpacity>
      
    );
}

export default GreenButton;