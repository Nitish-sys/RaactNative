import React from 'react';
import {View, Text, StyleSheet } from 'react-native'
import {colors} from '../Utils/colors';
import { fontSizes, spacing} from '../Utils/spacing';
import { TextInput} from 'react-native-paper';
import { RoundedButton} from '../components/RoundedButton';

export const Focus = ( {addSubject}) => {
  const [subject, setSubject] = React.useState(null);
  return (
      <View style = {styles.containter}>
        <View style = {styles.inputContainer}>
            <TextInput style = { styles.textInput} onChangeText = { setSubject } label = "What would you like to focus on?"/>
            <View style = {styles.button}>
                <RoundedButton  title = "+" size = {50}  onPress= { () => addSubject(subject) } />
            </View>
        </View>
      </View> 
  );
};

const styles = StyleSheet.create({
  containter : {  
  },
  button : {
    justifyContent: 'center'
  },
  textInput: {
      flex: 1,
      marginRight: spacing.sm
  },
  inputContainer : {    
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  }
})