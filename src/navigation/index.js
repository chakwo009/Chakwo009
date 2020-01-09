import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Add Starting image
import Loading from '../pages/Loading'; //App start image

// Load Pages
import HomeScreen from '../pages/HomeScreen/index.js';
import ProductScreen from '../pages/ProductScreen/index.js';
import ShopScreen from '../pages/ShopScreen/index.js';

//Build Pages list
const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  ProductScreen: {
    screen: ProductScreen,
    navigationOptions: {
      header: null,
    },
  },
  ShopScreen: {
    screen: ShopScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const App = createSwitchNavigator({
  AppLoding: Loading,
  App: AppNavigator,
});

export default createAppContainer(App);
