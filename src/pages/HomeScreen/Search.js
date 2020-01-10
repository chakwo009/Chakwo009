import React from 'react';
import {AppRegistry, View, StatusBar} from 'react-native';
import {withNavigation, NavigationActions} from 'react-navigation';
import {Button, Container, Content, Header, Text} from 'native-base';

//Import the Query component from react apollo that will responsible for retrieving data from your graphql server.
import {Query} from 'react-apollo';

//import gql from graphql-tag for making queries to our graphql server.
import gql from 'graphql-tag';

// 匯入自定組件
import ProductList from '../../components/product-list';
import Loading from '../../components/loading';
import SearchBar from '../../components/searchbar';

//匯入自定css
import theme from '../../css/theme.js';

// GQL
const SEARCHKEYWORD_QUERY = gql`
  query SearchKeyword(
    $keyword: String
    $page: Int!
    $limit: Int!
    $filter: JSON
  ) {
    searchKeyword(
      keyword: $keyword
      filter: $filter
      page: $page
      limit: $limit
    ) {
      products {
        id
        name
        frontimg
        unitprice
        favoured
        favourCount
        shop {
          id
          name
        }
        categories {
          id
          label
        }
      }
      counters {
        total
        page
      }
    }
  }
`;

export default class Search extends React.Component {
  //Flatlist Header
  header = data => {
    return (
      <View>
        <SearchBar navigation={this.props.navigation} />
        <Text>Header</Text>
      </View>
    );
  };

  //Flatlist Footer
  footer = () => {
    return (
      <View>
        <Text>This is End </Text>
      </View>
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <Container style={[theme.container]}>
        <Query
          query={SEARCHKEYWORD_QUERY}
          variables={{
            keyword: navigation.state.params.key,
            filter: [],
            page: 1,
            limit: 30,
          }}>
          {({loading, error, data}) => {
            if (loading) return <Loading />;
            if (error) return <Text>{error.message}</Text>;
            return (
              <ProductList
                data={data.searchKeyword.products}
                key={this._keyExtractor}
                header={this.header(data)}
                footer={this.footer}
                navigation={this.props.navigation}
              />
            );
          }}
        </Query>
      </Container>
    );
  }
}
