/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-one-expression-per-line */
// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {
  GameContainer,
  GameContentContainer,
  GameLabel,
  GameResultLabel,
  GameResultValue,
  GameOddContainer,
  GameOddValue,
  GameLine,
} from './index.styles'
import {sportEmoji} from './utils/sport'
import Icon from '@components/Icon'

type Props = {
  // sport value
  sport: String,
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
  // theme
  theme: Object,
}

const Game = ({sport, localTeam, visitorTeam, name, odd, status, theme}: Props) => {
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
      <GameContainer>
        <GameContentContainer>
          <GameLabel color={colorText}>{`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`}</GameLabel>
          <GameResultLabel color={colorText}>
            Mon pari : <GameResultValue color={colorText}>{name}</GameResultValue>
          </GameResultLabel>
        </GameContentContainer>

        <GameOddContainer>
          <Icon size={18} label={status} />
          <GameOddValue numberOfLines={1} color={colorText}>
            {odd.toFixed(2)}
          </GameOddValue>
        </GameOddContainer>
      </GameContainer>
      <GameLine />
    </>
  )
}

export default withTheme(Game)
