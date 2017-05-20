import React from 'react';
import MainView from './views/main.view';
import { StackNavigator } from 'react-navigation';


const Nav = StackNavigator({
  main: {
    screen: MainView,
  },
}, {
  initialRouteName: 'main'
});

export default () => <Nav/>