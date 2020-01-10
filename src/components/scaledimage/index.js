import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

//等比例縮放圖片 Source from https://www.npmjs.com/package/react-native-auto-height-image
import AutoHeightImage from 'react-native-auto-height-image';

//

const ScaledImage = ({width, uri, fall}) => (
  <AutoHeightImage
    width={width}
    source={{uri: uri}}
    fallbackSource={fall}
    resizeMode="contain"
  />
);
export default ScaledImage;
