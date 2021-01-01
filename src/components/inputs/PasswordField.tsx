import React from 'react';
import { StyleSheet, TextInput} from 'react-native';

interface Props {
  styles?: {}
  onChange(text: string): void
  value: string
}

const PasswordField = (props: Props): React.ReactElement => {
  const { styles, onChange, value } = props;

  return (
    <TextInput 
      style={{...design.input, ...styles}}
      onChangeText={(text: string) => onChange(text)}
      value={value}
      placeholder='Password'
      placeholderTextColor='rgba(255, 255, 255, 0.6)'
      autoCapitalize='none'
      autoCompleteType='password'
      caretHidden={false}
      clearButtonMode='while-editing'
      keyboardAppearance='dark'
      secureTextEntry={true}
      textContentType='password'
    />
  )
}

const design = StyleSheet.create({
  input: {
    height: 60,
    width: '100%',
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 9,
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SFProTextRegular'
  }
});

export default PasswordField;