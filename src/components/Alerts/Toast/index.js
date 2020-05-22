// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {ToastContainer, ToastContentContainer} from './index.styles'

type Props = {
  // theme
  theme: Object,
}

const Toast = ({theme}: Props) => {
  // get theme props
  const {
    key: keyTheme,
    colors: {
      components: {backgroundContainer},
    },
  } = theme

  /**
   * render toast
   * */
  return (
    <ToastContainer>
      <ToastContentContainer theme={keyTheme} backgroundColor={backgroundContainer} />
    </ToastContainer>
  )
}

export default withTheme(Toast)
