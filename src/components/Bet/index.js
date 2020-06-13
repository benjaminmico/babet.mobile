/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-one-expression-per-line */
// @flow

import Icon from '@components/Icon'
import {withTheme} from '@core/themeProvider'
import React from 'react'
import {
  BetContainer,
  BetContentContainer,
  BetLabel,
  BetLine,
  BetOddContainer,
  BetOddValue,
  BetResultLabel,
  BetResultValue,
} from './index.styles'

type Props = {
  // localTeam value
  localTeam: String,
  // visitorTeam value
  visitorTeam: String,
  // bet name value
  name: String,
  // odd value
  odd: Number,
  // Bet's status (pending, won or lost)
  status: String,
  // // If it's a special bet or not (for example, if bet is made on a League Winner)
  // specialBet: Boolean,
  // check if game is last game of the list
  isLast: Boolean,
  // theme
  theme: Object,
}

const Bet = ({localTeam, visitorTeam, name, odd, status, isLast, theme}: Props) => {
  // get theme props
  const {
    colors: {
      texts: {text: colorText},
    },
  } = theme

  /**
   * render game button
   * text can only be de displayed on one line
   * */
  return (
    <>
      <BetContainer>
        <BetContentContainer>
          <BetLabel color={colorText}>{`${localTeam} - ${visitorTeam}`}</BetLabel>
          <BetResultLabel color={colorText}>
            Mon pari : <BetResultValue color={colorText}>{name}</BetResultValue>
          </BetResultLabel>
        </BetContentContainer>

        <BetOddContainer>
          <Icon size={18} label={status} />
          <BetOddValue numberOfLines={1} color={colorText}>
            {odd.toFixed(2)}
          </BetOddValue>
        </BetOddContainer>
      </BetContainer>
      {!isLast && <BetLine />}
    </>
  )
}

export default withTheme(Bet)
