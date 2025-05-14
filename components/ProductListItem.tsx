import { Text, Card, Button, ButtonText, HStack, VStack, Image, Heading, useBreakpointValue } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

type ProductListItemProps = {
  product: { id: number; name: string; price: number; description: string; image: string;
  // dibagian id: string nya itu diubah menjadi id: number. kenapa ?
  // ya karena ada error seperti ini : 
  // Types of property 'id' are incompatible.
  // Type 'number' is not assignable to type 'string'
  // intinya itu ada di number yang tidak assignable dengan type string

  // sederhananya itu gini , si id itu isinya itu number ,tapi di komponen ini kamu mengtipekan isi id nya sebagai string.
  

  };
};

export default function ProductListItem({ product }: ProductListItemProps) {
  const flexDirection = useBreakpointValue({
    base: 'column',
    sm: 'row',
  });

  const buttonFlex = useBreakpointValue({
    base: undefined,
    sm: 1,
  });

  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable style={{ flex: 1 }}>
        <Card p="$4" borderRadius="$lg" maxWidth={360} m="$3">
          <Image
            source={{ uri: product.image }}
            alt={`${product.name} image`}
            resizeMode="contain"
            w="100%"
            h={200} // tinggi tetap
            borderRadius={12}
            mb="$4"
            backgroundColor="$white"
          />
          <Text fontSize="$sm" fontWeight="$normal" mb="$2" color="$text700">
            {product.name}
          </Text>
            <Heading size="md" mb="$1">
              ${product.price}
            </Heading>
        </Card>
      </Pressable>
    </Link>
  );
}
