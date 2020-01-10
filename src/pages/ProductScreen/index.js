import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  Button,
  Container,
  Content,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Thumbnail,
  Label,
} from 'native-base';
import {
  Dimensions,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableHighlight,
  Modal,
} from 'react-native';

import {withNavigation, NavigationActions} from 'react-navigation';

//Import the Query component from react apollo that will responsible for retrieving data from your graphql server.
import {Query} from 'react-apollo';

//import gql from graphql-tag for making queries to our graphql server.
import gql from 'graphql-tag';

// 匯入輪播組件
import Carousel from 'react-native-snap-carousel';

// 匯入自定組件
import ScaledImage from '../../components/scaledimage';
import ProductDetails from '../../components/product-details';
import MyIcon from '../../components/iconfont';
import Loading from '../../components/loading';

//匯入自定css
import theme from '../../css/theme.js';
import custom from './style';

// GQL
const ONE_PRODUCT_QUERY = gql`
  query ONE_PRODUCT_QUERY($id: ID!) {
    product(id: $id) {
      id
      name
      unitprice
      favoured
      favourCount
      details
      brand
      origin
      weight
      state
      agegroup
      care
      shop {
        id
        name
        district
        logo
        description
        type
        rank
        hotsale {
          id
          frontimg
          unitprice
        }
      }
      viewImages
      sizes
      pattens
      skus
      categories {
        id
        label
      }
    }
  }
`;

class Product extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const {navigation} = this.props;
    const backAction = NavigationActions.back();

    return (
      <Query
        query={ONE_PRODUCT_QUERY}
        variables={{id: navigation.state.params.id}}>
        {({loading, error, data}) => {
          if (loading) return <Loading />;
          if (error) return <Text>{error.message}</Text>;
          return (
            <Container>
              <Content padder>
                <View>
                  {/* Product images with Carousel */}
                  <View style={theme.shadowbox}>
                    <TouchableHighlight
                      underlayColor="white"
                      // onPress={() => goBack()}
                      onPress={() => this.props.navigation.dispatch(backAction)}
                      style={custom.close}>
                      <Text>Close</Text>
                    </TouchableHighlight>

                    <Carousel
                      ref={c => {
                        this._carousel = c;
                      }}
                      data={data.product.viewImages}
                      //Render Carousel Image
                      renderItem={({item, idx}) => (
                        <ScaledImage
                          uri={`https://www.hkstalls.com/images/products/${data.product.id}/${item.value}`}
                          width={Dimensions.get('window').width - 20}
                          fall={require('../../images/banner/no-image_800x800.png')}
                          key={idx}
                        />
                      )}
                      sliderWidth={Dimensions.get('window').width - 20}
                      itemWidth={Dimensions.get('window').width - 20}
                      autoplayDelay={100}
                      source={navigation.state.params.id}
                      extraData={this.props}
                      autoplay
                      loop
                    />
                  </View>
                  {/* Product information */}
                  <View
                    style={[
                      theme.shadowbox,
                      theme.marginTop_s,
                      theme.padding_m,
                    ]}>
                    <Text numberOfLines={2} style={custom.product_name}>
                      {data.product.name}
                    </Text>
                    <View style={theme.Rowbox}>
                      <View style={custom.unitpricebox}>
                        <Text style={custom.unitprice}>
                          HKD${data.product.unitprice}
                          <Text style={custom.type}> (全新)</Text>
                        </Text>
                      </View>
                      <View style={custom.sharebox}>
                        <TouchableHighlight
                          underlayColor="white"
                          // onPress={this.shareMessage}
                        >
                          <Text>123</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                    <View style={theme.spaceline} />
                    <View style={custom.discountbox}>
                      <Text style={custom.discount} numberOfLines={2}>
                        (itemsales)優惠期由2018-08-02至2018-09-02凡購物滿2件或以上，即享10%的折扣優惠！
                      </Text>
                    </View>
                    <Text style={custom.subinfo}>
                      {/* <Icon name={'shipping'} size={12} /> (shipping)順豐到付, */}
                      門市自取
                    </Text>
                    <Text style={custom.subinfo}>
                      {/* <Icon name={'round-info'} size={12} />{' '} */}
                      如發現產品涉及侵權或虛假資料，請按此投訴或檢舉！
                    </Text>
                  </View>
                  {/* Product details */}
                  <View
                    style={[
                      theme.shadowbox,
                      theme.marginTop_s,
                      theme.padding_m,
                    ]}>
                    {data.product.details.length > 0 ? (
                      <ProductDetails
                        productid={data.product.id}
                        details={data.product.details}
                      />
                    ) : (
                      <Text>沒有詳細資料</Text>
                    )}
                  </View>
                  {/* Product Modal for Action */}
                  <View>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={this.state.modalVisible}>
                      <View style={custom.mobal_box}>
                        <View style={custom.mobal_display}>
                          {/* <ProductToCartForm data={data.product} /> */}
                          <TouchableHighlight
                            style={custom.close}
                            onPress={() => {
                              this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                          </TouchableHighlight>
                        </View>
                      </View>
                    </Modal>
                  </View>
                </View>
              </Content>
              <Footer>
                <FooterTab>
                  <Button
                    onPress={() =>
                      navigation.navigate('ShopScreen', {
                        id: data.product.shop.id,
                      })
                    }>
                    <Thumbnail
                      style={{width: 32, height: 32}}
                      source={{
                        uri: `https://www.hkstalls.com/images/shops/${data.product.shop.id}/temp_logo.png`,
                      }}
                    />
                    <Text>排檔</Text>
                  </Button>
                  <Button onPress={() => navigation.navigate('Home')}>
                    <Icon>
                      <MyIcon name={'cs'} style={[theme.text_l]} />
                    </Icon>
                    <Text>查詢</Text>
                  </Button>
                  <Button onPress={() => navigation.navigate('HomeScreen')}>
                    <Icon>
                      <MyIcon name={'news'} style={[theme.text_l]} />
                    </Icon>
                    <Text>評價</Text>
                  </Button>
                  <View style={{flex: 3}}>
                    <TouchableHighlight style={[custom.footerbtn]}>
                      <Text style={[custom.footerbtntext]}>加入購物車</Text>
                    </TouchableHighlight>
                  </View>
                </FooterTab>
              </Footer>
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default withNavigation(Product);
