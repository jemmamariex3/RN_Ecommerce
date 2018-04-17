/**
 * Purpose of sample: learn scrollview architecture with multiple components
 *
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground
} from 'react-native';

import ImageOverlay from './ImageOverlay';
export default class Banner extends Component<Props> {
  render() {
    return (
      <ImageBackground
        source = {require('../img/photo5.jpeg')}
        style = {styles.banner}>
            <ImageOverlay 
              header ='- React Native -'
              paragraph ='- e-commerce -'/>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  banner:{
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',

  }
});
