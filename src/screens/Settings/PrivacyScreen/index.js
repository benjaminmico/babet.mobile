// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {PrivacyScreenContainer} from './index.styles'

type Props = {
  theme: Object,
}

const PrivacyScreen = ({theme}: Props) => {
  // get theme props
  const {backgroundColor} = theme

  return <PrivacyScreenContainer activeOpacity={1.0} backgroundColor={backgroundColor} />
}

export default withTheme(PrivacyScreen)
