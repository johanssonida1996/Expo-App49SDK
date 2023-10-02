import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import { useTranslation } from "react-i18next";

import AppTextInput from '../AppTextInput';
import AppText from '../AppText';
import { useFormikContext } from 'formik'; // Importera useFormikContext

function AppPointList({ name }) {
  const { t } = useTranslation();
  const { values, setFieldValue } = useFormikContext(); // Hämta formik-värden och funktioner
  const [newPoint, setNewPoint] = useState('');

  const addPoint = () => {
    if (newPoint.trim() !== '') {
      const points = values[name] || []; // Hämta de befintliga punkterna från formik-värden
      setFieldValue(name, [...points, newPoint]); // Uppdatera formik-värden med den nya punkten
      setNewPoint('');
    }
  };

  const removePoint = (index) => {
    const points = values[name] || []; // Hämta de befintliga punkterna från formik-värden
    const updatedPoints = [...points];
    updatedPoints.splice(index, 1);
    setFieldValue(name, updatedPoints); // Uppdatera formik-värden med de uppdaterade punkterna
  };

  const points = values[name] || []; // Hämta punkterna från formik-värden

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <AppTextInput
          width='80%'
          placeholder={t('AddPoint')}
          value={newPoint}
          onChangeText={(text) => setNewPoint(text)}
        />
        <TouchableOpacity onPress={addPoint}>
          <MaterialIcons name="add-circle" size={30} color={colors.secondary} />
        </TouchableOpacity>
      </View>
      <View style={styles.pointsContainer}>
        {points.map((point, index) => (
          <View key={index} style={styles.point}>
            <AppText style={styles.pointText}>{point}</AppText>
            <TouchableOpacity onPress={() => removePoint(index)}>
              <MaterialIcons name="cancel" size={30} color={colors.colorDanger400} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  pointsContainer: {
    marginTop: 10,
  },
  point: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  pointText: {
    flex: 1,
    fontSize: 16,
  },
});

export default AppPointList;