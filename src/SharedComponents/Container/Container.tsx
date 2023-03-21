import {View, ScrollView} from 'react-native';
import React from 'react';
import {Header} from '..';
import Footer from '../Footer/Footer';
import {styles} from './Container.styles';

export default function Container(props: any) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        {props.children}
        <Footer />
      </View>
    </ScrollView>
  );
}
