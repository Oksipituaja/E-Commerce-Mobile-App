import { Text, Card, Button, ButtonText, HStack, VStack, Image, Heading, useBreakpointValue, Box, } from '@gluestack-ui/themed';
import { Stack } from "expo-router";
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
    <Box flex={1} alignItems='center' p={3}>
        <Stack.Screen options={{ title: product.name }} />
        
        <Card p="$5" borderRadius="$lg" w={'$full'} maxWidth={960} flex={1}>
            <Image
                source={{ uri: product.image }}
                alt={`${product.name} image`}
                resizeMode="contain"
                w="$full"
                h={240} 
                borderRadius={12}
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
    </Box>
    );

}