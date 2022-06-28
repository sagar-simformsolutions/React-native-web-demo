import {useFocusEffect} from '@react-navigation/native';
import {HStack, Switch, useTheme, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import ItemCard from '../ItemComponent';
import styles from './styles';

async function fetchProducts() {
  const resp = await fetch('https://dummyjson.com/products')
    .then(res => res)
    .then(res => res.json())
    .catch(err => {
      console.log(err, '<== er');
    });

  return resp;
}
const ItemList = ({navigation}) => {
  const [productList, setProductList] = useState([]);
  const {breakpoints} = useTheme();
  const {width} = useWindowDimensions();

  useEffect(() => {
    let data = null;
    async function initialApi() {
      data = await fetchProducts();
      setProductList(data?.products);
    }
    initialApi();
  }, [navigation]);

  function renderProduct({item: product}) {
    return (
      <TouchableOpacity
        style={styles.renderProduct}
        onPress={() => {
          navigation?.navigate('PickerImage', {
            product: product,
          });
        }}>
        <ItemCard {...product} />
      </TouchableOpacity>
    );
  }

  console.log(navigation, '<=== navigation');
  return (
    <FlatList
      numColumns={breakpoints?.lg <= width ? 3 : 1}
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={item => item.id.toString()}
      data={productList}
      renderItem={renderProduct}
    />
  );
};

const ProductList = ({params, ...props}) => {
  return (
    <View>
      <HStack safeArea bg="violet.500" justifyContent={'center'}>
        <HStack alignItems="center">
          <Text color="white" fontSize="20" fontWeight="bold">
            Product Listing
          </Text>
        </HStack>
      </HStack>
      <View style={styles.container}>
        <ItemList {...props} />
      </View>
    </View>
  );
};

export default ProductList;
