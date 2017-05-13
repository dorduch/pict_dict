import React from 'react';
import MainView from './views/main.view';
import WordView from './views/word.view';
import { StackNavigator } from 'react-navigation';


const Nav = StackNavigator({
  main: {
    screen: MainView,
  },
  word: {
    screen: WordView
  }
}, {
  initialRouteName: 'main'
});

export default () => <Nav/>