// @flow

import React, { Component } from 'react';
import {
  Image,
  View,
  StyleSheet
} from 'react-native';

class MainImage extends Component {
  render() {
    return (
      <View style={style.container}>
        <Image source={ this.props.data } style={{width: 200, height: 200}}/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'green'
  }
})

export default MainImage;