import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

import colors from '../config/colors';
import Text from '../components/AppText';

function OptionsModal({ isVisible, onClose, onDelete, onEdit, position }) {
  const { t } = useTranslation();
  return (
    <Modal visible={isVisible} animationType="fade"  transparent={true}>
      <View style={[styles.modalContainer, 
        { top: position.top, 
          left: position.left
        }]}>
        <TouchableOpacity onPress={onEdit} style={styles.option}>
          <Text style={styles.optionText}>{t("Edit")}</Text>
          <MaterialCommunityIcons name="pencil-outline" color={colors.black} size={16} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.option}>
          <Text style={styles.optionText}>{t("Remove")}</Text>
          <MaterialCommunityIcons name="delete-outline" color={colors.black} size={16} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose} style={styles.optionLastChild}>
          <Text style={styles.optionText}>{t("Cancel")}</Text>
          <MaterialCommunityIcons name="close" color={colors.black} size={16} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 15,
    width: 120
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
    borderBottomColor: colors.lightBeige,
    borderBottomWidth: 1

  },
  optionLastChild:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 16,
    color: colors.black,
  },
});

export default OptionsModal;