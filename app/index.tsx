import React from 'react';
import { View, Text, FlatList } from 'react-native';
import products from '../assets/products.json';
import ProductListItem from '../components/ProductListItem';
import { Button, ButtonText } from '@gluestack-ui/themed';


export default function HomeScreen() {
  const numColumns = 2;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={products}
        numColumns={numColumns}
        contentContainerClassName='gap-2'
        key={numColumns} // ⬅ Kunci solusi di sini
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductListItem product={item} />}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

