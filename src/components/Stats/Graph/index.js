/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-one-expression-per-line */
// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {
  GraphContainer,
  GraphContent,
  GraphHeader,
  GraphFooter,
  GraphLabel,
  GraphDescription,
  GraphFilters,
} from './index.styles'
import Charts from '@components/Charts'
import Filters from '@components/Filters'

type Props = {
  // Graph label
  label: String,
  // Graph items
  items: [Object],
  // Graph descriptions
  label: String,
  // theme
  theme: Object,
}

const Graph = ({label, items, description, theme}: Props) => {
  const filters = [
    {label: '1 sem.', selected: true},
    {label: '1 mois', selected: false},
    {label: 'Début', selected: false},
  ]

  // get theme props
  const {
    key: keyTheme,
    colors: {
      components: {backgroundContainer: backgroundContainerColor},
      texts: {text: textColor, description: descriptionColor},
    },
  } = theme

  /**
   * render game button
   * text can only be de displayed on one line
   * */
  return (
    <GraphContainer backgroundColor={backgroundContainerColor} theme={keyTheme}>
      <GraphHeader>
        <GraphLabel color={textColor}>{label}</GraphLabel>
      </GraphHeader>
      <GraphContent>
        <Charts data={items} />
        <GraphFilters>
          <Filters items={filters} />
        </GraphFilters>
      </GraphContent>
      <GraphFooter>
        <GraphDescription color={descriptionColor}>{description}</GraphDescription>
      </GraphFooter>
    </GraphContainer>
  )
}

export default withTheme(Graph)
