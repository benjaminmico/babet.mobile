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
import History from '@components/History'

type Props = {
  // Balance sheet value
  value: Number,
  // Balance sheet description
  description: String,
  // bet history to display
  history: [String],
  // theme
  theme: Object,
}

const Generic = ({value, description, history, theme}: Props) => {
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
        {history?.length > 0 ? (
          <History style={{position: 'absolute', top: 77}} items={history} />
        ) : (
          <GenericKPILabel color={kpiValueColor}>En augmentation</GenericKPILabel>
        )}
        <GenericDescription color={descriptionColor}>{description}</GenericDescription>
      </GenericContentContainer>
    </GenericContainer>
  )
}

export default withTheme(Generic)
