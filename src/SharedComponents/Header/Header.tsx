import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './Header.styles';

export default function CustomHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Utiles/images/Menu.png')}
        style={styles.image}
      />

      <Text style={styles.mainTitle}>Frost</Text>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../Utiles/images/Search.png')}
          style={{...styles.image, marginEnd: 20}}
        />
        <Image
          source={require('../../Utiles/images/shoppingbag.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
}
