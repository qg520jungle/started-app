/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import AppNavigator from './js/navigator/AppNavigators';
import {createAppContainer} from 'react-navigation';
// import WelcomePage from './js/pages/WelcomePage';
import {name as appName} from './app.json';
import {
  Provider,
  createStoreHook,
  createDispatchHook,
  createSelectorHook,
} from 'react-redux';
import store from './js/store';
// const store = '';

const AppContainer = createAppContainer(AppNavigator);
// const store = createStore()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);

// AppContainer);
//   <Provider store={store}>
//     <AppContainer />
//   </Provider>
// ));
