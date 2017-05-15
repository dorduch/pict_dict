import React from 'react';
import { StyleSheet, View } from 'react-native';
import WordContainer from '../components/word-container';
import StorageService from '../services/storage.service';


export default class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.onChildClicked = this.onChildClicked.bind(this);
    this.state = {
      loading: true
    }
  }

  onChildClicked({ id }) {
    this.props.navigation.navigate('word', { id })
  }

  async componentDidMount() {
    try {
      this.root = await StorageService.getId(this.props.navigation.state.params.id);
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


  render() {
    return !this.state.loading ? (
      <View style={styles.container}><WordContainer children={this.children} onChildClicked={this.onChildClicked}
                                                    image={this.root.image}/></View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6942',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
