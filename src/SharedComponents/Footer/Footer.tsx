import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './Footer.styles';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <Image
          source={require('../../Utiles/images/Twitter.png')}
          style={styles.icon}
        />
        <Image
          source={require('../../Utiles/images/Instagram.png')}
          style={styles.icon}
        />
        <Image
          source={require('../../Utiles/images/YouTube.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../Utiles/images/10.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.linkText}>support@openui.design</Text>
      <Text style={styles.linkText}>+60 825 876</Text>
      <Text style={styles.linkText}>08:00 - 22:00 - Everyday</Text>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../Utiles/images/10.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.linksContainer}>
        <Text style={styles.linkText}>About</Text>
        <Text style={styles.linkText}>Contact</Text>
        <Text style={styles.linkText}>Blog</Text>
      </View>
      <View style={styles.lowerFooter}>
        <Text style={styles.lowerText}>
          Copyright© OpenUI All Rights Reserved.
        </Text>
      </View>
    </View>
  );
}
