import React from 'react';
import {AppRegistry, View, StatusBar} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label,
} from 'native-base';

export default class Catalog extends React.Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content padder>
          <Text>Catalog</Text>
        </Content>
      </Container>
    );
  }
}
