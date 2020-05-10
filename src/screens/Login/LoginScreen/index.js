// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {Keyboard} from 'react-native'
import SocialButton from '@components/Buttons/SocialButton'
import InputButton from '@components/Buttons/InputButton'

import Input from '@components/Input'
import {
  LoginScreenContainer,
  LoginScreenSocialButtonsContainer,
  LoginScreenTermsText,
  LoginScreenLineSeparator,
  LoginScreenInputsContainer,
  LoginScreenInputButtonContainer,
  LoginScreenEmailSignUpText,
} from './index.styles'
import {useTranslation} from 'react-i18next'

type Props = {
  theme: Object,
}

const LoginScreen = ({theme}: Props) => {
  const {t} = useTranslation()

  // get theme props
  const {
    colors: {
      components: {background: backgroundColor},
      texts: {text: textColor},
      palette: {separator: separatorColor},
    },
  } = theme

  // login screen render
  return (
    <LoginScreenContainer activeOpacity={1.0} backgroundColor={backgroundColor} onPress={() => Keyboard.dismiss()}>
      <LoginScreenSocialButtonsContainer>
        <SocialButton type="facebook" />
        <SocialButton type="apple" />
        <SocialButton type="gmail" />
      </LoginScreenSocialButtonsContainer>
      <LoginScreenTermsText color={textColor}>{t('acceptTerms')}</LoginScreenTermsText>
      <LoginScreenLineSeparator backgroundColor={separatorColor} />
      <LoginScreenInputsContainer>
        <Input inputLabel={t('email')} placeholder="leparieur@babet.app" />
        <Input inputLabel={t('password')} placeholder="●●●●●●●●●●●●●●●" />
      </LoginScreenInputsContainer>
      <LoginScreenInputButtonContainer>
        <InputButton label={t('login')} />
      </LoginScreenInputButtonContainer>
      <LoginScreenEmailSignUpText color={textColor}>{t('signupWithEmail')}</LoginScreenEmailSignUpText>
    </LoginScreenContainer>
  )
}

export default withTheme(LoginScreen)
