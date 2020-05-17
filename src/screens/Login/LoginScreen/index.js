// @flow

import {loginToFirebase} from '@api/auth/login'
import InputButton from '@components/Buttons/InputButton'
import SocialButton from '@components/Buttons/SocialButton'
import Input from '@components/Input'
import {withTheme} from '@core/themeProvider'
import {useNavigation} from '@react-navigation/native'
import actions from '@store/actions'
import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {ActivityIndicator, Keyboard, KeyboardAvoidingView} from 'react-native'
import {useDispatch} from 'react-redux'
import {
  LoginScreenContainer,
  LoginScreenEmailErrorText,
  LoginScreenEmailSignUpText,
  LoginScreenInputButtonContainer,
  LoginScreenInputsContainer,
  LoginScreenLineSeparator,
  LoginScreenSocialButtonsContainer,
  LoginScreenTermsText,
} from './index.styles'

type Props = {
  theme: Object,
}

const LoginScreen = ({theme}: Props) => {
  const {t} = useTranslation()

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const dispatch = useDispatch()

  const {navigate} = useNavigation()

  // get theme props
  const {
    backgroundColor,
    colors: {
      texts: {text: textColor},
      palette: {separator: separatorColor, lost: errorColor},
    },
  } = theme

  const login = async () => {
    setLoading(true)
    setError(null)
    // You can await here
    const {userInformations, success} = await loginToFirebase(
      'dev+test@babet.app',
      'ewG3yp8eK7A7Lt4H8bcMRMNx3yk72WkzK8rLyM',
    )

    // if firebase returned success dispatch user informations on store & navigate to
    if (success) {
      const {login} = actions
      await dispatch(login(userInformations))
      await navigate('TabNavigator')
      setLoading(false)
    } else {
      setLoading(false)
      setError(error)
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
          {error && <LoginScreenEmailErrorText color={errorColor}>{t(error)}</LoginScreenEmailErrorText>}
          {loading ? <ActivityIndicator /> : <InputButton label={t('login')} onPress={() => login(email, password)} />}
          <LoginScreenEmailSignUpText color={textColor}>{t('signupWithEmail')}</LoginScreenEmailSignUpText>
        </LoginScreenInputButtonContainer>
      </LoginScreenContainer>
    </KeyboardAvoidingView>
  )
}

export default withTheme(LoginScreen)
