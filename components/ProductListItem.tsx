import { Text, Card, Button, ButtonText, VStack, Image, Heading, Box} from '@gluestack-ui/themed';

type ProductListItemProps = {
  // dibagian id: string nya itu diubah menjadi id: number. kenapa ?
  // ya karena ada error seperti ini : 
  // Types of property 'id' are incompatible.
  // Type 'number' is not assignable to type 'string'
  // intinya itu ada di number yang tidak assignable dengan type string

  // sederhananya itu gini , si id itu isinya itu number ,tapi di komponen ini kamu mengtipekan isi id nya sebagai string.
  
  product: {  id: number; name: string; price: number };  // Adjust the type according to your product structure
};  

export default function ProductListItem ({ product }: ProductListItemProps) {
  return <Card className="p-5 rounded-lg max-w-[360px] m-3">
      <Image
        source={{
          uri: "https://gluestack.github.io/public-blog-video-assets/saree.png",
        }}
        className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
        alt="image"
      />
      <Text className="text-sm font-normal mb-2 text-typography-700">
        Fashion Clothing
      </Text>
      <VStack className="mb-6">
        <Heading size="md" className="mb-4">
          Cotton Kurta
        </Heading>
        <Text size="sm">
          Floral embroidered notch neck thread work cotton kurta in white and
          black.
        </Text>
      </VStack>
      <Box className="flex-col sm:flex-row">
        <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button
          variant="outline"
          className="px-4 py-2 border-outline-300 sm:flex-1"
        >
          <ButtonText size="sm" className="text-typography-600">
            Wishlist
          </ButtonText>
        </Button>
      </Box>
    </Card>;
}