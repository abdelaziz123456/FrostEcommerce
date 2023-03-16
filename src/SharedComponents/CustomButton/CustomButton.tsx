import {Pressable, Button, View} from 'react-native';
import React from 'react';
import {styles} from './CustomButton.styles';
import GlobalConstants from '../../Utiles/Constants';
type CustomButtonTypes = {
  onPress: Function;
  buttonTitle: string;
  style?: object;
  buttonStyle: string;
};
export default function CustomButton({
  onPress,
  buttonTitle,
  style,
  buttonStyle,
}: CustomButtonTypes) {
  return (
    <View style={styles.mainContainer}>
      <Pressable
        onPress={e => onPress(e)}
        style={{
          ...(buttonStyle !== 'primary'
            ? styles.primayContainer
            : styles.outlineContainer),
          ...style,
        }}>
        <Button
          title={`${buttonTitle}`}
          color={GlobalConstants.colors.mainThemeColor}
        />
      </Pressable>
    </View>
  );
}
