// @flow

import React from 'react'
import {withTheme} from '@core/themeProvider'
import FilterItem from './FilterItem'
import {FiltersContainer} from './index.style'

type Props = {
  // filter items to render
  items: Array,
}

const Filters = ({items}: Props) => {
  return (
    <FiltersContainer>
      {items.map((item, index) => {
        return <FilterItem index={index} label={item.label} selected={item.selected} />
      })}
    </FiltersContainer>
  )
}

export default withTheme(Filters)
