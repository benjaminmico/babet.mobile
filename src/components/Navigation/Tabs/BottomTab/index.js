// @flow

import {withTheme} from '@core/themeProvider'
import React, {useState} from 'react'
import {BottomTabContainer, BottomTabContentContainer} from './index.styles'
import Icon from '@components/Icon'

type Props = {
  // theme
  theme: Object,
}

const BottomTab = ({state, descriptors, navigation: {navigate}, theme}: Props) => {
  const [currentNavigationKey, setCurrentNavigationKey] = useState(state.history[0].key)

  const navigationRoutes = state.routes
  console.log('state', state)
  console.log('descriptors', descriptors)
  console.log('currentNavigationKey', currentNavigationKey)

  // get theme props
  const {
    colors: {
      palette: {purple: backgroundContainer},
    },
  } = theme

  /**
   * Navigate to right key && update icon style
   * @param {String} key navigation key
   */
  const navigateToKey = key => {
    setCurrentNavigationKey(navigationRoutes.find(route => route.name === key).key)
    navigate(key)
  }

  /**
   * Update icon size depends on selected route or not
   * @param {String} key navigation key
   * @returns {Number} icon size
   */
  const updateIconSize = key => {
    return currentNavigationKey.includes(key) ? 34 : 24
  }

  /**
   * render bottom tab component
   * text can only be de displayed on one line
   * */
  return (
    <BottomTabContainer backgroundColor={backgroundContainer}>
      <BottomTabContentContainer>
        <Icon
          size={updateIconSize('AddTicket')}
          label={currentNavigationKey.includes('AddTicket') ? 'selectedAddTicket' : 'addTicket'}
          onPress={() => navigateToKey('AddTicketScreen')}
        />
        <Icon
          size={updateIconSize('Profile')}
          label={currentNavigationKey.includes('Profile') ? 'selectedProfile' : 'profile'}
          onPress={() => navigateToKey('ProfileScreen')}
        />
      </BottomTabContentContainer>
    </BottomTabContainer>
  )
}

export default withTheme(BottomTab)
