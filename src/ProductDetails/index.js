import {Button, HStack, Text} from 'native-base';
import React from 'react';
import {Image, View} from 'react-native';
import ItemCard from '../ItemComponent';
import styles from '../styles';

const ProductDetails = props => {
  // console.log(params, ',=== params');
  const {product} = props?.route?.params;
  const image =
    product?.images[Math.floor(Math.random() * product?.images.length)];
  return (
    <View>
      <HStack safeArea bg="violet.500" justifyContent={'center'}>
        <HStack alignItems="center">
          <Text color="white" fontSize="20" fontWeight="bold">
            Product Details
          </Text>
        </HStack>
      </HStack>

      <View style={styles.backButton}>
        <Button size="sm" onPress={() => props.navigation.navigate('Home')}>
          Go Back
        </Button>
      </View>
      <ItemCard {...product} />
    </View>
  );
};

export default ProductDetails;
