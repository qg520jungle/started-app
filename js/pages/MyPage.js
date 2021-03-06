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
  Button,
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector, useDispatch} from 'react-redux';
import actions from '../action';

const MyPage = props => {
  const {navigation} = props;
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>MyPage</Text>
          <Button
            title="改变主题颜色"
            onPress={() => {
              dispatch(actions.onThemeChange('orange'));
              // navigation.setParams({
              //   theme: {
              //     tintColor: 'blue',
              //     updateTime: new Date().getTime(),
              //   },
              // });
            }}
          />
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
          <Text
            onPress={() => {
              NavigationUtil.goPage(
                {
                  navigation: props.navigation,
                },
                'FetchDemo',
              );
            }}>
            跳转到 Fetch 使用
          </Text>
          <Text
            onPress={() => {
              NavigationUtil.goPage(
                {
                  navigation: props.navigation,
                },
                'AsyncStorageDemo',
              );
            }}>
            跳转到 AsyncStorageDemo 使用
          </Text>
          <Text
            onPress={() => {
              NavigationUtil.goPage(
                {
                  navigation: props.navigation,
                },
                'DataStoreDemo',
              );
            }}>
            跳转到 DataStoreDemo 使用
          </Text>
        </View>
      </SafeAreaView>
    </Fragment>
  );
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

export default MyPage;
