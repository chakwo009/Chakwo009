import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Button, Text, Icon, Item, Footer, FooterTab, Label} from 'native-base';
import {TouchableHighlight, Modal} from 'react-native';
import Drawer from 'react-native-drawer';

import Shop from './Shop.js';

export default ShopScreen = createBottomTabNavigator(
  {
    Shop: {
      screen: props => <Shop {...props} />,
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              active={props.navigation.state.index == 0}
              onPress={() => props.navigation.navigate('Home')}>
              <Icon name="bowtie" />
              <Text>排檔</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index == 0}
              onPress={() => props.navigation.navigate('Home')}>
              <Icon name="bowtie" />
              <Text>產品分類</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index == 0}
              onPress={() => props.navigation.navigate('Home')}>
              <Icon name="bowtie" />
              <Text>聯絡店員</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index == 0}
              onPress={() => props.navigation.navigate('Home')}>
              <Icon name="bowtie" />
              <Text>返回上頁</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
  },
);
