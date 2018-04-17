/**
 * Purpose of sample: learn scrollview architecture with multiple components
 *ContentContainer passes down a prop to its child (custom image)
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import CustomImage from './CustomImage'

export default class ContentContainer extends Component<Props> {
  render() {
    return (
      <View style ={styles.contentContainer}>
        <View style = {styles.col2}>
          <CustomImage imageSource ={require('../img/photo1.jpeg')}/>
        </View>
        <View style = {styles.col1}>
        <CustomImage imageSource ={require('../img/photo2.jpg')}/>
        </View>
        <View style = {styles.contentBanner}>
        <CustomImage imageSource ={require('../img/photo3.jpg')}/>
        </View>
        <View style = {styles.col2}>
          <CustomImage imageSource ={require('../img/photo4.jpeg')}/>
        </View>
        <View style = {styles.col1}>
        <CustomImage imageSource ={require('../img/photo5.jpeg')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer:{
    flex:1,
    flexDirection: 'row', //align item along x axis
    flexWrap:'wrap', //elements can span multiple lines
    padding: 5,
  },
  col2:{ //much bigger than col1
    flex:2,
    padding: 5,
  },
  col1:{
    flex:2,
    padding: 5,
  },
  contentBanner:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }
});
