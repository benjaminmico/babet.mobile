// @flow

import React from 'react'
import {withTheme} from '@core/themeProvider'
import FilterItem from './FilterItem'
import {FiltersScrollContainer, FiltersContainer, FiltersContentContainer} from './index.style'

type Props = {
  // display list to horizontal or not
  horizontal: Boolean,
  // filter items to render
  items: Array,
  // if it is a multifiters list or not
  multiFilters: Boolean,
}

const Filters = ({items, multiFilters, horizontal}: Props) => {
  /**
   * mapping & render FilterItem for each values
   * render filters horizontally with scroll on verticaly with a view depends on display option "horizontal"
   * */
  return (
    <>
      {horizontal ? (
        <FiltersScrollContainer scrollEnabled={horizontal} horizontal={horizontal}>
          <FiltersContentContainer horizontal={horizontal}>
            {items.map((item, index) => {
              return (
                <FilterItem
                  key={item.id + item.label}
                  horizontal={horizontal}
                  index={index}
                  label={item.label}
                  multiFilter={multiFilters}
                  selected={item.selected}
                />
              )
            })}
          </FiltersContentContainer>
        </FiltersScrollContainer>
      ) : (
        <FiltersContainer scrollEnabled={false} horizontal={horizontal}>
          <FiltersContentContainer horizontal={horizontal}>
            {items.map((item, index) => {
              return (
                <FilterItem
                  key={item.id + item.label}
                  horizontal={horizontal}
                  index={index}
                  label={item.label}
                  multiFilter={multiFilters}
                  selected={item.selected}
                />
              )
            })}
          </FiltersContentContainer>
        </FiltersContainer>
      )}
    </>
  )
}

export default withTheme(Filters)
