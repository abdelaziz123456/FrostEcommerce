import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './SuccessSignup.styles';
import {StackActions, useNavigation} from '@react-navigation/native';

export default function SuccessSignup() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email Created Successfully</Text>

      <Image
        source={require('../../Utiles/images/success.png')}
        style={styles.image}
      />
      <Text
        onPress={() => navigation.dispatch(StackActions.replace('login'))}
        style={styles.subtitle}>
        Login Here
      </Text>
    </View>
  );
}
