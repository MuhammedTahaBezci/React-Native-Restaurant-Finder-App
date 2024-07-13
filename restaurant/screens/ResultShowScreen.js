import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../../api/yelp';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ResultShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>{result.name}</Text>
        <Text style={styles.phone}>{result.phone}</Text>
        <View style={styles.icon}>
          {result.is_closed ? (
            <MaterialCommunityIcons name="food-off" size={30} color="#ff6a6a" />
          ) : (
            <MaterialCommunityIcons name="food-outline" size={30} color="lightgreen" />
          )}
        </View>
      </View>

      {result.image_url && (
        <Image style={styles.image} source={{ uri: result.image_url }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    backgroundColor: '#660099',
    borderRadius: 3,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    height: 200,
    margin: 10,
    borderRadius: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fa0050',
  },
  phone: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fa0050',
    marginVertical: 5,
  },
  icon: {
    borderRadius: 50,
    margin: 10,
  },
});
