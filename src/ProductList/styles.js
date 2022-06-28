import {StyleSheet, Platform} from 'react-native';
import metrics from '../config/metrics';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    // marginHorizontal: 25,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: metrics.verticalScale(20),
    width: Platform?.OS === 'web' ? '80%' : '100%',
  },
  thumb: {
    height: metrics.verticalScale(260),
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    margin: 15,
  },
  renderProduct: {
    margin: 8,
  },
});
