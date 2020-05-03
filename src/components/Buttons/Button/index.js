// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {ButtonContainer, ButtonText} from './index.styles'

type Props = {
  // button label
  label: String,
  // check if action is primary or not (consequence on background color)
  isPrimaryAction: Boolean,
  // check if it's a cancellable button
  isCancellable: Boolean,
  // theme
  theme: Object,
}

const Button = ({isPrimaryAction, isCancellable, label, theme}: Props) => {
  // get theme props
  const {
    colors: {
      components: {backgroundAction, backgroundPrimaryAction},
      texts: {
        buttons: {
          actions: actionsButtonTextColor,
          cancellable: cancellableButtonTextColor,
          isPrimaryAction: isPrimaryActionButtonTextColor,
        },
      },
    },
  } = theme

  /**
   * render button
   * text can only be de displayed on one lines
   * */

  return (
    <ButtonContainer backgroundColor={isPrimaryAction ? backgroundPrimaryAction : backgroundAction}>
      <ButtonText
        color={
          isCancellable
            ? cancellableButtonTextColor
            : isPrimaryAction
            ? isPrimaryActionButtonTextColor
            : actionsButtonTextColor
        }
      >
        {label}
      </ButtonText>
    </ButtonContainer>
  )
}

export default withTheme(Button)
