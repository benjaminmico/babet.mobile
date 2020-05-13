// @flow

import {withTheme} from '@core/themeProvider'
import React, {useState, useEffect} from 'react'
import {BottomTabContainer, BottomTabContentContainer} from './index.styles'
import Icon from '@components/Icon'

type Props = {
  // theme
  theme: Object,
}

const BottomTab = ({state, navigation: {navigate}, theme}: Props) => {
  // set current screen as first history
  const [currentNavigationKey, setCurrentNavigationKey] = useState(state.history[0].key)

  // navigation routes
  const navigationRoutes = state.routes

  /**
   * find focused screen when swiping left or right
   * @returns {String} current screen
   */
  const findFocusedNavigationKey = () => {
    const screensStatus = navigationRoutes.map((route, index) => {
      const isFocused = state.index === index
      // if screen is focused
      if (isFocused) return route.key
      return null
    })
    // find focused screen => other are null
    return screensStatus.find(screen => {
      return screen != null
    })
  }

  /**
   * set current navigation when focused screen is changing by swiping
   */
  useEffect(() => {
    setCurrentNavigationKey(findFocusedNavigationKey())
  }, [findFocusedNavigationKey()])

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
          hitSlop={{left: 20, top: 20, bottom: 20, right: 20}}
          size={updateIconSize('AddTicket')}
          label={currentNavigationKey.includes('AddTicket') ? 'selectedAddTicket' : 'addTicket'}
          onPress={() => navigateToKey('AddTicketScreen')}
        />
        <Icon
          hitSlop={{left: 20, top: 20, bottom: 20, right: 20}}
          size={updateIconSize('Profile')}
          label={currentNavigationKey.includes('Profile') ? 'selectedProfile' : 'profile'}
          onPress={() => navigateToKey('ProfileScreen')}
        />
      </BottomTabContentContainer>
    </BottomTabContainer>
  )
}

export default withTheme(BottomTab)
