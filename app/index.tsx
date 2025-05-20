import React from 'react';
import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import products from '../assets/products.json';
import ProductListItem from '../components/ProductListItem';
import { Box, Button, ButtonText, Center, } from '@gluestack-ui/themed';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  // const numColumns = width > 700 ? 3 : 2;
  let numColumns;
  
  if (width < 600) {
    // Default
    numColumns = 2;
  } else if (width >= 600 && width < 1024) {
    // sm
    numColumns = 3;
  } else {
    // xl
    numColumns = 4;
  }

    console.log('re-render');

  return (
    <FlatList
      key={numColumns}
      data={products}
      numColumns={numColumns}
      contentContainerStyle={{
        width: '100%',
        alignSelf: 'center',
        padding: 8,
      }}
      columnWrapperStyle={numColumns > 1 ? {
        justifyContent: 'space-between',
        gap: 8,
      } : null}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}

