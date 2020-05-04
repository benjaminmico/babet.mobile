// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {HeaderTitleContainer, HeaderTitleText} from './index.styles'
import Icon from '@components/Icon'

type Props = {
  // header title
  title: String,
  // should enable go back option or not
  goBack: Boolean,
  // theme
  theme: Object,
}

/**
 *
 * @param {String} str string where we want to capitalize first letter
 * @returns string with first letter capitalized
 */
const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const HeaderTitle = ({title, goBack, theme}: Props) => {
  // get theme props
  const {
    colors: {
      texts: {title: colorTitle},
    },
  } = theme

  /**
   * render input button
   * text can only be de displayed on one line
   * */

  return (
    <HeaderTitleContainer>
      {title && goBack && <Icon size={16} label="goBack" onPress={() => console.log('ok')} />}
      <HeaderTitleText numberOfLines={1} color={colorTitle}>
        {capitalize(title)}
      </HeaderTitleText>
    </HeaderTitleContainer>
  )
}

export default withTheme(HeaderTitle)
