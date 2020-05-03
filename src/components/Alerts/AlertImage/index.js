// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {
  AlertImageButtonsContainer,
  AlertImageContainer,
  AlertImageItem,
  AlertImageContentContainer,
  AlertImageText,
} from './index.styles'
import Button from '@components/Buttons/Button'

type Props = {
  // image local link
  imageLink: String,
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
  // theme
  theme: Object,
}

const AlertImage = ({
  imageLink,
  questionLabel,
  cancellableButtonLabel,
  cancellableButtonPress,
  actionButtonLabel,
  actionButtonPress,
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
    <AlertImageContainer>
      <AlertImageContentContainer backgroundColor={backgroundContainer}>
        <AlertImageItem source={{uri: imageLink}} />
        <AlertImageText numberOfLines={3} color={textColor}>
          {questionLabel}
        </AlertImageText>
        <AlertImageButtonsContainer>
          {cancellableButtonLabel && (
            <Button onPress={cancellableButtonPress} label={cancellableButtonLabel} isCancellable />
          )}
          {actionButtonLabel && <Button onPress={actionButtonPress} label={actionButtonLabel} isPrimaryAction />}
        </AlertImageButtonsContainer>
      </AlertImageContentContainer>
    </AlertImageContainer>
  )
}

export default withTheme(AlertImage)
