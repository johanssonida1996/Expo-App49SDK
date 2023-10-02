import React, { useState, useRef, useEffect  } from 'react';
import { View, StyleSheet, TouchableOpacity,TouchableWithoutFeedback, Platform, Dimensions  } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from '../components/AppText';
import Button from '../components/AppButton';
import colors from '../config/colors';
import OptionsModal from '../components/OptionsModal';
import Constants from 'expo-constants';
import { useTranslation } from "react-i18next";

function Card({  item, onPress, onDelete, expanded }) {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const dotsIconRef = useRef();
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const statusBarHeight = Constants.statusBarHeight;
  const [forceUpdate, setForceUpdate] = useState(false);

  const [checkedPoints, setCheckedPoints] = useState(new Array(item.points.length).fill(false));

  const numberOfCheckedPoints = checkedPoints.filter((isChecked) => isChecked).length;

  useEffect(() => {
    // Funktion för att återställa checkboxarna vid midnatt
    function resetCheckboxAtMidnight() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      
      // Om klockan är 00:00 återställ checkboxarna
      if (hours === 0 && minutes === 0) {
        setCheckedPoints(new Array(item.points.length).fill(false));
      }
    }
  
    // Kolla tiden varje minut och återställ checkboxarna vid midnatt
    const interval = setInterval(() => {
      resetCheckboxAtMidnight();
    }, 6000); // 60000 millisekunder = 1 minut
  
    // Rensa intervallet när komponenten avmonteras
    return () => {
      clearInterval(interval);
    };
  }, []); // Tomt beroendearray så att det här useEffect-körs bara en gång när komponenten mountas
  
  
  


  const handleDelete = () => {
    onDelete();
    setModalVisible(false); // Stäng modalen efter borttagning
    setForceUpdate(prevState => !prevState);
  };

  const handleDotsPress = () => {
    dotsIconRef.current.measure((x, y, width, height, pageX, pageY) => {
      setModalPosition({ top: Platform.OS === 'android' ? pageY - 5 + height - statusBarHeight : pageY + height, left: pageX - 80 });
      setModalVisible(true);
    });
  };

  return (
    <View style={[expanded && styles.expanded]}>
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, expanded ? { borderRadius: 0, borderTopLeftRadius: 10, borderTopRightRadius: 10, } : { }]}>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsColor}>
          <View style={[styles.colorRing, { backgroundColor: item.selectedTag.color }]}>
            <MaterialCommunityIcons name={item.selectedTag.icon} size={35} color={colors.white}/>
          </View>
        </View>
        <View style={styles.mainContent}>
            <View style={styles.text}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
            </View>
            <View style={styles.tagsContainer}>
                    <View style={styles.tags}>
                        <Text style={styles.tag}>
                          {item.selectedTag.label}
                        </Text>
                    </View>
                    <View>
                    <Text style={[{fontWeight: 600}, numberOfCheckedPoints === item.points.length ? {color: colors.secondary}: {color: colors.primary}]}>{numberOfCheckedPoints}/{item.points.length}</Text>
                    </View>
            </View>
        </View>
        <View style={styles.dots}>
          <TouchableOpacity onPress={handleDotsPress} ref={dotsIconRef}>
          <View style={styles.fistElement}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={colors.black}
              size={24}
            />
            </View>
            </TouchableOpacity>
        </View>
      </View>
      <OptionsModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onDelete={handleDelete}
        onEdit={() => {
          // Hantera redigering här
          setModalVisible(false);
        }}
        position={modalPosition}
      />
      </View>
    </TouchableWithoutFeedback>
    {expanded && (
  <View style={styles.cardContent}>
    <Text style={[styles.cardContentHeader, { fontWeight: 600 }]}>{t('Routines')}: </Text>
    {item.points.map((point, index) => (
      <TouchableOpacity
        key={index}
        style={styles.cardContentPoints}
        onPress={() => {
          const updatedCheckedPoints = [...checkedPoints];
          updatedCheckedPoints[index] = !updatedCheckedPoints[index];
          setCheckedPoints(updatedCheckedPoints);
        }}
      >
        <Text style={styles.cardContentPoint}>{point}</Text>
        <MaterialCommunityIcons
          name={checkedPoints[index] ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'}
          color={colors.secondary}
          size={35}
        />
      </TouchableOpacity>
      ))}
    </View>
  )}
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightBeige,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingLeft: 25,
    paddingRight: 5,
    overflow: 'hidden'
  },
  detailsContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  detailsColor:{
    width: '20%',
    justifyContent: 'center',
  },
  mainContent: {
    width: '70%',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  tagsContainer: {
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dots: {
    position: 'relative',
    maxHeight: 30,
    width: '10%',
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  tags:{
    flexDirection: 'row',
    paddingTop: 10,
    marginRight: 20
  },
  tag: {
    marginRight: -2,
    color: colors.gray,
    backgroundColor: 'transparent',
    fontWeight: '600',
  },
  colorRing:{
    width: 60, 
    height: 60, 
    borderRadius: 50, 
    backgroundColor: colors.primary, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expanded: {
    height: 'auto', // Om kortet är öppet, visa allt innehåll genom att sätta höjden till 'auto'
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    cursor: 'pointer',
  },
  cardContent: {
    padding: 15,
    paddingTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.lightBeige,
    borderTopColor: colors.white,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingLeft: 25,
    paddingRight: 5,
    marginTop: -1,
    zIndex: 9,
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10,
  },
  cardContentHeader:{
    fontSize: 16,
    fontWeight: 600,
    paddingBottom: 10,
    paddingLeft: 0,
    paddingBottom: 10
  },
  cardContentPoints:{
    marginVertical: 10,
    fontSize: 18,
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    paddingRight: 15,
    alignItems: 'center'
  },
  cardContentPoint:{
    fontSize: 18,
  },
});


export default Card;