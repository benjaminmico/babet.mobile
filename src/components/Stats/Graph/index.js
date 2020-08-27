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
  // Graph selected
  selected: Boolean,
  // Graph press
  onPress: () => void,
  // theme
  theme: Object,
}

const Graph = ({label, items, selected, onPress, description, theme, scrollYPos}: Props) => {
  const filters = [
    {id: 'week', label: '1 sem.', selected: selected === 'week'},
    {id: 'month', label: '1 mois', selected: selected === 'month'},
    {id: 'all', label: 'Début', selected: selected === 'all'},
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
      <Charts scrollYPos={scrollYPos} data={items} />
    </GraphContainer>
  )
}

export default withTheme(Graph)
