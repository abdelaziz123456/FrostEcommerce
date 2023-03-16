/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import ProvidersWrapper from './src/Providers/ProvidersWrapper';
import AppContent from './src/screens/AppContent';

function App(): JSX.Element {
  return (
    <ProvidersWrapper>
      <AppContent />
    </ProvidersWrapper>
  );
}

export default App;
