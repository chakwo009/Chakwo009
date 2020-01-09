import React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import gql from 'graphql-tag';
import {Query, Mutation} from 'react-apollo';

//import Component
import ScaledImage from '../scaledimage';

//css
import theme from '../../css/theme.js';

// GQL
const PRODUCT_CATEGORIES_QUERY = gql`
  query PRODUCT_CATEGORIES_QUERY {
    categories {
      id
      label
    }
    types {
      parent
      id
      label
      species {
        id
        label
      }
    }
  }
`;

export default class CatMenu extends React.Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <Query query={PRODUCT_CATEGORIES_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>Error: {error.message}</Text>;
          return (
            <View>
              <FlatList
                data={data.categories}
                keyExtractor={this._keyExtractor}
                numColumns={7}
                //horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, idx}) => (
                  <View key={item.id} style={{padding: 5}}>
                    <TouchableOpacity
                      onPress={() =>
                        navigate('SearchPage', {label: item.label})
                      }>
                      {/* <Text style={[theme.text_xs, theme.txc]}>{item.id}</Text> */}
                      <Image
                        style={{width: 45, height: 45, alignItems: 'center'}}
                        source={require('../../images/caticon/10000000.png')}
                      />
                      <Text
                        style={[theme.text_xs, theme.txc, theme.text_black]}>
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          );
        }}
      </Query>
    );
  }
}
