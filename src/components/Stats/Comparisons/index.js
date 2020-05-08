/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-one-expression-per-line */
// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {ComparisonsContainer, ComparisonsHeader, ComparisonsLabel, ComparisonsItemsContainer} from './index.styles'
import ComparisonItem from '@components/Stats/Comparisons/ComparisonItem'

type Props = {
  // Comparisons label
  label: String,
  // Comparisons items
  items: [Object],
  // theme
  theme: Object,
}

const Comparisons = ({label, items, theme}: Props) => {
  // get theme props
  const {
    key: keyTheme,
    colors: {
      components: {backgroundContainer: backgroundContainerColor},
      texts: {text: textColor},
    },
  } = theme

  /**
   * render game button
   * text can only be de displayed on one line
   * */
  return (
    <ComparisonsContainer backgroundColor={backgroundContainerColor} theme={keyTheme}>
      <ComparisonsHeader>
        <ComparisonsLabel color={textColor}>{label}</ComparisonsLabel>
      </ComparisonsHeader>
      <ComparisonsItemsContainer>
        {items.map(comparison => {
          const {label: comparisonLabel, value: comparisonValue} = comparison
          return <ComparisonItem label={comparisonLabel} value={comparisonValue} />
        })}
      </ComparisonsItemsContainer>
    </ComparisonsContainer>
  )
}

export default withTheme(Comparisons)
