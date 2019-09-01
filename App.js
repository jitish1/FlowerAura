/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'
import ListingScreen from './components/ListingScreen';
console.disableYellowBox = true;

const RootStack = createStackNavigator({
  Listing: ListingScreen,
}, {
    initialRouteName: "Listing"
  }

);

const AppContainer = createAppContainer(RootStack);

const store = ConfigureStore();


const App = () => {
  return (
    <Provider store={store}>
        <AppContainer />
    </Provider>
  );
};



export default App;

