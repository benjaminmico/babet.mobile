// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {Platform} from 'react-native'
import {InputContainer, InputLabel, InputValue} from './index.styles'

type Props = {
  // input label
  inputLabel: String,
  // if text input is editable or not
  editable: Boolean,
  // placeholder input
  placeholder: String,
  // on change text,
  onChangeText: () => void,
  // theme
  theme: Object,
}

const Input = ({inputLabel, editable, placeholder, onChangeText, theme}: Props) => {
  // get theme props
  const {
    colors: {
      texts: {
        input: {label: inputLabelTextColor, value: inputValueTextColor},
      },
    },
  } = theme

  // render input
  return (
    <InputContainer>
      <InputLabel color={inputLabelTextColor}>{inputLabel}</InputLabel>
      <InputValue
        onChangeText={text => onChangeText(text)}
        style={{marginTop: Platform.OS === 'android' ? 0 : 8}}
        placeholder={placeholder}
        color={inputValueTextColor}
        editable={editable}
      />
    </InputContainer>
  )
}

export default withTheme(Input)
