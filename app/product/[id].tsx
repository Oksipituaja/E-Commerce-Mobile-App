import { Text, Card, Button, ButtonText, HStack, VStack, Image, Heading, useBreakpointValue, } from '@gluestack-ui/themed';
import { useLocalSearchParams } from 'expo-router';
import products from '../../assets/products.json';

export default function ProductDetailsScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const product = products.find((p) => p.id == Number(id));

    const flexDirection = useBreakpointValue({
        base: 'column',
        sm: 'row',
    });

    const buttonFlex = useBreakpointValue({
        base: undefined,
        sm: 1,
    });

    if (!product) {
        return <Text>Product not found</Text>
    }

    return (
        <Card p="$4" borderRadius="$lg" maxWidth={560} m="$3">
            <Image
                source={{ uri: product.image }}
                alt={`${product.name} image`}
                resizeMode="contain"
                w="$full"
                h={200} 
                borderRadius={12}
                backgroundColor='$backgroundLight0'
                mb="$4"

            />

            <Text fontSize="$sm" fontWeight="$normal" mb="$2" color="$text700">
                {product.name}
            </Text>

            <VStack mb="$4" space="sm">
                <Heading size="md" mb="$1">
                    ${product.price}
                </Heading>
                <Text fontSize="$sm" color="$text600">
                    {product.description}
                </Text>
            </VStack>

            {flexDirection === 'row' ? (
                <HStack space="sm">
                    <Button flex={buttonFlex}>
                        <ButtonText size="sm">Add to cart</ButtonText>
                    </Button>
                    <Button
                        variant="outline"
                        borderColor="$border300"
                        flex={buttonFlex}
                    >
                        <ButtonText size="sm" color="$text600">
                            Wishlist
                        </ButtonText>
                    </Button>
                </HStack>
            ) : (
                <VStack space="sm">
                    <Button>
                        <ButtonText size="sm">Add to cart</ButtonText>
                    </Button>
                    <Button variant="outline" borderColor="$border300">
                        <ButtonText size="sm" color="$text600">
                            Wishlist
                        </ButtonText>
                    </Button>
                </VStack>
            )}
        </Card>

    );

}