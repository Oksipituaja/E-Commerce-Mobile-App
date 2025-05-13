import { useBreakpointValue, Text, Card, Button, ButtonText, VStack, Image, Heading, Box} from '@gluestack-ui/themed';

type ProductListItemProps = {
  // dibagian id: string nya itu diubah menjadi id: number. kenapa ?
  // ya karena ada error seperti ini : 
  // Types of property 'id' are incompatible.
  // Type 'number' is not assignable to type 'string'
  // intinya itu ada di number yang tidak assignable dengan type string

  // sederhananya itu gini , si id itu isinya itu number ,tapi di komponen ini kamu mengtipekan isi id nya sebagai string.
  
  product: {  id: number; name: string; price: number; description: string; image:string; };  // Adjust the type according to your product structure
};  

export default function ProductListItem ({ product }: ProductListItemProps) {
  
    const flexDirection = useBreakpointValue({
    base: 'column',
    sm: 'row',
  });

  const button1MarginRight = useBreakpointValue({
    base: 0,
    sm: 12, // gunakan angka, bukan string "$3", untuk kompatibilitas
  });

  const button1MarginBottom = useBreakpointValue({
    base: 12,
    sm: 0,
  });

  const buttonFlex = useBreakpointValue({
    base: undefined,
    sm: 1,
  });

return (
    <Card flex={1} p="$5" borderRadius="$lg" maxWidth={360} m="$3">
      <Image
        source={{
          uri: product.image,
        }}
        alt={`${product.name} image`}
        resizeMode="contain" // tampil penuh di area
        h={240}
        w="100%"
        borderRadius={12}
        mb="$6"
      />
      <Text fontSize="$sm" fontWeight="$normal" mb="$2" color="$text700">
        {product.name}
      </Text>
      <VStack mb="$6" space="sm">
        <Heading size="md" mb="$4">
          ${product.price}
        </Heading>
        <Text fontSize="$sm">
          {product.description}
        </Text>
      </VStack>
      <Box flexDirection={flexDirection}>
        <Button
          px="$4"
          py="$2"
          mb={button1MarginBottom}
          mr={button1MarginRight}
          flex={buttonFlex}
        >
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button
          variant="outline"
          px="$4"
          py="$2"
          borderColor="$border300"
          flex={buttonFlex}
        >
          <ButtonText size="sm" color="$text600">
            Wishlist
          </ButtonText>
        </Button>
      </Box>
    </Card>
  );
}