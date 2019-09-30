/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useSelector, useDispatch, connect} from 'react-redux';
import actions from '../action/index';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '../navigator/NavigationUtil';
import PopularItem from '../common/PopularItem';

import {Colors} from 'react-native/Libraries/NewAppScreen';

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
  tabStyle: {
    minWidth: 50,
  },
  tabsTheme: {
    backgroundColor: '#678',
  },
  indicatorStyle: {
    backgroundColor: 'white',
    height: 2,
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6,
  },
});

// let url = `https://api.github.com/search/repositories?q=${text}`;
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_COLOR = 'red';

const PopularTab = props => {
  const {tabLabel, navigation} = props;
  const popular = useSelector(state => state.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    loadData();
  }, [loadData, tabLabel]);
  // dispatch(actions.onThemeChange('orange'));
  //
  // useCallback(()=>{

  // })

  const loadData = useCallback(() => {
    const url = genFetchUrl(tabLabel);
    dispatch(actions.onLoadPopularData(tabLabel, url));
  }, [dispatch, tabLabel]);

  const genFetchUrl = key => {
    return URL + key + QUERY_STR;
  };

  const renderItem = data => {
    const item = data.item;
    return (
      // <View style={{marginBottom: 10}}>
      //   <Text style={{backgroundColor: '#faa'}}>{JSON.stringify(item)}</Text>
      // </View>
      <PopularItem item={item} onSelect={() => {}} />
    );
  };

  return (
    <View>
      <FlatList
        data={popular[tabLabel] ? popular[tabLabel].items : []}
        renderItem={data => renderItem(data)}
        keyExtractor={item => '' + item.id}
        refreshControl={
          <RefreshControl
            title={'Loading'}
            titleColor={THEME_COLOR}
            color={[THEME_COLOR]}
            refreshing={popular[tabLabel] ? popular[tabLabel].isLoading : false}
            onRefresh={() => loadData()}
            tintColor={THEME_COLOR}
          />
        }
      />
    </View>
  );
};

const tabNames = ['Java', 'Andriod', 'iOS', 'React', 'React Native', 'PHP'];

const PopularPage = props => {
  const genTab = tabNames => {
    const tabs = {};
    tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularTab {...props} tabLabel={item} />,
        navigationOptions: {
          title: item,
        },
      };
    });
    return tabs;
  };

  const tabNavigator = createMaterialTopTabNavigator(genTab(tabNames), {
    tabBarOptions: {
      tabStyle: styles.tabStyle,
      // tabStyle: {
      //   minWidth: 50,
      // },
      upperCaseLabel: false,
      scrollEnabled: true,
      style: styles.tabsTheme,
      indicatorStyle: styles.indicatorStyle,
      labelStyle: styles.labelStyle,
    },
  });

  const Tab = createAppContainer(tabNavigator);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Tab />
    </SafeAreaView>
  );
};

export default PopularPage;
