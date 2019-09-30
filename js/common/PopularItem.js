/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useEffect, useCallback, useMemo} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch, connect} from 'react-redux';
import actions from '../action/index';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '../navigator/NavigationUtil';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// let url = `https://api.github.com/search/repositories?q=${text}`;
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_COLOR = 'red';

const styles = StyleSheet.create({
  cell_container: {
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginVertical: 3,
    borderColor: '#ddd',
    borderWidth: 0.5,
    borderRadius: 2,
    shadowColor: 'gray',
    // shadowOffset: 0.4,
    shadowRadius: 1,
    elevation: 2,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginBottom: 2,
    color: '#212121',
  },
  description: {
    fontSize: 14,
    marginBottom: 2,
    color: '#757575',
  },
});

const FavoriteButton = props => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{padding: 6}}
      underlayColor={'transparent'}>
      <FontAwesome name={'star-o'} size={26} style={{color: 'red'}} />
    </TouchableOpacity>
  );
};

const PopularItem = props => {
  const {item, onSelect} = props;
  // const
  // return (
  //   <View>
  //     <Text>123</Text>
  //   </View>
  // );;
  return useMemo(() => {
    console.log(item);
    if (!item || !item.owner) {
      console.log(item);
      console.log(item.owner);
      return null;
    }
    return (
      <TouchableOpacity onPress={onSelect}>
        <View style={styles.cell_container}>
          <Text style={styles.title}>{item.full_name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.row}>
            <View style={styles.row}>
              <Text>Author:</Text>
              <Image
                style={{height: 22, width: 22}}
                source={{uri: item.owner.avatar_url}}
              />
            </View>
            <View style={styles.row}>
              <Text>Stars:</Text>
              <Text>{item.stargazers_count}</Text>
            </View>
            <FavoriteButton />
          </View>
        </View>
      </TouchableOpacity>
    );
  }, [item, onSelect]);
};

export default PopularItem;
