import React from 'react';
import {
  Dimensions,
  FlatList,
  View,
  SafeAreaView,
  ActivityIndicator,
  TouchableHighlight,
  Modal,
} from 'react-native';
import {Text, Container, Content} from 'native-base';

import {withNavigation, NavigationActions} from 'react-navigation';

//Import the Query component from react apollo that will responsible for retrieving data from your graphql server.
import {Query} from 'react-apollo';

//import gql from graphql-tag for making queries to our graphql server.
import gql from 'graphql-tag';

// 匯入輪播組件
import Carousel from 'react-native-snap-carousel';

// 匯入自定組件
import ScaledImage from '../../components/scaledimage';
import ProductCard from '../../components/product-card';

//匯入自定css
import theme from '../../css/theme.js';

// GQL
const SHOP_PRODUCTS_QUERY = gql`
  query SHOP_PRODUCTS_QUERY($id: ID!, $page: Int, $limit: Int, $filter: JSON) {
    shopProducts(id: $id, filter: $filter, page: $page, limit: $limit) {
      shop {
        id
        name
        type
        district
        logo
        banner
        description
        rank
        hotsale {
          id
          frontimg
          unitprice
        }
        categories {
          id
          label
          types {
            id
            label
            species {
              id
              label
            }
          }
        }
        types {
          id
          label
          species {
            id
            label
          }
        }
        species {
          id
          label
        }
      }
      products {
        id
        name
        frontimg
        unitprice
      }
      counters {
        total
        page
      }
    }
  }
`;

class Shop extends React.Component {
  //Flatlist Header
  header = () => {
    return (
      <View>
        <View style={[theme.shadowbox, theme.marginH_s]}>
          <Text style={[theme.txc]}>This is header </Text>
        </View>
      </View>
    );
  };

  //Flatlist Footer
  footer = () => {
    return (
      <View>
        <Text style={[theme.txc]}>This is End </Text>
      </View>
    );
  };

  render() {
    const {navigation} = this.props;

    return (
      <Query
        query={SHOP_PRODUCTS_QUERY}
        variables={{id: navigation.state.params.id, filter: []}}>
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator size="large" color="#ccc" />;
          if (error) return <Text>{error.message}123123</Text>;
          return (
            <Container>
              {/* <Header /> */}
              <View style={{flex: 1, padding: 10}}>
                <FlatList
                  data={data.shopProducts.products}
                  keyExtractor={this._keyExtractor}
                  //Import Header in Flatlist
                  ListHeaderComponent={this.header}
                  //Import Footer
                  ListFooterComponent={this.footer}
                  numColumns={3}
                  // Performance settings
                  scrollEnabled={true}
                  // Hidden Scrollbar
                  showsVerticalScrollIndicator={false}
                  //Child items
                  renderItem={({item, idx}) => (
                    <ProductCard
                      product={item}
                      navigation={this.props.navigation}
                      key={idx}
                    />
                  )}
                />
              </View>
            </Container>
          );
        }}
      </Query>
    );
  }
}
export default withNavigation(Shop);
