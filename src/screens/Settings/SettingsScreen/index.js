// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {SettingsScreenContainer} from './index.styles'

type Props = {
  theme: Object,
}

const SettingsScreen = ({theme}: Props) => {
  // get theme props
  const {
    colors: {
      components: {background: backgroundColor},
    },
  } = theme

  return <SettingsScreenContainer activeOpacity={1.0} backgroundColor={backgroundColor} />
}

export default withTheme(SettingsScreen)
