import React from 'react';
import {View} from 'react-native';
import {Button, Header, Text, Item, Icon, Input} from 'native-base';

//css
import theme from '../../css/theme.js';

export default class SearchBar extends React.Component {
  state = {
    keyword: '',
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Header searchBar>
        <Item>
          <Icon name="ios-search" style={theme.text_orange} />
          <Input
            placeholder=""
            onChangeText={keyword => this.setState({keyword})}
            value={this.state.keyword}
          />
          <Button
            Primary
            small
            style={[theme.marginW_s]}
            onPress={() => navigate('Search', {key: this.state.keyword})}>
            <Text>搜尋</Text>
          </Button>
        </Item>
      </Header>
    );
  }
}
