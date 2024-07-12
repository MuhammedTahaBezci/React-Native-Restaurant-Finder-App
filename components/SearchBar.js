import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'; // Import for icons

export default function SearchBar({term, onTermChange, onTermSubmit}) {
  return (
    <View style = {styles.backgroundStyle}>
      {/* Arama ikonu (Search icon) */}
      <Ionicons style = {styles.iconStyle} name="search-circle-outline" size={30} color="black" />
       {/* Arama kutusu (Search input) */}
      <TextInput style = {styles.inputStyle} 
      placeholder='Ara' 
      autoCapitalize='none'
      
      value = {term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        margin: 10,
        height: 50,
        alignItems: 'center',
        borderRadius: 50
    },
    iconStyle: {
        marginHorizontal: 15,
    },
    inputStyle: {
        flex:1,
        fontSize: 18
    }
})