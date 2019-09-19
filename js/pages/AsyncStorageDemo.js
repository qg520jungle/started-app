/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-community/async-storage';
import {connect, useSelector} from 'react-redux';
import actions from '../action';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const KEY = 'save_key';
const AsyncStorageDemo = props => {
  const {navigation} = props;
  const [text, setText] = useState('');
  const [textRes, setTextRes] = useState('');

  const doSave = () => {
    // console.log(text);
    AsyncStorage.setItem(KEY, text).catch(err => {
      err && console.log(err);
    });
  };

  const doRemove = () => {
    AsyncStorage.removeItem(KEY).catch(err => {
      err && console.log(err);
    });
  };

  const doGet = () => {
    AsyncStorage.getItem(KEY)
      .then(el => {
        setTextRes(el);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>AsyncStorageDemo</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={value => {
                setText(value);
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text
              onPress={() => {
                doSave();
              }}>
              存储
            </Text>
            <Text
              onPress={() => {
                doRemove();
              }}>
              删除
            </Text>
            <Text
              onPress={() => {
                doGet();
              }}>
              获取
            </Text>
          </View>
        </View>
        <View>
          <Text>{textRes}</Text>
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
  input: {
    height: 30,
    flex: 1,
    borderColor: '#333',
    borderWidth: 1,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
)(AsyncStorageDemo);
