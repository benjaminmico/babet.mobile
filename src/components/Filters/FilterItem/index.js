// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
// import {useTranslation} from 'react-i18next'
import {FilterItemContainer, FilterItemText} from './index.styles'
import Tick from '@assets/icons/tick.svg'

type Props = {
  // display list to horizontal or not
  horizontal: Boolean,
  // index item position
  index: Number,
  // filter label
  label: String,
  // check if filter item is selected or not
  selected: Boolean,
  // if filter is on a multi filters list
  multiFilter: Boolean,
  // onPress filter
  onPress: () => void,
  // theme
  theme: Object,
}

const FilterItem = ({horizontal, index, label, onPress, selected, multiFilter, theme}: Props) => {
  //   const {t} = useTranslation()

  // get theme props
  const {
    colors: {
      components: {backgroundFilter},
      texts: {
        filters: {selected: colorSelected, unselected: colorUnselected, multiFilter: colorMultiFilter},
      },
    },
  } = theme

  // render colors & tick depends on multi filters or selected
  return (
    <FilterItemContainer
      index={index}
      backgroundColor={selected ? backgroundFilter : 'transparent'}
      horizontal={horizontal}
      onPress={() => onPress(index)}
    >
      <FilterItemText color={selected ? (multiFilter ? colorMultiFilter : colorSelected) : colorUnselected}>
        {label}
      </FilterItemText>
      {selected && multiFilter && <Tick style={{marginLeft: 5.65}} width={12} height={12} />}
    </FilterItemContainer>
  )
}

export default withTheme(FilterItem)
