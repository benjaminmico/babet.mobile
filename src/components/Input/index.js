// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {InputContainer, InputLabel, InputValue} from './index.styles'

type Props = {
  // input label
  inputLabel: String,
  // theme
  theme: Object,
}

const Input = ({inputLabel, theme}: Props) => {
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
      <InputValue color={inputValueTextColor} />
    </InputContainer>
  )
}

export default withTheme(Input)
