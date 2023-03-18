import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Login, SignUp} from './index';

function UnAuthNavigator() {
  const UnAuthStack = createNativeStackNavigator();
  return (
    <UnAuthStack.Navigator screenOptions={{headerShown: false}}>
      <UnAuthStack.Screen name="login" component={Login} />
      <UnAuthStack.Screen name="Signup" component={SignUp} />
    </UnAuthStack.Navigator>
  );
}

function AuthNavigator() {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="home" component={Home} />
    </AuthStack.Navigator>
  );
}

export default function AppContent() {
  const [auth, setAuth] = useState(false);
  return !auth ? <UnAuthNavigator /> : <AuthNavigator />;
}
