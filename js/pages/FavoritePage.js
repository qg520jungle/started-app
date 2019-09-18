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

import {connect, useSelector} from 'react-redux';
import actions from '../action';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const FavoritePage = props => {
  const {navigation} = props;
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>FavoritePage</Text>
          <Button
            title="改变主题颜色"
            onPress={() => {
              props.onThemeChange('red');

              // navigation.setParams({
              //   theme: {
              //     tintColor: 'green',
              //     updateTime: new Date().getTime(),
              //   },
              // });
            }}
          />
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

// export default FavoritePage;
// state 中的 theme 关联到 props 里的 theme
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritePage);
