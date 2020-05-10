import React from 'react'
import {Platform} from 'react-native'
import HeaderTitle from '@components/Navigation/Headers/HeaderTitle'
import {getTheme} from '../../core/themeProvider'
import {useTranslation} from 'react-i18next'

/**
 *
 * @param {String} key key Navigation
 * @param {String} title header title
 * @param {Boolean} goBack set if screen header need to have a go back icon or not
 * @returns headerStyle object to pass to screen
 */
const headerStyle = (key, title, goBack) => {
  // get theme props
  const {backgroundColor} = getTheme()
  const {t} = useTranslation()

  return {
    headerLeft: props => <HeaderTitle {...props} title={t(`${key}HeaderTitle`)} goBack={goBack} />,
    headerTitle: () => null,
    headerStyle: {
      height: Platform.OS === 'android' ? 60 : 88,
      backgroundColor,
      shadowColor: 'transparent',
      elevation: 0,
    },
  }
}

export default headerStyle
