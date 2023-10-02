import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RoutineDetailsModal = ({ isVisible, routine, onClose }) => {
  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent={false}
    >
   <SafeAreaView style={styles.safeArea}>
      <View style={styles.modalContent}>
        <Text>{routine.title}</Text>
        <Text>{routine.tags}</Text>
        <Text>{routine.description}</Text>
        <Text>{routine.points}</Text>
        <TouchableOpacity onPress={onClose} style={styles.option}>
          <MaterialCommunityIcons
            name="close"
            color={colors.primary}
            size={24}
          />
          <Text style={styles.optionText}>Avbryt</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
   safeArea: {
      flex: 1,
      backgroundColor: colors.white,
    },
    modalContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  optionText: {
    marginLeft: 10,
    color: colors.primary,
  },
});

export default RoutineDetailsModal;