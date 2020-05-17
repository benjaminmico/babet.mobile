// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {ChangePasswordScreenContainer} from './index.styles'

type Props = {
  theme: Object,
}

const ChangePasswordScreen = ({theme}: Props) => {
  // get theme props
  const {backgroundColor} = theme

  return <ChangePasswordScreenContainer activeOpacity={1.0} backgroundColor={backgroundColor} />
}

export default withTheme(ChangePasswordScreen)
