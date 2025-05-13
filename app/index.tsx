import { View, FlatList } from 'react-native';
import products from '../assets/products.json';
import ProductListItem from '../components/ProductListItem';
import { Button, ButtonText } from '@gluestack-ui/themed';


export default function HomeScreen() {
  return (
      <Button variant='outline'>
        <ButtonText>Press me</ButtonText>
      </Button>
  );
}
