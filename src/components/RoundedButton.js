import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {colors} from '../Utils/colors';
import { TextInput} from 'react-native-paper';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {  
  return (
      <TouchableOpacity style = {[styles(size).radius, style]} onPress = {props.onPress}>
            <Text style = {[styles(size).text, textStyle]}>{props.title}</Text>
      </TouchableOpacity>
  );
};

const styles = (size) => ({
    radius: {
          borderRadius: size /2,
          width: size,
          height: size,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: colors.white,
          borderWidth: 2
    },
    text : {
      color: colors.white,
      fontSize: size /3
    }
});