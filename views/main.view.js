//@flow
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import WordContainer from '../components/word-container';
import StorageService from '../services/storage.service';
import type {Word} from '../types/types';
import LoadingSpinner from '../components/loading-spinner';

export default class MainView extends Component {
  onChildClicked: Function;
  state: {
    root: Word,
    children: Array<Word>,
    loading: boolean,
  };
  props: {
    id: number | null,
    navigation: Object,
  };

  constructor (props: Object) {
    super (props);
    this.onChildClicked = this.onChildClicked.bind (this);
    this.state = {
      loading: true,
      root: {
        name: '',
        children: [],
        id: -1,
        image: -1,
      },
      children: [],
    };
  }

  componentDidMount () {
    const navParams = this.props.navigation.state.params;
    const initFunction = navParams ? StorageService.getId : StorageService.init;
    initFunction (navParams && navParams.id)
      .then ((res: Word) => {
        this.setState ({root: res});
        console.log ('root', this.state.root);
        return StorageService.getMultiId (res.children);
      })
      .then ((children: Array<Word>) => {
        this.setState ({children: children});
        console.log ('children', this.state.children);
        this.setState ({loading: false});
      });
  }

  onChildClicked({id}: Word) {
    this.props.navigation.navigate ('main', {id});
  }

  render () {
    return !this.state.loading
      ? <View style={styles.container}>
          <WordContainer
            image={this.state.root.image}
            showImage={!!this.state.root.image}
            onChildClicked={this.onChildClicked}
            children={this.state.children}
          />
        </View>
      : <LoadingSpinner />;
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#14ff91',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
