// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {Linking} from 'react-native'
import {SettingsScreenContainer, SettingsScreenContentContainer} from './index.styles'
import ListItem from '@components/Lists/ListItem'
import {useTranslation} from 'react-i18next'
import {useNavigation} from '@react-navigation/native'
import {logout as apiLogout} from '@api/auth/logout'
import {useDispatch} from 'react-redux'
import actions from '@store/actions'

type Props = {
  theme: Object,
}

const SettingsScreen = ({theme}: Props) => {
  // get theme props
  const {backgroundColor} = theme

  const {t} = useTranslation()
  const {navigate} = useNavigation()
  const dispatch = useDispatch()

  /**
   * Log out user function
   */
  const userLogout = async () => {
    const {logout} = actions
    const {success} = await apiLogout()
    if (success) {
      dispatch(logout())
      dispatch({type: '__reinit__'})
      navigate('LoginScreen')
    }
  }

  const settingsItems = [
    {label: t('myBankrolls'), icon: 'bankroll', onPress: () => navigate('MyBankrollsScreen')},
    {
      label: t('myInformations'),
      icon: 'informations',
      onPress: () => navigate('MyInformationsScreen'),
    },
    {
      label: t('changePassword'),
      icon: 'password',
      onPress: () => navigate('ChangePasswordScreen'),
    },
    {label: t('privacy'), icon: 'privacy', onPress: () => navigate('PrivacyScreen')},
    {label: t('contactUs'), icon: 'contact', onPress: () => Linking.openURL('mailto:babet@babet.app')},
    {label: t('logOut'), icon: 'logOut', onPress: () => userLogout()},
  ]

  return (
    <SettingsScreenContainer activeOpacity={1.0} backgroundColor={backgroundColor}>
      <SettingsScreenContentContainer>
        {settingsItems.map(({label, icon, onPress}) => {
          return (
            <ListItem
              key={label + icon}
              label={label}
              icon={icon}
              onPress={onPress}
              onLeftAction={() => console.log('onLeft')}
              onRightAction={() => console.log('onRight')}
            />
          )
        })}
      </SettingsScreenContentContainer>
    </SettingsScreenContainer>
  )
}

export default withTheme(SettingsScreen)
