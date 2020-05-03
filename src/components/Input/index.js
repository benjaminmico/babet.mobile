// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {InputContainer, InputLabel, InputValue} from './index.styles'

type Props = {
  // input label
  inputLabel: String,
  // if text input is editable or not
  editable: Boolean,
  // theme
  theme: Object,
}

const Input = ({inputLabel, editable, theme}: Props) => {
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
      <InputValue color={inputValueTextColor} editable={editable} />
    </InputContainer>
  )
}

export default withTheme(Input)
