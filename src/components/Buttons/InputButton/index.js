// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {InputButtonContainer, InputButtonText} from './index.styles'

type Props = {
  // input button label
  label: String,
  // on press input button
  onPress: () => void,
  // theme
  theme: Object,
}

const InputButton = ({label, onPress, theme}: Props) => {
  // get theme props
  const {
    colors: {
      components: {backgroundInputButton},
      texts: {
        buttons: {isPrimaryAction: isPrimaryActionInputButtonTextColor},
      },
    },
  } = theme

  /**
   * render input button
   * text can only be de displayed on one line
   * */

  return (
    <InputButtonContainer disabled={!onPress} onPress={onPress} backgroundColor={backgroundInputButton}>
      <InputButtonText numberOfLines={1} color={isPrimaryActionInputButtonTextColor}>
        {label.toUpperCase()}
      </InputButtonText>
    </InputButtonContainer>
  )
}

export default withTheme(InputButton)
