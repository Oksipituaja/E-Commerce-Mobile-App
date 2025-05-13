import { Text } from 'react-native';

type ProductListItemProps = {
  // dibagian id: string nya itu diubah menjadi id: number. kenapa ?
  // ya karena ada error seperti ini : 
  // Types of property 'id' are incompatible.
  // Type 'number' is not assignable to type 'string'
  // intinya itu ada di number yang tidak assignable dengan type string

  // sederhananya itu gini , si id itu isinya itu number ,tapi di komponen ini kamu mengtipekan isi id nya sebagai string.
  
  product: {  id: string; name: string; price: number };  // Adjust the type according to your product structure
};  

export default function ProductListItem ({ product }: ProductListItemProps) {
  return <Text style={{ fontSize: 30 }}>{product.name}</Text>;
}