import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Button, Text, Icon, Item, Footer, FooterTab, Label} from 'native-base';

// 匯入自定組件
import MyIcon from '../../components/iconfont';

import Home from './Home.js';
import Catalog from './Catalog.js';
import Profile from './Profile.js';

export default HomeScreen = createBottomTabNavigator(
  {
    Home: {
      screen: props => <Home {...props} />,
    },
    Catalog: {
      screen: props => <Catalog {...props} />,
    },
    Profile: {
      screen: props => <Profile {...props} />,
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigation.state.index == 0}
              onPress={() => props.navigation.navigate('Home')}>
              <Icon>
                <MyIcon name={'shop'} style={{fontSize: 20}} />
              </Icon>
              <Text>首頁</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 1}
              onPress={() => props.navigation.navigate('Catalog')}>
              <Icon>
                <MyIcon name={'shop'} style={{fontSize: 20}} />
              </Icon>
              <Text>全部分類</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 2}
              onPress={() => props.navigation.navigate('Profile')}>
              <Icon>
                <MyIcon name={'shop'} style={{fontSize: 20}} />
              </Icon>
              <Text>我的排檔</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
  },
);
