// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {HeaderTitleContainer, HeaderTitleText} from './index.styles'
import Icon from '@components/Icon'
import {useNavigation} from '@react-navigation/native'

type Props = {
  // header title
  title: String,
  // should enable go back option or not
  isGoBack: Boolean,
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

const HeaderTitle = ({title, isGoBack, theme}: Props) => {
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

  const {goBack} = useNavigation()

  return (
    <HeaderTitleContainer>
      {title && isGoBack && <Icon size={16} label="goBack" onPress={() => goBack()} />}
      <HeaderTitleText numberOfLines={1} color={colorTitle}>
        {capitalize(title)}
      </HeaderTitleText>
    </HeaderTitleContainer>
  )
}

export default withTheme(HeaderTitle)
