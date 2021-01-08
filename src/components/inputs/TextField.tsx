import React from 'react';
import { StyleSheet, TextInput} from 'react-native';

interface Props {
  styles?: {}
  onChange(text: string): void
  value: string
}

const TextField = (props: Props): React.ReactElement => {
  const { styles, onChange, value } = props;

  return (
    <TextInput 
      style={{...design.input, ...styles}}
      onChangeText={(text: string) => onChange(text)}
      value={value}
      placeholder='Email'
      placeholderTextColor='rgba(255, 255, 255, 0.6)'
      autoCapitalize='none'
      autoCompleteType='email'
      caretHidden={false}
      clearButtonMode='while-editing'
      keyboardAppearance='dark'
      keyboardType='email-address'
      textContentType='emailAddress'
    />
  )
}

const design = StyleSheet.create({
  input: {
    height: 60,
    width: '100%',
    borderBottomColor: 'rgb(44,44,46)',
    borderBottomWidth: 1,
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SFProTextRegular'
  }
});

export default TextField;