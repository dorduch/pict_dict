import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageChildrenWrapper from '../components/image-children-wrapper';
import StorageService from '../storage.service';

export default class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.onChildClicked = this.onChildClicked.bind(this);
    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    try {
      this.root = await StorageService.init();
      console.log('root', this.root);
      this.children = (await StorageService.getMultiId(this.root.children));
      console.log('children', this.children);
      this.setState({
        loading: false
      })
    }
    catch (err) {
      console.log(err);
    }
  }


  onChildClicked({ id }) {
    this.props.navigation.navigate('word', { id })
  }

  render() {
    return !this.state.loading ? (
      <View style={styles.container}>
        <ImageChildrenWrapper onChildClicked={this.onChildClicked}
                              children={this.children}/>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14ff91',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
