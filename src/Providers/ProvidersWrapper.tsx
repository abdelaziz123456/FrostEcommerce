import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

export default function ProvidersWrapper(props: any) {
  return <NavigationContainer>{props.children}</NavigationContainer>;
}
