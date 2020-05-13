// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {ButtonContainer, ButtonText} from './index.styles'
import Icon from '@components/Icon'

type Props = {
  // button label
  label: String,
  // check if action is primary or not (consequence on background color)
  isPrimaryAction: Boolean,
  // check if it's a cancellable button
  isCancellable: Boolean,
  // black color label
  black: Boolean,
  // theme
  theme: Object,
}

const Button = ({isPrimaryAction, isCancellable, label, black, theme, ...props}: Props) => {
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
      palette: {black: blackColor},
    },
  } = theme

  /**
   * render button
   * text can only be de displayed on one line
   * */

  return (
    <ButtonContainer {...props} backgroundColor={isPrimaryAction ? backgroundPrimaryAction : backgroundAction}>
      <Icon style={{marginRight: 3}} size={18} label="ticket" />
      <ButtonText
        color={
          black
            ? blackColor
            : isCancellable
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
