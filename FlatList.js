import React from 'react';
import Screen from './app/Screen/Screen';
import LottieView from "lottie-react-native";
import Styles from "./app/config/styles";
import colors from "./app/config/colors";

import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform, // Don't forget to import Platform
} from 'react-native';

const Categories = [
  {
    source: require("./app/assets/animations/animation_llnp7o5a.json"),
    icon: '🥰',
    name: 'Happy',
    id: 1,
  },
  {
    source: require("./app/assets/animations/animation_llnp7xen.json"),
    icon: '😐',
    name: 'Neutral',
    id: 2,
  },
  {
    source: require("./app/assets/animations/animation_llnp85d2.json"),
    icon: '😢',
    name: 'Sad',
    id: 3,
  },
  {
    source: require("./app/assets/animations/animation_llnp7xen.json"),
    icon: '😐',
    name: 'Angry',
    id: 4,
  },
];

export default function Test() {
  const isWeb = Platform.OS === 'web';

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.name}
      onPress={() => {
        // handle onPress
      }}>
      <View style={styles.item}>
        {isWeb ? (
          <View style={styles.categoryIcon}>
            <Text style={{ fontSize: 36 }}>{item.icon}</Text>
          </View>
        ) : (
          <View style={styles.categoryIconMobile}>
            <LottieView autoPlay loop source={item.source} />
          </View>
        )}
        <Text style={styles.categoryText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Screen style={Styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>How are you?</Text>
        </View>
        <FlatList
          data={Categories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2} // Display 3 columns
          contentContainerStyle={styles.container}
        />
         <View style={styles.content}>
          <Text style={styles.contentText}> Click on the emoji that best matches the mood you want to log </Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1
  },
  item: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 5,
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
    fontSize: 10,
  },
  categoryIconMobile: {
    borderRadius: 16,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
    width: 130, // Adjust the height as needed
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#505050',
    marginTop: 8,
    textAlign: 'center',
  },
  header:{
    paddingTop: 100,
  },
  headerText:{
    fontSize: 30,
    color: colors.dark,
    fontWeight: 'bold'
  },
  content:{
    paddingHorizontal: 100,
    textAlign: 'center',
    paddingBottom: 150
  },
  contentText:{
    color: colors.dark,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 14
  },
});