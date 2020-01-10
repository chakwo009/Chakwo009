import React from 'react';
import {Text, FlatList, View} from 'react-native';

// 匯入自定組件
import ProductCard from '../product-card';

const ProductList = ({data, header, footer, key, navigation}) => (
  <FlatList
    data={data}
    keyExtractor={key}
    //Import Header in Flatlist
    ListHeaderComponent={header}
    //Import Footer
    ListFooterComponent={footer}
    numColumns={3}
    // Performance settings
    scrollEnabled={true}
    // Hidden Scrollbar
    showsVerticalScrollIndicator={false}
    //Child items
    renderItem={({item, idx}) => (
      <View style={{flex: 1 / 3}}>
        <ProductCard product={item} navigation={navigation} key={idx} />
      </View>
    )}
  />
);

export default ProductList;
