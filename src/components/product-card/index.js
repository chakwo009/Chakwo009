import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

//import Component
import ScaledImage from '../scaledimage';

//import Css
import custom from './style';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dimensions: undefined};
  }

  render() {
    const {product} = this.props;

    const {navigate} = this.props.navigation;

    if (this.state.dimensions) {
      var {dimensions} = this.state;
      var {width, height} = dimensions;
    }

    return (
      <View
        style={{
          flex: 1,
          margin: 1,
          borderRadius: 12,
          overflow: 'hidden',
        }}>
        <TouchableOpacity
          style={custom.cardbox}
          onPress={() => navigate('ProductScreen', {id: product.id})}
          onLayout={this.onLayout}
          key={product.id}>
          {this.state.dimensions ? (
            <View
              style={{
                flex: 1,
              }}>
              <ScaledImage
                uri={`https://www.hkstalls.com/images/products/${product.id}/${product.frontimg}`}
                width={width}
                fall={require('../../images/banner/no-image_800x800.png')}
              />
            </View>
          ) : (
            undefined
          )}
          <Text numberOfLines={2} style={custom.name}>
            {product.name}
          </Text>
          <Text style={custom.price}>${product.unitprice}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onLayout = event => {
    if (this.state.dimensions) return; // layout was already called
    let {width, height} = event.nativeEvent.layout;
    this.setState({dimensions: {width, height}});
  };
}
