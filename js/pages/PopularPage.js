/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '../navigator/NavigationUtil';

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

const PopularTab = props => {
  const {tabLabel, navigation} = props;
  return (
    <View>
      <Text>{tabLabel}</Text>
      <Text
        onPress={() => {
          NavigationUtil.goPage(
            {
              navigation: props.navigation,
            },
            'DetailPage',
          );
        }}>
        跳转到详情页
      </Text>
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
