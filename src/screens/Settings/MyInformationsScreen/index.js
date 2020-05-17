// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {MyInformationsScreenContainer} from './index.styles'

type Props = {
  theme: Object,
}

const MyInformationsScreen = ({theme}: Props) => {
  // get theme props
  const {backgroundColor} = theme

  return <MyInformationsScreenContainer activeOpacity={1.0} backgroundColor={backgroundColor} />
}

export default withTheme(MyInformationsScreen)
