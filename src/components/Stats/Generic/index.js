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
import formatValue from './utils/formatValue'

type Props = {
  // Label of generic
  label: String,
  // Generic value
  value: Number,
  // KPI description (for example 'Skyrocketing')
  KPIDescription: String,
  // Generic description
  description: String,
  // bet history to display
  history: [String],
  // type of value => 'percentage', odd', 'currency' or 'ratio
  type: String,
  // theme
  theme: Object,
}

const Generic = ({label, value, KPIDescription, type, description, history, theme}: Props) => {
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
        <GenericLabel color={textColor}>{label}</GenericLabel>
        <GenericValue color={kpiValueColor}>{formatValue(value, type, history?.length)}</GenericValue>
        {history?.length > 0 ? (
          <History style={{position: 'absolute', top: 77}} items={history} />
        ) : (
          <GenericKPILabel color={kpiValueColor}>{KPIDescription}</GenericKPILabel>
        )}
        <GenericDescription numberOfLines={2} color={descriptionColor}>
          {description}
        </GenericDescription>
      </GenericContentContainer>
    </GenericContainer>
  )
}

export default withTheme(Generic)
