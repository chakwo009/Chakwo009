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

export default class Profile extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        {/* <Header /> */}
        <Content padder>
          <Text>Profile</Text>
        </Content>
      </Container>
    );
  }
}
