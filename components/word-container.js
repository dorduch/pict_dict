import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainImage from './main-image';
import ImageChildrenWrapper from './image-children-wrapper'
// import { Container, Content } from 'native-base';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
    // height: 20
  }
});


class WordContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <MainImage data={this.props.image}/>
        <ImageChildrenWrapper onChildClicked={this.props.onChildClicked} children={this.props.children}/>
      </View>
    )
  }
}



WordContainer.propTypes = {
  children: PropTypes.array,
  onChildClicked: PropTypes.func
};

export default WordContainer;