// @flow
import {changePassword} from '@api/auth/changePassword'
import InputButton from '@components/Buttons/InputButton'
import Input from '@components/Input'
import {withTheme} from '@core/themeProvider'
import {useNavigation} from '@react-navigation/native'
import React, {useContext, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {
  ChangePasswordButtonContainer,
  ChangePasswordScreenContainer,
  ChangePasswordScreenContentContainer,
} from './index.styles'
import {ToastContext} from '@components/Alerts/Toast/ToastContext'

type Props = {
  theme: Object,
}

const ChangePasswordScreen = ({theme}: Props) => {
  // get theme props
  const {backgroundColor} = theme

  // set local state nickname to update value when changing text
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const {goBack} = useNavigation()

  const {show} = useContext(ToastContext)
  const {t} = useTranslation()

  /**
   * send informations when pressing button
   * call graphql mutation =>
   * get firstname && lastname as static value && use local state nickname && local state description
   * update nickname && description on store
   * go back once informations are dispatched on store
   */
  const updatePassword = async () => {
    const {success} = await changePassword(password)
    if (success) goBack()
    else {
      show({
        title: t('unknownErrorTitle'),
        message: t('unknownErrorDescription'),
        type: 'error',
        error: 'updatePasswordError',
      })
    }
  }

  return (
    <ChangePasswordScreenContainer activeOpacity={1.0} backgroundColor={backgroundColor}>
      <ChangePasswordScreenContentContainer>
        <Input inputLabel={t('updatePassword')} onChangeText={setPassword} value={password} />
        <Input inputLabel={t('confirmPassword')} onChangeText={setConfirmPassword} value={confirmPassword} />
        {password === confirmPassword && password !== '' && (
          <ChangePasswordButtonContainer>
            <InputButton label={t('update')} onPress={() => updatePassword()} />
          </ChangePasswordButtonContainer>
        )}
      </ChangePasswordScreenContentContainer>
    </ChangePasswordScreenContainer>
  )
}

export default withTheme(ChangePasswordScreen)
