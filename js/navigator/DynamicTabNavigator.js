/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {
  createBottomTabNavigator,
  BottomTabBar,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import MyPage from '../pages/MyPage';
import FavoritePage from '../pages/FavoritePage';
import NavigationUtil from './NavigationUtil';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {connect, useSelector, useDispatch} from 'react-redux';
// import console = require('console');

const TABS = {
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name={'whatshot'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={'md-trending-up'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    },
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name={'favorite'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <Entypo name={'user'} size={26} style={{color: tintColor}} />
      ),
    },
  },
};

const TabBarComponent = props => {
  // const [theme, setTheme] = useState({
  //   tintColor: props.activeTintColor,
  //   updateTime: new Date().getTime(),
  // });
  const theme = useSelector(state => state.theme.theme);
  useEffect(() => {
    console.log('props', props);
  });

  // useEffect(() => {
  //   const {navigation} = props;
  //   const {state} = navigation;
  //   const {routes, index} = state;
  //   // if (routes[index].params) {
  //   //   // 以最新时间为主，防止被其他tab之前的修改覆盖
  //   //   if (
  //   //     routes[index].params.theme &&
  //   //     routes[index].params.theme.updateTime > theme.updateTime
  //   //   ) {
  //   //     setTheme(routes[index].params.theme);
  //   //   }
  //   // }
  //   console.log(props);
  //   if (props.theme) {
  //     // 以最新时间为主，防止被其他tab之前的修改覆盖
  //     setTheme({
  //       tintColor: props.theme,
  //       updateTime: new Date().getTime(),
  //     });
  //   }
  // }, [props, theme.updateTime]);
  // const theme = {
  //   tintColor: props.activeTintColor,
  //   updateTime: new Date().getTime(),
  // };

  return (
    <BottomTabBar
      {...props}
      activeTintColor={theme}
      // activeTintColor={theme.tintColor || props.activeTintColor}
    />
  );
};

const DynamicTabNavigator = props => {
  console.log(props);
  console.disableYellowBox = true;
  // const [Tabs, setTabs] = useState(null);

  // if (Tabs) {
  //   return <Tabs />;
  // }
  // use it not =>
  const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
  const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage}; // 根据需要定时显示的tabs
  // tabs.PopularPage.navigationOptions.tabBarLabel = '最新'; // 动态配置 tab 属性
  // 这里的形参不是外面的参数
  const tabNavigator = createBottomTabNavigator(tabs, {
    tabBarComponent: prop => {
      // return <TabBarComponent />;
      return <TabBarComponent theme={props.theme} {...prop} />;
    },
  });

  const Tab = createAppContainer(tabNavigator);
  // setTabs(createAppContainer(tabNavigator));
  return <Tab />;
  // <Fragment>
  //   <StatusBar barStyle="dark-content" />
  //   <SafeAreaView>
  //     <View style={styles.sectionContainer}>
  //       <Text style={styles.sectionTitle}>HomePage</Text>
  //     </View>
  //   </SafeAreaView>
  // </Fragment>
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

// state 中的 theme 关联到 props 里的 theme
// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     theme: state.theme.theme,
//   };
// };

// export default connect(mapStateToProps)(DynamicTabNavigator);
export default DynamicTabNavigator;
