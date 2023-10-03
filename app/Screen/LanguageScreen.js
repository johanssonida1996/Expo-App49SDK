import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Screen from './Screen';
import i18next from '../../services/i18next';
import languageList from '../../services/languagesList.json';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';

export const LanguageScreen = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);

  useEffect(() => {
    // Uppdatera det valda språket när komponenten laddas
    setSelectedLanguage(i18next.language);
  }, []);

  const changeLng = (lng) => {
    setSelectedLanguage(lng);
    i18next.changeLanguage(lng);
  };

  return (
    <Screen style={styles.screen}>
      {Object.keys(languageList).map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => {
            changeLng(item);
          }}
          style={styles.languageOption}>
          <Text
            style={[
              styles.languageText,
              {
                color: selectedLanguage === item ? 'black' : 'black',
              },
            ]}>
            {languageList[item].nativeName}
          </Text>
          <View
            style={[
              styles.radioButton,
              {
                backgroundColor:
                  selectedLanguage === item ? colors.secondary : 'transparent',
              },
            ]}>
            {selectedLanguage === item && (
              <MaterialIcons
                name="check"
                size={25}
                color="white"
                style={styles.checkIcon}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? 10 : 20,
    backgroundColor: colors.lightBeige,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightBeige,
    backgroundColor: colors.white,
    marginVertical: 3,
  },
  languageText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  radioButton: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    position: 'absolute',
    top: 1,
    left: 1,
  },
});