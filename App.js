import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './restaurant/screens/SearchScreen';
import ResultShowScreen from './restaurant/screens/ResultShowScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* Ana Navigasyon Yığını Oluştur (Create Main Navigation Stack) */}
      <Stack.Navigator
        screenOptions={{ headerTitle: (props) => (
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>
              <Text style={styles.getirText}> Getir </Text>
              <Text style={styles.sepetiText}> Sepeti </Text>
            </Text>
          </View>
        ) }}>
        {/* Arama Ekranı (Search Screen) */}
        <Stack.Screen name="search screen" 
        component={SearchScreen} 
        />
        <Stack.Screen name="ResultShowScreen" 
        component={ResultShowScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 5,
    backgroundColor: '#660099',
    borderRadius: 10
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  getirText: {
    backgroundColor: '#fa0050', // Getir arka plan rengi
    color: 'white', // Getir yazı rengi
    fontSize: 20,
    paddingHorizontal: 5, // Yatayda iç boşluk
    paddingVertical: 2, // Dikeyde iç boşluk
    borderTopLeftRadius: 3, // Sol üst köşeyi hafif yuvarlama
    borderBottomLeftRadius: 3, // Sol alt köşeyi hafif yuvarlama
  },
  sepetiText: {
    backgroundColor: '#660099', // Sepeti arka plan rengi
    color: 'white', // Sepeti yazı rengi
    fontSize: 20,
    paddingHorizontal: 5, // Yatayda iç boşluk
    paddingVertical: 2, // Dikeyde iç boşluk
    borderTopRightRadius: 3, // Sağ üst köşeyi hafif yuvarlama
    borderBottomRightRadius: 3, // Sağ alt köşeyi hafif yuvarlama
  },
})