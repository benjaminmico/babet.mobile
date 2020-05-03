// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {
  AlertPendingActivityIndicator,
  AlertPendingContainer,
  AlertPendingContentContainer,
  AlertPendingText,
} from './index.styles'

type Props = {
  // filter label
  label: String,
  // theme
  theme: Object,
}

const AlertPending = ({label, theme}: Props) => {
  // get theme props
  const {
    colors: {
      components: {backgroundContainer},
      texts: {text: textColor},
    },
  } = theme

  /**
   * render alert pending with activity indicator && text
   * text can only be de displayed on three lines
   * */
  return (
    <AlertPendingContainer>
      <AlertPendingContentContainer backgroundColor={backgroundContainer}>
        <AlertPendingActivityIndicator size="large" />
        <AlertPendingText numberOfLines={3} color={textColor}>
          {label}
        </AlertPendingText>
      </AlertPendingContentContainer>
    </AlertPendingContainer>
  )
}

export default withTheme(AlertPending)
