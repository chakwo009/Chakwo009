import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {Container, Content, Text, StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

//import your ApolloProvider from react-apollo to wrap your app.
import {ApolloProvider} from 'react-apollo';
//import ApolloClient, InMemoryCache, and HttpLink to define your client to cnnect to your graphql server.//#endregion
import {ApolloClient, InMemoryCache, HttpLink} from 'apollo-client-preset';

//import your HomeSrceen
import AppRouter from './src/navigation';

//Define your client for your APolloProvider connecting to your graphql server.
const client = new ApolloClient({
  //Assign to your cache property a instance of a InMemoryCache
  cache: new InMemoryCache(),
  //Assign your link with a new instance of a HttpLink linking to your graphql server.
  link: new HttpLink({
    uri: 'https://api.hkstalls.com/hkstalls',
  }),
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    //Wrap your App with apolloProvider with your defined client.
    return (
      <ApolloProvider client={client}>
        <StyleProvider style={getTheme(material)}>
          <AppRouter />
        </StyleProvider>
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
