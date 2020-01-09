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
import {
  Button,
  Container,
  Content,
  Header,
  Text,
  Icon,
  Item,
  Input,
  Footer,
  FooterTab,
  Thumbnail,
  Label,
} from 'native-base';

import Drawer from 'react-native-drawer';

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

class ShopScreen extends React.Component {
  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };

  //Flatlist Header
  header = data => {
    return (
      <View>
        <View style={[theme.shadowbox, theme.marginH_s]}>
          <ScaledImage
            uri={`https://www.books.com.tw/fashion/activity/2017/04/0407buy/images/main02.jpg`}
            width={Dimensions.get('window').width - 10}
          />
          <View style={[theme.padding_s]}>
            <Text style={[theme.text_bold, theme.text_s]}>
              <Text>{data.shopProducts.shop.name}</Text>
              <Text style={[theme.text_orange, theme.text_xs]}>
                ({data.shopProducts.shop.type})
              </Text>
            </Text>
            <Text style={[theme.text_s]}>
              {data.shopProducts.shop.description
                ? data.shopProducts.shop.description
                : '店主很懶！甚麼都沒填寫！-_-'}
            </Text>
          </View>
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
          if (error) return <Text>{error.message}</Text>;
          return (
            <Drawer
              ref={ref => (this._drawer = ref)}
              tapToClose={true}
              openDrawerOffset={0.6} // 20% gap on the right side of drawer
              panCloseMask={0.6}
              closedDrawerOffset={-3}
              type="overlay"
              styles={{
                drawer: {
                  backgroundColor: '#fff',
                  opacity: 0.9,
                },
              }}
              content={
                // Drawer Content
                <View>
                  <Text>12123213</Text>
                  <Text>12123213</Text>
                  <Text>12123213</Text>
                  <Text>12123213</Text>
                  <Text>12123213</Text>
                  <Text>12123213</Text>
                  <Text>12123213</Text>
                </View>
              }>
              <Container>
                <View style={{flex: 1, padding: 10}}>
                  <FlatList
                    data={data.shopProducts.products}
                    keyExtractor={this._keyExtractor}
                    //Import Header in Flatlist
                    ListHeaderComponent={this.header(data)}
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
                <Footer>
                  <FooterTab>
                    <Button onPress={() => navigation.navigate('Home')}>
                      <Icon name="bowtie" />
                      <Text>排檔</Text>
                    </Button>
                    <Button
                      vertical
                      active={navigation.state.index == 1}
                      onPress={this.openControlPanel}>
                      <Icon name="bowtie" />
                      <Text>產品分類</Text>
                    </Button>
                    <Button onPress={() => navigation.navigate('Home')}>
                      <Icon name="bowtie" />
                      <Text>聯絡店員</Text>
                    </Button>
                    <Button onPress={() => navigation.navigate('Home')}>
                      <Icon name="bowtie" />
                      <Text>返回上頁</Text>
                    </Button>
                  </FooterTab>
                </Footer>
              </Container>
            </Drawer>
          );
        }}
      </Query>
    );
  }
}
export default withNavigation(ShopScreen);
