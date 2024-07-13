import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import UseResults from '../../hooks/UseResults';
import ResultsList from '../../components/ResultsList';

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = UseResults();
  const [term, setTerm] = useState('');

  // Fiyat bazında sonuçları filtreleyen bir fonksiyon
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      // Sonuçların fiyatı verilen fiyatla eşleşiyorsa, onları döndür
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <>
          {results.length === 0 ? null : (
            <>
              <ResultsList title="Ucuz Restoranlar" results={filterResultsByPrice('₺')} />
              <ResultsList title="Uygun Restoranlar" results={filterResultsByPrice('₺₺')} />
              <ResultsList title="Pahalı Restoranlar" results={filterResultsByPrice('₺₺₺')} />
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
