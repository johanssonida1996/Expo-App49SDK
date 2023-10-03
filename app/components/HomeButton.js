import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback  } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ isActive, onPress }) {
   const buttonColor = isActive ? '#FC5C65' : '#adadad';
  return (
    <TouchableWithoutFeedback  onPress={onPress}>
      <View style={[styles.container, { backgroundColor: buttonColor }]}>
        <MaterialCommunityIcons
          name="home"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableWithoutFeedback >
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 40,
    borderWidth: 10,
    bottom: Platform.OS === 'android' ? 31 : 20,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});

export default NewListingButton;