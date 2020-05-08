/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-one-expression-per-line */
// @flow

import {withTheme} from '@core/themeProvider'
import {currency} from '@utils/currency'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {ComparisonItemContainer, ComparisonItemDescription, ComparisonItemValue, ComparisonLabel} from './index.styles'

type Props = {
  // item value to compare
  value: Number,
  // item label,
  label: String,
  // theme
  theme: Object,
}

const ComparisonItem = ({value, label, theme}: Props) => {
  // get theme props
  const {
    key: keyTheme,
    colors: {
      components: {backgroundContainer: backgroundContainerColor},
      texts: {reverseText: reverseTextColor},
      palette: {won: wonColor, lost: lostColor, comparisonDescription: comparisonDescriptionColor},
    },
  } = theme

  // linear gradient color depending on positive value or not
  const linearGradientColors = value > 0 ? ['#2ADC57', '#27984C'] : ['#E41515', '#9C0F0F']
  /**
   * render game button
   * text can only be de displayed on one line
   * */
  return (
    <ComparisonItemContainer backgroundColor={backgroundContainerColor} theme={keyTheme}>
      <ComparisonItemValue color={value > 0 ? wonColor : lostColor}>
        {value > 0 ? `+${currency(value)}` : currency(value)}
        <ComparisonItemDescription color={comparisonDescriptionColor}>
          {value > 0 ? ' de gains' : ' de pertes'}
        </ComparisonItemDescription>
      </ComparisonItemValue>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1.5, y: 0}}
        colors={linearGradientColors}
        style={{
          width: '100%',
          marginTop: 5,
          height: 24,
          borderRadius: 4.32,
          justifyContent: 'center',
          paddingLeft: 11.8,
        }}
      >
        <ComparisonLabel color={reverseTextColor}>{label}</ComparisonLabel>
      </LinearGradient>
    </ComparisonItemContainer>
  )
}

export default withTheme(ComparisonItem)
