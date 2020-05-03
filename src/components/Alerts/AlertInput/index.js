// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {
  AlertInputButtonsContainer,
  AlertInputContainer,
  AlertInputContentContainer,
  AlertInputText,
} from './index.styles'
import Button from '@components/Buttons/Button'

type Props = {
  // image local link
  // question label
  questionLabel: String,
  // cancellable button label
  cancellableButtonLabel: String,
  // cancellable button action
  cancellableButtonPress: () => void,
  // action button label
  actionButtonLabel: String,
  // action button action
  actionButtonPress: () => void,
  // input component
  children: Node,
  // theme
  theme: Object,
}

const AlertInput = ({
  questionLabel,
  cancellableButtonLabel,
  cancellableButtonPress,
  actionButtonLabel,
  actionButtonPress,
  children,
  theme,
}: Props) => {
  // get theme props
  const {
    colors: {
      components: {backgroundContainer},
      texts: {text: textColor},
    },
  } = theme

  /**
   * render alert question with cancellable && action buttons
   * buttons can only be rendered if concerned labels are passed by props
   * */
  return (
    <AlertInputContainer>
      <AlertInputContentContainer backgroundColor={backgroundContainer}>
        {children}
        <AlertInputText numberOfLines={3} color={textColor}>
          {questionLabel}
        </AlertInputText>
        <AlertInputButtonsContainer>
          {cancellableButtonLabel && (
            <Button onPress={cancellableButtonPress} label={cancellableButtonLabel} isCancellable />
          )}
          {actionButtonLabel && <Button onPress={actionButtonPress} label={actionButtonLabel} isPrimaryAction />}
        </AlertInputButtonsContainer>
      </AlertInputContentContainer>
    </AlertInputContainer>
  )
}

export default withTheme(AlertInput)
