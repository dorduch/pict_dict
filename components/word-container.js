// @flow
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainImage from './main-image';
import ImageChildrenWrapper from './image-children-wrapper';
import type {Word} from '../types/types';

import {AppRegistry, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // height: 20
  },
});

class WordContainer extends Component {
  props: {
    children: Array<Word>,
    onChildClicked:  (word: Word) => void,
    image: number | null,
    showImage: boolean,
  };
  static defaultProps: {
    showImage: true | false,
  };
  render () {
    console.log(this.props);
    return (
      <View style={styles.container}>
        {this.props.showImage && <MainImage data={this.props.image} />}
        <ImageChildrenWrapper
          onChildClicked={this.props.onChildClicked}
          children={this.props.children}
        />
      </View>
    );
  }
}

export default WordContainer;
