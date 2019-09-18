// import React, {Fragment} from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import WelcomePage from '../pages/WelcomePage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import {connect} from 'react-redux';
// import {createStore, applyMiddleware, combineReducers} from 'redux';
import {
  createReactNavigationReduxMiddleware,
  // reduxifyNavigator,
  createNavigationReducer,
  createReduxContainer,
} from 'react-navigation-redux-helpers';

// import {Provider} from 'react-redux';
// import store from '../store';

const rootCom = 'Init'; // 设置根路由

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null,
    },
  },
});

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null,
    },
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      // header: null,
    },
  },
});

// 不会跳到欢迎页
const RootNavigator = createSwitchNavigator(
  {
    Init: InitNavigator,
    Main: MainNavigator,
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const middleware = createReactNavigationReduxMiddleware(state => state.nav);
const AppNavigator = createAppContainer(RootNavigator);
const navReducer = createNavigationReducer(AppNavigator);

const App = createReduxContainer(AppNavigator);
const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);
export {RootNavigator, middleware, navReducer, rootCom};
export default RootNavigator;
