import {Pressable, Button, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './CustomButton.styles';
import GlobalConstants from '../../Utiles/Constants';
type CustomButtonTypes = {
  onPress: Function;
  buttonTitle: string;
  style?: object;
  buttonStyle: string;
  loading?: boolean;
};
export default function CustomButton({
  onPress,
  buttonTitle,
  style,
  buttonStyle,
  loading,
}: CustomButtonTypes) {
  return (
    <View style={styles.mainContainer}>
      <Pressable
        style={{
          ...(buttonStyle == 'primary'
            ? styles.primayContainer
            : styles.outlineContainer),
          ...style,
        }}>
        {loading ? (
          <ActivityIndicator size={'large'} color={'white'} />
        ) : (
          <Button
            onPress={() => onPress()}
            title={`${buttonTitle}`}
            color={GlobalConstants.colors.mainThemeColor}
          />
        )}
      </Pressable>
    </View>
  );
}
