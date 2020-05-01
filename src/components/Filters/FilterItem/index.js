// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
// import {useTranslation} from 'react-i18next'
import {FilterItemContainer, FilterItemText} from './index.styles'

type Props = {
  // index item position
  index: Number,
  // filter label
  label: String,
  // check if filter item is selected or not
  selected: Boolean,
  // theme
  theme: Object,
}

const FilterItem = ({index, label, selected, theme}: Props) => {
  //   const {t} = useTranslation()

  // get theme props
  const {
    colors: {
      components: {backgroundFilter},
      texts: {
        filters: {selected: colorSelected, unselected: colorUnselected},
      },
    },
  } = theme

  return (
    <FilterItemContainer
      testID="FILTER_ITEM_CONTAINER"
      index={index}
      backgroundColor={selected ? backgroundFilter : 'transparent'}
    >
      <FilterItemText color={selected ? colorSelected : colorUnselected}>{label}</FilterItemText>
    </FilterItemContainer>
  )
}

export default withTheme(FilterItem)
