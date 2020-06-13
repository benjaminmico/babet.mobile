// @flow

import {loginToFirebase} from '@api/auth/login'
import InputButton from '@components/Buttons/InputButton'
import SocialButton from '@components/Buttons/SocialButton'
import Input from '@components/Input'
import {withTheme} from '@core/themeProvider'
import {useNavigation} from '@react-navigation/native'
import actions from '@store/actions'
import React, {useContext, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {ActivityIndicator, Keyboard, KeyboardAvoidingView} from 'react-native'
import {useDispatch} from 'react-redux'
import {
  LoginScreenContainer,
  LoginScreenEmailSignUpText,
  LoginScreenInputButtonContainer,
  LoginScreenInputsContainer,
  LoginScreenLineSeparator,
  LoginScreenSocialButtonsContainer,
  LoginScreenTermsText,
} from './index.styles'
import {ToastContext} from '@components/Alerts/Toast/ToastContext'

type Props = {
  theme: Object,
}

const LoginScreen = ({theme}: Props) => {
  const {t} = useTranslation()

  const {show} = useContext(ToastContext)

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const {navigate} = useNavigation()

  // get theme props
  const {
    backgroundColor,
    colors: {
      texts: {text: textColor},
      palette: {separator: separatorColor},
    },
  } = theme

  const login = async () => {
    setLoading(true)
    // You can await here
    const {userInformations, success, error} = await loginToFirebase(
      'dev+test@babet.app',
      'ewG3yp8eK7A7Lt4H8bcMRMNx3yk72WkzK8rLyM',
    )
    // const {userInformations, success, error} = await loginToFirebase('benjamin.mico@gmail.com', 'Azertyuiop')

    // if firebase returned success dispatch user informations on store & navigate to
    if (success) {
      const {login} = actions
      await dispatch(login(userInformations))
      await navigate('TabNavigator')
      setLoading(false)
    } else {
      if (error === 'passwordIncorrect')
        show({
          title: t('passwordIncorrectTitle'),
          message: t('passwordIncorrectDescription'),
          type: 'error',
          error,
        })
      else if (error === 'emailIncorrect')
        show({
          title: t('emailIncorrectTitle'),
          message: t('emailIncorrectDescription'),
          type: 'error',
          error,
        })
      else if (error === 'tooManyRequests')
        show({
          title: t('tooManyRequestsTitle'),
          message: t('tooManyRequestsDescription'),
          type: 'error',
          error,
        })
      else
        show({
          title: t('unknownErrorTitle'),
          message: t('unknownErrorDescription'),
          type: 'error',
          error,
        })
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" style={{flex: 1}}>
      <LoginScreenContainer activeOpacity={1.0} backgroundColor={backgroundColor} onPress={() => Keyboard.dismiss()}>
        <LoginScreenSocialButtonsContainer>
          <SocialButton type="facebook" />
          <SocialButton type="apple" />
          <SocialButton type="gmail" />
        </LoginScreenSocialButtonsContainer>
        <LoginScreenTermsText color={textColor}>{t('acceptTerms')}</LoginScreenTermsText>
        <LoginScreenLineSeparator backgroundColor={separatorColor} />
        <LoginScreenInputsContainer>
          <Input inputLabel={t('email')} onChangeText={setEmail} placeholder="leparieur@babet.app" />
          <Input inputLabel={t('password')} onChangeText={setPassword} placeholder="●●●●●●●●●●●●●●●" />
        </LoginScreenInputsContainer>
        <LoginScreenInputButtonContainer>
          {loading ? <ActivityIndicator /> : <InputButton label={t('login')} onPress={() => login(email, password)} />}
          <LoginScreenEmailSignUpText color={textColor}>{t('signupWithEmail')}</LoginScreenEmailSignUpText>
        </LoginScreenInputButtonContainer>
      </LoginScreenContainer>
    </KeyboardAvoidingView>
  )
}

export default withTheme(LoginScreen)
