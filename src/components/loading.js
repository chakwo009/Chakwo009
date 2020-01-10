import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

//css
import theme from '../css/theme.js';

const Loading = () => (
  <View style={[theme.container, theme.alignCenter, theme.center]}>
    <ActivityIndicator size="large" color="#f4c91d" />
  </View>
);

export default Loading;
