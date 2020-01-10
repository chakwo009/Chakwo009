import React from 'react';
import {View, Dimensions} from 'react-native';
import {Header, Button, Text, Container, Item, Icon, Input} from 'native-base';

import {withNavigation} from 'react-navigation';

//Import the Query component from react apollo that will responsible for retrieving data from your graphql server.
import {Query} from 'react-apollo';

//import gql from graphql-tag for making queries to our graphql server.
import gql from 'graphql-tag';

// 匯入輪播組件
import Carousel from 'react-native-snap-carousel';

// 匯入自定組件
import ScaledImage from '../../components/scaledimage';
import CatMenu from '../../components/catmenu';
import ProductList from '../../components/product-list';
import Loading from '../../components/loading';
import SearchBar from '../../components/searchbar';

//匯入自定css
import theme from '../../css/theme.js';

const GET_ALL_PRODUCTS = gql`
  query products {
    products {
      id
      name
      unitprice
      frontimg
      shop {
        id
        name
        district
      }
    }
  }
`;

class Home extends React.Component {
  //Banner Source
  state = {
    entries: [
      {image: 'http://www.freelancer-hk.com/hkstalls_img/banner_01.png'},
      {image: 'http://www.freelancer-hk.com/hkstalls_img/banner_01.png'},
    ],
  };

  //Render Banner Image
  _renderItem({item, index}) {
    return (
      <ScaledImage
        uri={item.image}
        width={Dimensions.get('window').width - 20}
        fall={require('../../images/banner/no-image.png')}
        key={index}
      />
    );
  }

  /**
   * Bottom Tab link
   */
  handleTabChange(index) {
    this.setState({
      tabIndex: index,
    });

    // Set page title
    this.props.navigation.setParams({title: this.state.titles[index]});
  }

  //Flatlist Header
  header = () => {
    return (
      <View>
        <SearchBar navigation={this.props.navigation} />
        <View style={[theme.shadowbox, theme.marginH_s]}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={Dimensions.get('window').width - 20}
            itemWidth={Dimensions.get('window').width - 20}
            autoplayDelay={100}
            autoplay
            loop
          />
        </View>
        <View style={[theme.shadowbox, theme.marginH_s]}>
          <CatMenu navigation={this.props.navigation} />
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
    return (
      <Container style={[theme.container]}>
        {/* <Header /> */}
        <Query query={GET_ALL_PRODUCTS}>
          {({loading, error, data}) => {
            if (loading) return <Loading />;
            if (error) return <Text>{error.message}</Text>;
            return (
              <ProductList
                data={data.products}
                key={this._keyExtractor}
                header={this.header}
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
export default withNavigation(Home);
