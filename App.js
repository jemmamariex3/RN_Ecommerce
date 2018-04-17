/**
 * Purpose of sample: learn scrollview architecture with multiple components
 *
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Header from './app/components/Header.js'
import Banner from './app/components/Banner.js'
import ContentContainer from './app/components/ContentContainer.js'
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView style = {styles.container}>
        <Header/>
        <Banner/>
        <ContentContainer/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  }
});
