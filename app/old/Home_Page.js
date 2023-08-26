import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  Platform
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LottieView from "lottie-react-native";
import Screen from './Screen - old/Screen';
import Styles from '../config/styles';


const categories = [
  [
    {
      source: require("../assets/animations/animation_llnp7o5a.json"),
      icon: '🥰',
      name: 'Happy',
    },
    {
      source: require("../assets/animations/animation_llnp7xen.json"),
      icon: '😐',
      name: 'Neutral',
    },
    {
      source: require("../assets/animations/animation_llnp85d2.json"),
      icon: '😢',
      name: 'Sad',
    },
    {
      source: require("../assets/animations/animation_llnp7o5a.json"),
      icon: '🥰',
      name: 'Test',
    },
    {
      source: require("../assets/animations/animation_llnp7xen.json"),
      icon: '😐',
      name: 'Test2',
    },
    {
      source: require("../assets/animations/animation_llnp85d2.json"),
      icon: '😢',
      name: 'Sad',
    },
  ],
];


export default function HomePage() {
  const isWeb = Platform.OS === 'web';
  return (
    <Screen style={Styles.container} >
            <View style={styles.categories}>
              {categories.map((row, index) => (
                <View style={styles.categoriesRow} key={index}>
                  {row.map(item => (
                    <TouchableOpacity
                      style={styles.category}
                      key={item.name}
                      onPress={() => {
                        // handle onPress
                      }}>
                    
                      {isWeb ? (
                        <View style={styles.categoryIcon}>
                        <Text style={{ fontSize: 36}}>{item.icon}</Text>
                        </View>
                      ):(
                        <View style={styles.categoryIconMobile}>
                        <LottieView
                          autoPlay
                          loop
                          source={item.source}
                        />
                        </View>
                      )}
                    
                      <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </View>
    </Screen> 
  );
}

const styles = StyleSheet.create({
  categories: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  categoriesRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: -4,
  },
  category: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  categoryIcon: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 36,
  },
  categoryIconMobile: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#505050',
    marginTop: 8,
    textAlign: 'center',
  },
});