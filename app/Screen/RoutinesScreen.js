import React, { useState, useCallback } from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen'
import Card from "../components/Card";
import colors from '../config/colors';
import Modal from '../components/AppModal';
import Text from '../components/AppText';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

import { getTags } from '../config/tagData';




const initialListings = [
  {
    id: 1,
    title: "Morgon",
    selectedTag:  { label: 'Morning', color: '#fee197', icon: 'weather-sunset-up' },  
    description: 'Det här är en beskrivning på id:1',
    points: ["Gå upp kl 06", "Meditera"]
  },
  {
    id: 2,
    title: "Dag",
    selectedTag: { label: 'Day', color: '#87CEEB', icon: 'weather-sunny' },  
    description: 'Det här är en beskrivning på id:2',
    points: ["Ät lunch 12", "Affirmationer"]
  },
  {
    id: 3,
    title: "Kväll",
    selectedTag: { label: 'Evening', color: '#c9bcc7', icon: 'weather-sunset-down' },  
    description: 'Det här är en beskrivning på id:3',
    points: ["Gå och lägga sig kl 22", "Visualisering"]
  },
];

function RoutinesScreen (){
  const { t } = useTranslation();
  const tags = getTags();
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [routines, setRoutines] = useState([]);
  const [listings, setListings] = useState(initialListings);
  const [selectedTags, setSelectedTags] = useState([]); 

  const allItems = [...listings, ...routines];
  const sortedItems = allItems.sort((a, b) => a.id - b.id);


  const handleDeleteItem = (itemId) => {
    const updatedItems = allItems.filter(item => item.id !== itemId);
    setListings(updatedItems.filter(item => initialListings.find(listing => listing.id === item.id)));
    setRoutines(updatedItems.filter(item => routines.find(routine => routine.id === item.id)));
  };

  const handleAddRoutine = (newRoutine) => {
    // Generera ett unikt ID baserat på tidsstämpeln
    const uniqueId = new Date().getTime();

    // Lägg till det unika ID:et till den nya rutinen
    const routineWithId = { ...newRoutine, id: uniqueId };

    // Lägg till den nya rutinen med det unika ID:et till listan av rutiner
    setRoutines((prevRoutines) => [...prevRoutines, routineWithId]);
  
    // Stäng modalen
    setModalVisible(false);

  };

  const toggleTag = (tag) => {
    // Kontrollera om taggen redan är vald
    const isTagSelected = selectedTags.some((selectedTag) => selectedTag.label === tag.label);

    if (isTagSelected) {
      // Om taggen redan är vald, ta bort den från selectedTags
      setSelectedTags((prevSelectedTags) => prevSelectedTags.filter((selectedTag) => selectedTag.label !== tag.label));
    } else {
      // Om taggen inte är vald, lägg till den i selectedTags
      setSelectedTags((prevSelectedTags) => [...prevSelectedTags, tag]);
    }
  };

  const filteredItems = selectedTags.length > 0
    ? sortedItems.filter((item) =>
        selectedTags.some((selectedTag) =>
          Array.isArray(item.selectedTag)
            ? item.selectedTag.some((tag) => tag.label === selectedTag.label)
            : typeof item.selectedTag === 'object' && item.selectedTag.label === selectedTag.label
        )
      )
    : sortedItems;


    // const handleCardPress = (routine) => {
    //   navigate('Detaljer', { routine }); 
    // };

    const handleCardPress = useCallback((routine) => {
      // Använd en callback-funktion för att säkerställa att det senaste tillståndet används
      setExpandedCardId((expandedCardId) => {
        if (expandedCardId === routine.id) {
          return null;
        } else {
          return routine.id;
        }
      });
    }, []);

  return (
    <>
      <Screen style={styles.screen}>
        {/* Rendera valda taggar ovanför listan */}
        <View style={styles.tagContainer}>
          <ScrollView 
          style={styles.tagFilter}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
            {tags.map((tag) => (
                <TouchableOpacity
                  key={tag.label}
                  style={[
                    styles.tag,
                    selectedTags.some((selectedTag) => selectedTag.label === tag.label) && styles.selectedTag,
                  ]}
                  onPress={() => toggleTag(tag)}
                >
                  <Text style={selectedTags.some((selectedTag) => selectedTag.label === tag.label) ? styles.selectedText : styles.text}>
                    {tag.label}
                  </Text>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
        <FlatList
            data={filteredItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={() => handleCardPress(item)}>
                <Card
                  item={item}
                  onDelete={() => handleDeleteItem(item.id)}
                  onPress={() => handleCardPress(item)}
                  expanded={expandedCardId === item.id}
                />
              </TouchableWithoutFeedback>
            )}
          />
    <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
      <MaterialCommunityIcons name="plus" size={40} color={colors.white} />
    </TouchableOpacity>
    <Modal
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          onAdd={handleAddRoutine}
          title={t('AddRotuineHeader')}
          buttonTitle={t('AddButton')}
        />
   </Screen>
   </>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? 10 : 20,
    padding: Platform.OS === 'android' ? 10 : 20,
    backgroundColor: colors.lightBeige
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: colors.secondary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagContainer:{
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 15,
    alignItems: 'center'
  },
  tagFilterText:{
    color: colors.black,
  },
  tagFilter:{
    display: 'flex',
    flexDirection: 'row',
    minHeight: 40,
  },
  tag:{
    borderColor: 'transparent',
     borderWidth: 1,
     borderRadius: 20,
     paddingVertical: 10,
     paddingHorizontal: 15,
     minWidth: 70,
     marginRight: 5,
     display: 'flex',
     alignItems: 'center',
  },
  selectedTag: {
    backgroundColor: colors.white,
    borderWidth: 0
  },
  text:{
    color: colors.darkGray,
  },
  selectedText:{
    color: colors.primary,
  }
});

export default RoutinesScreen;