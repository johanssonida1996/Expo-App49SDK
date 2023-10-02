import React from 'react';
import { View, Text } from 'react-native';

function CardDetailsScreen({ route }) {
  const { routine } = route.params;

  return (
    <View>
      <Text>Title: {routine.title}</Text>
      {routine.tags && <Text>Tags: {routine.tags.join(', ')}</Text>} 
      <Text>Description: {routine.description}</Text>
      <Text>Points: {routine.points}</Text>
    </View>
  );
}

export default CardDetailsScreen;