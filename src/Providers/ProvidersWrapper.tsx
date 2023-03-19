import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {FrostProvider} from '../store/frost-context';

export default function ProvidersWrapper(props: any) {
  return (
    <FrostProvider>
      <NavigationContainer>{props.children}</NavigationContainer>
    </FrostProvider>
  );
}
