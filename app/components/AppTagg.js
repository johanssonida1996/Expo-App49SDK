import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Text from '../components/AppText';


function AppTag({ tag, selected, onPress }) {
  return (
   <View style={styles.container}>
    <TouchableOpacity
      style={[styles.tag, selected && styles.selectedTag, { backgroundColor: selected ? colors.white : tag.color }]}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={tag.icon} color={selected ? colors.secondary : colors.lightBeige} size={30} />
    </TouchableOpacity>
       <Text style={selected ? styles.selectedText : styles.text}>{tag.label}</Text>
   </View>

  );
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 7

  },
  tag: {
    borderWidth: 1,
    borderRadius: 50,
    height: 70,
    width: 70,
    padding: 15,
    borderColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  selectedTag: {
    backgroundColor: colors.primary,
    borderWidth: 2,               // Lägg till en 2px tjock svart kant
    borderColor: colors.secondary // Färgen på den svarta kanten
  },
  text: {
    color: colors.black, // Färg för omarkerad text
  },
  selectedText: {
    color: colors.secondary, // Färg för markerad text
  },
});

export default AppTag;