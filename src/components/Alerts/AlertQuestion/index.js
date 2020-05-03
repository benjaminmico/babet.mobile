// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {
  AlertQuestionButtonsContainer,
  AlertQuestionContainer,
  AlertQuestionContentContainer,
  AlertQuestionText,
} from './index.styles'
import Button from '@components/Buttons/Button'

type Props = {
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

const AlertQuestion = ({
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
    <AlertQuestionContainer>
      <AlertQuestionContentContainer backgroundColor={backgroundContainer}>
        <AlertQuestionText numberOfLines={3} color={textColor}>
          {questionLabel}
        </AlertQuestionText>
        <AlertQuestionButtonsContainer>
          {cancellableButtonLabel && (
            <Button onPress={cancellableButtonPress} label={cancellableButtonLabel} isCancellable />
          )}
          {actionButtonLabel && <Button onPress={actionButtonPress} label={actionButtonLabel} isPrimaryAction />}
        </AlertQuestionButtonsContainer>
      </AlertQuestionContentContainer>
    </AlertQuestionContainer>
  )
}

export default withTheme(AlertQuestion)
