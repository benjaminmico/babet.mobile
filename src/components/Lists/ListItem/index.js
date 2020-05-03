// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {ListItemContainer, ListItemIconsContainer, ListItemText, ListItemLine} from './index.styles'
import Icon from '@components/Icon'

type Props = {
  // list item label
  label: String,
  // left icon of list item
  icon: Icon,
  // action left icon of list item
  leftActionIcon: Icon,
  // action to make on action left icon
  onLeftAction: () => void,
  // action right icon of list item
  rightActionIcon: Icon,
  // action to make on action right icon
  onRightAction: () => void,
  // theme
  theme: Object,
}

const ListItem = ({label, icon, leftActionIcon, onLeftAction, rightActionIcon, onRightAction, theme}: Props) => {
  // get theme props
  const {
    colors: {
      texts: {title: colorTitle},
    },
  } = theme

  /**
   * render list item
   * icon's color is depending on theme$
   * bottom line is not displaying with "border-bottom-color" to have touchable effect only on icon && label
   * */
  return (
    <>
      <ListItemContainer>
        {icon && <Icon size={24} label={icon} />}
        <ListItemText isIcon={icon} color={colorTitle}>
          {label}
        </ListItemText>
        {(leftActionIcon || rightActionIcon) && (
          <ListItemIconsContainer>
            {leftActionIcon && <Icon size={16} label={leftActionIcon} onPress={onLeftAction} />}
            {rightActionIcon && <Icon size={16} label={rightActionIcon} onPress={onRightAction} />}
          </ListItemIconsContainer>
        )}
      </ListItemContainer>
      <ListItemLine />
    </>
  )
}

export default withTheme(ListItem)
