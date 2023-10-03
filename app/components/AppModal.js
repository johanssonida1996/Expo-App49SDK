import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform, ScrollView, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from 'yup';
import { useTranslation } from "react-i18next";

import colors from '../config/colors';
import Text from './AppText';
import { AppForm, AppFormField, AppTagPicker, SubmitButton, AppPointList } from "./forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().min(1, 'Måste innehålla minst 1 bokstav').required('Måste innehålla minst 1 bokstav'),
});

function AppModal({ isVisible, onClose, title, onAdd, buttonTitle, onEdit, initialValues }) {
  const { t } = useTranslation();
  const [isFormValid, setIsFormValid] = useState(true);
  const [formData, setFormData] = useState({ title: "", selectedTag: [], points: [] });

  console.log('Modal:', JSON.stringify(initialValues));

  // Uppdatera formData när initialValues ändras (för redigering)
  useEffect(() => {
    setFormData(initialValues || { title: "", selectedTag: [], points: [] });
  }, [initialValues]);

  const handleSubmit = async (values) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      setIsFormValid(true);

      if (onAdd) {
        onAdd(values);
        console.log(values);
      }

      if (onEdit) {
        onEdit(values);
      }

      onClose();
    } catch (error) {
      setIsFormValid(false);
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <ScrollView style={styles.scrollView}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{title}</Text>
              <TouchableOpacity onPress={onClose} style={styles.option}>
                <MaterialCommunityIcons name="close" color={colors.primary} size={24} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              <AppForm
                initialValues={formData}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                <View>
                  <View style={styles.gap}>
                    <Text>{t('Name-HelpText')}</Text>
                    <AppFormField maxLength={30} name="title" placeholder={t('Name')} />
                  </View>
                  <View style={styles.gap}>
                    <Text>{t('AddRoutine')}</Text>
                    <AppPointList name='points' />
                  </View>
                  <View style={styles.gap}>
                    <Text>{t('Tags')}</Text>
                    <AppTagPicker name="selectedTag" />
                  </View>
                </View>
                <View style={styles.gapButton}>
                  <SubmitButton title={buttonTitle} />
                </View>
              </AppForm>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  scrollView:{
    flex: 1,
    backgroundColor: colors.white,
    height: '100%'
  },
  modalContainer: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 100,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 50,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  option: {
    right: 0,
  },
  modalHeader: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: Platform.OS === 'android' ? 40 : 65,
    right: 25,
    width: '100%',
  },
  validationErrorText: {
    color: colors.colorDanger500,
    marginTop: 5,
  },
  modalContent:{
    display: 'flex',
    paddingTop: Platform.OS === 'android' ? 0 : 20,
  },
  gap:{
    paddingTop: 10,
    paddingBottom: 10
  },
  gapButton:{
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default AppModal;