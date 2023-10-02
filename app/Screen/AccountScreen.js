import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Text from '../components/AppText';
import Screen from './Screen'
import { useTranslation } from "react-i18next";
import routes from '../navigation/routes';

import { useNavigation } from "@react-navigation/native";

import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";



export const AccountScreen = () => {

  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
   <Screen style={styles.screen}>
         <View style={styles.container}>
         <View style={styles.profile}>
          <View style={styles.profileAvatar}>
            <MaterialCommunityIcons name="account-circle" color={colors.primary} size={60} />
          </View>
          <View style={styles.profileBody}>
            <Text style={styles.profileName}>Ida Johansson</Text>

            <Text style={styles.profileHandle}>ida.johansson@test.com</Text>
          </View>
        </View>    
            <TouchableOpacity style={styles.language} onPress={() => navigation.navigate(routes.LANGUAGE)}>
              <View style={styles.languageColumn}>
                <View style={styles.languageIcon}>
                  <MaterialCommunityIcons name="earth" color={colors.secondary} size={35} />
                </View>
                <View style={styles.languageBody}>
                  <Text style={styles.languageTitle}>{t('Language')}</Text>
                </View>
              </View>
              <View>
              <MaterialCommunityIcons name="chevron-right" color={colors.gray} size={30} />
              </View>
              </TouchableOpacity>
        </View>
   </Screen>
  );
};

const styles = StyleSheet.create({
screen:{
  paddingTop: Platform.OS === 'android' ? 10 : 20
},
container:{
  flex: 1, 
  height: '100%',
  alignContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.lightBeige
},
profile: {
  paddingHorizontal: Platform.OS === 'android' ? 10 : 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: 10,
  width: '100%',
  height: 100,
  borderBottomWidth: 1,
  borderBottomColor: colors.lightBeige,
  borderTopWidth: 1,
  borderTopColor: colors.lightBeige,
  backgroundColor: colors.white
},
profileAvatar: {
  width: 60,
  height: 60,
  borderRadius: 9999,
  marginRight: 12,
},
profileName: {
  fontSize: 18,
  fontWeight: '600',
  color: colors.black,
},
profileHandle: {
  marginTop: 2,
  fontSize: 16,
  fontWeight: '400',
  color: colors.black,
},
language:{
  paddingHorizontal: Platform.OS === 'android' ? 10 : 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
  width: '100%',
  height: 100,
  borderBottomWidth: 1,
  borderBottomColor: colors.lightBeige,
  borderTopWidth: 1,
  borderTopColor: colors.lightBeige,
  backgroundColor: colors.white
},
languageColumn:{
 display: 'flex',
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'center'
},
languageIcon: {
  width: 60,
  height: 60,
  marginRight: 12,
  borderRadius: 9999,
  justifyContent: 'center',
  alignItems: 'center',
},
languageTitle:{
  fontSize: 18,
  fontWeight: '600',
  color: colors.black
},
})



