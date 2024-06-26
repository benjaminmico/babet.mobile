// @flow

import React from 'react'
import {StyleSheet} from 'react-native'
import {BottomTabBar} from 'react-navigation'

import {withTheme} from '../core/themeProvider'

const style = StyleSheet.create({
  label: {fontSize: 22, fontWeight: '400'},
})

const TabBar = props => {
  const {
    theme: {backgroundColor},
  } = props
  const {label} = style

  return (
    <BottomTabBar
      {...props}
      activeTintColor={backgroundColor}
      labelStyle={label}
      getLabelText={({route}) => route.key.toUpperCase()}
    />
  )
}

export default withTheme(TabBar)
