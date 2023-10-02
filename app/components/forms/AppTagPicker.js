import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';
import { useTranslation } from "react-i18next";

import AppTag from '../AppTagg';
import { getTags } from '../../config/tagData';

function AppTagPicker({ name }) {
  const { t } = useTranslation();
  const { values, setFieldValue } = useFormikContext();
  const [selectedTag, setSelectedTag] = useState(null); // Styrvariabel för den valda taggen

  const handleTagPress = (tag) => {
    // Spara den valda taggen
    setSelectedTag(tag);

    // Uppdatera formulärets värde
    setFieldValue(name, tag);
  };

  const isTagSelected = (tag) => {
    return selectedTag && selectedTag.label === tag.label;
  };

  const tags = getTags();

  return (
    <View style={styles.tagContainer}>
      {tags.map((tag) => (
        <AppTag
          key={tag.label}
          tag={tag}
          selected={isTagSelected(tag)}
          onPress={() => handleTagPress(tag)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
   tagContainer: {
     flexDirection: 'row',
     flexWrap: 'wrap',
     justifyContent: 'flex-start', // Ändra till 'space-between' om du vill ha tre i rad
     alignItems: 'center', // Justera detta efter ditt layoutbehov
     paddingTop: 20,
     paddingBottom: 20,
   },
 });

export default AppTagPicker;