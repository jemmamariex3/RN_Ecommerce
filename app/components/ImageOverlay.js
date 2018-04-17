/**
 * Purpose of sample: learn scrollview architecture with multiple components
 *This file deals with dynamic changes so that text can be passed to and from the parent
 * React Native 0.5 or newer, please notice React Native 0.5 Release Notes:
BREAKING: Removed support of nested content inside <Image> This means you will get an error when following this tutorial, to fix the error:
Replace <Image /> with <ImageBackground />  if you are using children inside the Image Component.﻿
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ImageOverlay extends Component<Props> {
  render() {

    let header = this.props.header ? //if header is specified in the props return this Text element
      <Text style ={styles.overlayHeader}>
        {this.props.header}
      </Text>
      : null; //if not specified, null

      let paragraph = this.props.paragraph ? //if paragraph is specified in the props return this text element
      <Text style ={styles.overlayText}>
        {this.props.paragraph}
      </Text>

      :null; //if not specified, null

      //if header is set it will be displayed below in the following:
    return (
      <View> 
        {header}
        {paragraph}
      </View>
    );

  }
}

const styles = StyleSheet.create({
  overlayHeader:{
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1, //adroid shadow

    alignSelf: 'center',
    fontSize: 28,
    color: '#292929',
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.6)',
    fontWeight:'bold',
  },
  overlayText:{
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 1, //adroid shadow

    alignSelf: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#292929',
    textAlign: 'center',
    padding: 8,
    marginTop: 8,
    backgroundColor: 'rgba(255,255,255,0.6)',
  }
});
