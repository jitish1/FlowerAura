/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View, ActivityIndicator } from "react-native";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'
import { PersistGate } from 'redux-persist/lib/integration/react';

import ListingScreen from './components/ListingScreen';


const RootStack = createStackNavigator({
  Listing: ListingScreen,
}, {
    initialRouteName: "Listing"
  }

);

const AppContainer = createAppContainer(RootStack);

const { store, persistor } = ConfigureStore();


const App = () => {
  return (

    <Provider store={store}>
      <PersistGate loading={
        <View style={{ flex: 1 }}>
          <ActivityIndicator size="large" />
        </View>}
        persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>

  );
};



export default App;

