/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-one-expression-per-line */
// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {
  GenericContainer,
  GenericContentContainer,
  GenericDescription,
  GenericKPILabel,
  GenericLabel,
  GenericValue,
} from './index.styles'

type Props = {
  // Balance sheet value
  value: Number,
  // Balance sheet description
  description: String,
  // theme
  theme: Object,
}

const Generic = ({value, description, theme}: Props) => {
  // get theme props
  const {
    key: keyTheme,
    colors: {
      components: {backgroundContainer: backgroundContainerColor},
      texts: {
        text: textColor,
        description: descriptionColor,
        stats: {kpiValue: kpiValueColor},
      },
    },
  } = theme

  /**
   * render game button
   * text can only be de displayed on one line
   * */

  return (
    <GenericContainer backgroundColor={backgroundContainerColor} theme={keyTheme}>
      <GenericContentContainer>
        <GenericLabel color={textColor}>Mon bilan</GenericLabel>
        <GenericValue color={kpiValueColor}>{value}</GenericValue>
        <GenericKPILabel color={textColor}>En augmentation</GenericKPILabel>
        <GenericDescription color={descriptionColor}>{description}</GenericDescription>
      </GenericContentContainer>
    </GenericContainer>
  )
}

export default withTheme(Generic)
