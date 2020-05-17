/* eslint-disable global-require */
// @flow

import BankrollBlackIcon from '@assets/icons/blacks/bankrollIcon.svg'
import ContactUsBlackIcon from '@assets/icons/blacks/contactUsIcon.svg'
import GoBackBlackIcon from '@assets/icons/blacks/goBackIcon.svg'
import InformationsBlackIcon from '@assets/icons/blacks/informationsIcon.svg'
import LogOutBlackIcon from '@assets/icons/blacks/logOutIcon.svg'
import PasswordBlackIcon from '@assets/icons/blacks/passwordIcon.svg'
import PrivacyBlackIcon from '@assets/icons/blacks/privacyIcon.svg'
import SettingsBlackIcon from '@assets/icons/blacks/settingsIcon.svg'
import DeleteBlackIcon from '@assets/icons/blacks/deleteIcon.svg'
import DeleteWhiteIcon from '@assets/icons/whites/deleteIcon.svg'
import LostIcon from '@assets/icons/gameStatus/lost.svg'
import PendingIcon from '@assets/icons/gameStatus/pending.svg'
import WonIcon from '@assets/icons/gameStatus/won.svg'
import AddTicket from '@assets/icons/navigation/addTicket.svg'
import Profile from '@assets/icons/navigation/profile.svg'
import SelectedAddTicket from '@assets/icons/navigation/selectedAddTicket.svg'
import SelectedProfile from '@assets/icons/navigation/selectedProfile.svg'
import ShareIcon from '@assets/icons/share.svg'
import Tick from '@assets/icons/tick.svg'
import Ticket from '@assets/icons/ticket.svg'
import BankrollWhiteIcon from '@assets/icons/whites/bankrollIcon.svg'
import ContactUsWhiteIcon from '@assets/icons/whites/contactUsIcon.svg'
import GoBackWhiteIcon from '@assets/icons/whites/goBackIcon.svg'
import InformationsWhiteIcon from '@assets/icons/whites/informationsIcon.svg'
import LogOutWhiteIcon from '@assets/icons/whites/logOutIcon.svg'
import PasswordWhiteIcon from '@assets/icons/whites/passwordIcon.svg'
import PrivacyWhiteIcon from '@assets/icons/whites/privacyIcon.svg'
import SettingsWhiteIcon from '@assets/icons/whites/settingsIcon.svg'
import {withTheme} from '@core/themeProvider'
import React from 'react'
import {Image} from 'react-native'
import {EmptyView, IconContainer} from './index.styles'

type Props = {
  // icon name
  label: String,
  // icon size
  size: Number,
  // on press icon,
  onPress: () => void,
  // theme
  theme: Object,
}

/**
 *
 * @param {String} label icon name
 * @param {*} size icon size
 * @param {*} themeKey theme key to select color of the icon.
 * (SVG Tranformer => lib used to display svg do not have a color changing prop...)
 * @returns Icon to render
 */
const renderIcon = (label, size, themeKey) => {
  switch (label) {
    case 'tick':
      return <Tick width={size} height={size} />
    case 'share':
      return <ShareIcon width={size} height={size} />
    case 'informations':
      return themeKey === 'white' ? (
        <InformationsBlackIcon width={size} height={size} />
      ) : (
        <InformationsWhiteIcon width={size} height={size} />
      )
    case 'privacy':
      return themeKey === 'white' ? (
        <PrivacyBlackIcon width={size} height={size} />
      ) : (
        <PrivacyWhiteIcon width={size} height={size} />
      )
    case 'contact':
      return themeKey === 'white' ? (
        <ContactUsBlackIcon width={size} height={size} />
      ) : (
        <ContactUsWhiteIcon width={size} height={size} />
      )
    case 'update':
      return themeKey === 'white' ? (
        <ContactUsBlackIcon width={size} height={size} />
      ) : (
        <ContactUsWhiteIcon width={size} height={size} />
      )
    case 'delete':
      return themeKey === 'white' ? (
        <DeleteBlackIcon width={size} height={size} />
      ) : (
        <DeleteWhiteIcon width={size} height={size} />
      )
    case 'password':
      return themeKey === 'white' ? (
        <PasswordBlackIcon width={size} height={size} />
      ) : (
        <PasswordWhiteIcon width={size} height={size} />
      )
    case 'logOut':
      return themeKey === 'white' ? (
        <LogOutBlackIcon width={size} height={size} />
      ) : (
        <LogOutWhiteIcon width={size} height={size} />
      )
    case 'settings':
      return themeKey === 'white' ? (
        <SettingsBlackIcon width={size} height={size} />
      ) : (
        <SettingsWhiteIcon width={size} height={size} />
      )
    case 'bankroll':
      return themeKey === 'white' ? (
        <BankrollBlackIcon width={size} height={size} />
      ) : (
        <BankrollWhiteIcon width={size} height={size} />
      )
    case 'goBack':
      return themeKey === 'white' ? (
        <GoBackBlackIcon width={size} height={size} />
      ) : (
        <GoBackWhiteIcon width={size} height={size} />
      )
    case 'pending':
      return <PendingIcon width={size} height={size} />
    case 'won':
      return <WonIcon width={size} height={size} />
    case 'lost':
      return <LostIcon width={size} height={size} />
    case 'facebook':
      return (
        <Image
          style={{width: size, height: size, resizeMode: 'contain'}}
          source={require('../../../assets/icons/social/facebook.png')}
        />
      )
    case 'apple':
      return <Image style={{width: size, height: size}} source={require('../../../assets/icons/social/apple.png')} />
    case 'gmail':
      return <Image style={{width: size, height: size}} source={require('../../../assets/icons/social/gmail.png')} />
    case 'selectedProfile':
      return <SelectedProfile width={size} height={size} />
    case 'profile':
      return <Profile width={size} height={size} />
    case 'selectedAddTicket':
      return <SelectedAddTicket width={size} height={size} />
    case 'addTicket':
      return <AddTicket width={size} height={size} />
    case 'ticket':
      return <Ticket width={size} height={size} />
    default:
      return <EmptyView />
  }
}

const Icon = ({label, size, onPress, theme, ...props}: Props) => {
  // get theme props
  const {key} = theme

  // render icon
  return (
    <IconContainer disabled={!onPress} {...props} onPress={onPress}>
      {renderIcon(label, size, key)}
    </IconContainer>
  )
}

export default withTheme(Icon)
