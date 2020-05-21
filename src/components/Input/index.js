// @flow

import {withTheme} from '@core/themeProvider'
import React, {useRef} from 'react'
import {Platform} from 'react-native'
import {InputContainer, InputLabel, InputValue} from './index.styles'

type Props = {
  // input label
  inputLabel: String,
  // if text input is editable or not
  editable: Boolean,
  // placeholder input
  placeholder: String,
  // value input
  value: String,
  // on change text,
  onChangeText: () => void,
  // theme
  theme: Object,
}

const Input = ({inputLabel, editable, placeholder, value, onChangeText, theme}: Props) => {
  // get theme props
  const {
    key: keyTheme,
    colors: {
      texts: {
        input: {label: inputLabelTextColor, value: inputValueTextColor},
      },
    },
  } = theme

  const inputRef = useRef(null)
  // render input
  return (
    <InputContainer activeOpacity={1.0} onPress={() => inputRef.current.focus()} theme={keyTheme}>
      <InputLabel color={inputLabelTextColor}>{inputLabel}</InputLabel>
      <InputValue
        ref={inputRef}
        onChangeText={text => onChangeText(text)}
        style={{marginTop: Platform.OS === 'android' ? 0 : 8}}
        placeholder={placeholder}
        color={inputValueTextColor}
        editable={editable}
        value={value}
      />
    </InputContainer>
  )
}

export default withTheme(Input)
