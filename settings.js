import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as theme from './theme';
import { Image,StyleSheet } from 'react-native';

export default {
  'light': {
    name: 'Soil Report',
    icon: ({size, color, ...props}) => (
      <Image
      source={require('./Images/onboarding3.png')}
      style={{ width: 40, height: 40 }}
     
        {...props}
      />
    ),
  },
  'ac': {
    name: 'Wether',
    icon: ({size, color, ...props}) => (
      <Image
      source={require('./Images/wether.png')}
      style={{ width: 40, height: 40 }}
        {...props}
      />
    ),
  },
  'temperature': {
    name: 'Temperature',
    icon: ({size, color, ...props}) => (
      <Image
      source={require('./Images/temp.png')}
      style={{ width: 40, height: 40 }}
        {...props}
      />
    ),
  },
  'fan': {
    name: 'Recomadation',
    icon: ({size, color, ...props}) => (
      <Image
      source={require('./Images/recom.png')}
      style={{ width: 40, height: 40 }}
        {...props}
      />
    ),
  },
  'wi-fi': {
    name: 'Seeds',
    icon: ({size, color, ...props}) => (
      <Image
      source={require('./Images/seeds.png')}
      style={{ width: 40, height: 40 }}
        {...props}
      />
    ),
  },
  'electricity': {
    name: 'Histrory',
    icon: ({size, color, ...props}) => (
      <Image
      source={require('./Images/history.png')}
      style={{ width: 40, height: 40 }}
        {...props}
      />
    ),
  },
};
