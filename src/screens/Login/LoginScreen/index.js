// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {LoginScreenContainer} from './index.styles'

type Props = {
  theme: Object,
}

const LoginScreen = ({theme}: Props) => {
  // get theme props
  const {
    colors: {
      components: {background: backgroundColor},
    },
  } = theme

  // login screen render
  return <LoginScreenContainer backgroundColor={backgroundColor} />
}

export default withTheme(LoginScreen)
