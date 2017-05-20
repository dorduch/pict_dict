// @flow
import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Content } from 'native-base';
import ImageChild from './image-child';
import type { Word } from '../types/types';

const styles = {
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    flex: 1,
    alignItems: 'center'
  }
};


class ImageChildrenWrapper extends Component {
  props: {
    children: Array<Word>,
    onChildClicked: (word: Word) => void
  }

  render() {
    const children = this.props.children.map((child, index) => (
      <ImageChild onClick={this.props.onChildClicked} image={child.image} key={index} name={child.name} id={child.id}/>
    ));
    return (
      <Content>
        <View style={styles.container}>
          {children}
        </View>
      </Content>
    );
  }
}

export default ImageChildrenWrapper;