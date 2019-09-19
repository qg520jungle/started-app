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

import {connect, useSelector} from 'react-redux';
import actions from '../action';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const FetchDemo = props => {
  const {navigation} = props;
  const [text, setText] = useState('');
  const [textRes, setTextRes] = useState('');

  const loadData = () => {
    let url = `https://api.github.com/search/repositories?q=${text}`;
    fetch(url)
      .then(response => response.text())
      .then(responseText => {
        setTextRes(responseText);
      });
  };

  const loadData2 = () => {
    let url = `https://api.github.com/search/repositories?q=${text}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Network response was not ok.');
      })
      .then(responseText => {
        setTextRes(responseText);
      })
      .catch(e => {
        setTextRes(e.toString());
      });
  };

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>FetchDemo</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={value => {
                setText(value);
              }}
            />
          </View>
          <Button
            title="fetch"
            onPress={() => {
              loadData();
            }}
          />
          <Button
            title="fetch2"
            onPress={() => {
              loadData2();
            }}
          />
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
)(FetchDemo);
