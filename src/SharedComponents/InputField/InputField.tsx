import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './InputField.styles';
import {inputFieldTypes} from '../../Utiles/types';

export default function InputField({
  onChange,
  placeholder,
  style,
  labelText,
  value,
  name,
  password,
}: inputFieldTypes) {
  return (
    <View style={styles.container}>
      <Text style={styles.lablelText}>{labelText}</Text>
      <TextInput
        secureTextEntry={password ? true : false}
        style={{...styles.inputField, ...style}}
        placeholder={placeholder}
        onChangeText={(value: any) => onChange(name, value)}
        value={value}
        selectionColor={'white'}
      />
    </View>
  );
}
