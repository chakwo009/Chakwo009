import React from 'react';
import {Text, View, Dimensions} from 'react-native';

import YouTube from 'react-native-youtube';

//import components
import ScaledImage from '../scaledimage';

//import Css
import theme from '../../css/theme.js';

const ProductDetailsImage = props => (
  <ScaledImage
    uri={`https://www.hkstalls.com/images/products/${props.productid}/${props.value}`}
    width={Dimensions.get('window').width - 40}
  />
);
const ProductDetailsText = props => <Text>{props.value}</Text>;

const ProductDetailsSwitchBox = props => {
  switch (props.detail.type) {
    case 'image':
      return (
        <ProductDetailsImage
          key={props.detail.id}
          productid={props.productid}
          value={props.detail.value}
        />
      );
      break;

    case 'text':
      return (
        <ProductDetailsText key={props.detail.id} value={props.detail.value} />
      );
      break;

    case 'utube':
      return (
        <View key={props.detail.id}>
          <YouTube
            apiKey="AIzaSyBJSZokCTzAYW-yn_U_CBnOsLartUvt4gU" //For android required
            videoId={props.detail.value} // The YouTube video ID
            style={{alignSelf: 'stretch', height: 300}}
            // play // control playback of video with true/false
            // fullscreen // control whether the video should play in fullscreen or inline
            // loop // control whether the video should loop when ended
            // onReady={e => this.setState({isReady: true})}
            // onChangeState={e => this.setState({status: e.state})}
            // onChangeQuality={e => this.setState({quality: e.quality})}
            // onError={e => this.setState({error: e.error})}
          />
        </View>
      );
      break;

    default:
      return null;
  }
};

const ProductDetails = ({details, productid}) =>
  details !== ''
    ? details.map((detail, idx) => (
        <View key={idx} style={theme.marginH_s}>
          <ProductDetailsSwitchBox productid={productid} detail={detail} />
        </View>
      ))
    : null;

export default ProductDetails;
