import React, { useRef, useState } from 'react';
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';


function AppTextInput({ icon, width = "100%", height, ...otherProps }) {
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);

  const handlePress = () => {
    inputRef.current.focus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

    return (
      <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.container, { width, height }]}>
        {icon && 
        <MaterialCommunityIcons 
        name={icon} 
        size={20} 
        color={colors.gray} 
        style={styles.icon} />}
        <TextInput
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={colors.gray}
         {...otherProps} />
      </View> 
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    borderColor: colors.lightGray,
    borderWidth: 1,
    },
    icon:{
        marginRight: 10
    }
})

export default AppTextInput;