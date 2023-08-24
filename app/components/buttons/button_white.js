import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../../config/styles';
import colors from '../../config/colors';

function WhiteButton({title, onPress, color = "white" }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.buttonWhiteText}>{title}</Text>
        </TouchableOpacity>
      
    );
}

export default WhiteButton;