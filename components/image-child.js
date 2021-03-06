// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 2
  }
});

class ImageChild extends Component {
  props: {
    image: number,
    name: string,
    onClick: Function
  }
  
  render() {
    console.log("in image child: ", this.props);
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {this.props.onClick(this.props)}}>
          <Image source={ this.props.image } on style={{ width: 100, height: 100 }}>
            <Text>{this.props.name}</Text>
          </Image>
        </TouchableHighlight>
      </View>
    )
  }
}

export default ImageChild;