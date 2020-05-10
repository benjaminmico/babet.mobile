import React from 'react'
import HeaderTitle from '@components/Navigation/Headers/HeaderTitle'

/**
 *
 * @param {String} title header title
 * @param {Boolean} goBack set if screen header need to have a go back icon or not
 * @returns headerStyle object to pass to screen
 */
export const headerStyle = (title, goBack) => {
  return {
    headerLeft: props => <HeaderTitle {...props} title={title} goBack={goBack} />,
    headerTitle: () => null,
    headerStyle: {
      height: 80,
      shadowColor: 'transparent',
    },
  }
}
