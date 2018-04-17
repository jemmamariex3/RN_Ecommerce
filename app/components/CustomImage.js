/**
 * Purpose of sample: learn scrollview architecture with multiple components
 *
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
import ImageOverlay from './ImageOverlay'
export default class CustomImage extends Component<Props> {
  render() {
    return (
      <Image
        source = {this.props.imageSource} //pass source from parent component
        style ={styles.image}
      />
    );
  }
}

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',

  }
});
