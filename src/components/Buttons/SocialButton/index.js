// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {SocialButtonContainer, SocialButtonText} from './index.styles'
import Icon from '@components/Icon'

type Props = {
  // social button type
  type: String,
  // theme
  theme: Object,
}

const SocialButton = ({type, theme}: Props) => {
  // get theme props
  const {
    colors: {
      texts: {
        reverseText: labelTextColor,
        buttons: {
          social: {facebook: facebookBackgroundColor, apple: appleBackgroundColor, gmail: gmailBackgroundColor},
        },
      },
    },
  } = theme

  /**
   * get background color of social type
   * @param {String} type  social type
   * @returns Background color
   */
  const getBackgroundColor = type => {
    switch (type) {
      case 'facebook':
        return facebookBackgroundColor
      case 'apple':
        return appleBackgroundColor
      case 'gmail':
        return gmailBackgroundColor
      default:
        return null
    }
  }

  /**
   * get label of social type
   * @param {String} type  label type
   * @returns label social type
   */
  const getLabel = type => {
    switch (type) {
      case 'facebook':
        return 'Sign in with Facebook'
      case 'apple':
        return 'Sign in with Apple'
      case 'gmail':
        return 'Sign in with Gmail'
      default:
        return null
    }
  }

  /**
   * render input button
   * text can only be de displayed on one line
   * */

  return (
    <SocialButtonContainer
      // disabled={!onPress}
      onPress={() => console.log('social')}
      backgroundColor={getBackgroundColor(type) || 'white'}
    >
      <Icon style={{position: 'absolute', left: 13}} size={22} label={type} />
      <SocialButtonText numberOfLines={1} color={labelTextColor}>
        {getLabel(type).toUpperCase()}
      </SocialButtonText>
    </SocialButtonContainer>
  )
}

export default withTheme(SocialButton)
