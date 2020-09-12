/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-one-expression-per-line */
// @flow

import Bet from '@components/Bet'
import Icon from '@components/Icon'
import {withTheme} from '@core/themeProvider'
import {currency} from '@utils/currency'
import moment from 'moment'
import React from 'react'
import {
  TicketLiteContainer,
  TicketLiteContentContainer,
  TicketLiteContentText,
  TicketLiteDateText,
  TicketLiteRightContainer,
  TicketLiteRightText,
} from './index.styles'

type Props = {
  // Updated ticket date timestamp
  updatedDate: String,
  // Ticket's bets
  bets: [Bet],
  // stake played by user
  stake: Number,
  // Ticket's global odd (square of each odd bet)
  globalOdd: Number,
  // Ticket's total gain in case of winning
  total: Number,
  // status  ('pending', 'won' or 'lost)
  status: String,
  // theme
  theme: Object,
}

const TicketLite = ({updatedDate, bets, stake, globalOdd, total, status, theme}: Props) => {
  // get theme props
  const {
    key: keyTheme,
    colors: {
      components: {backgroundContainer: backgroundContainerColor},
      texts: {reverseText: reverseTextColor, description: labelColor},
      palette: {pending: pendingBackgroundColor, won: wonBackgroundColor, lost: lostBackgroundColor},
    },
  } = theme

  /**
   * ticket type (Simple or Combiné)
   * @param {String} bets to get bets length & compare it
   * @returns Simple or Combiné depends on bets length
   */
  function getTicketType(bets) {
    return bets?.length === 1 ? 'Simple' : 'Combiné'
  }

  /**
   * return the right sport emoji
   * @param {String} sport value of game's sport
   */
  function getColorTicketStatus(status) {
    switch (status) {
      case 'pending':
        return pendingBackgroundColor
      case 'won':
        return wonBackgroundColor
      case 'lost':
        return lostBackgroundColor
      default:
        return 'won'
    }
  }

  /**
   * total label depending on result
   * @param {String} status ticket's status  ('pending', 'won' or 'lost)
   */
  function getTotalLabel(status) {
    switch (status) {
      case 'pending':
        return 'Gains potentiels'
      case 'won':
        return 'Gains encaissés'
      case 'lost':
        return 'Somme perdue'
      default:
        return null
    }
  }

  /**
   * return the right sport emoji
   * @param {String} sport value of game's sport
   */
  function getColorTicketStatus(status) {
    switch (status) {
      case 'pending':
        return pendingBackgroundColor
      case 'won':
        return wonBackgroundColor
      case 'lost':
        return lostBackgroundColor
      default:
        return 'won'
    }
  }

  /**
   * render bet button
   * text can only be de displayed on one line
   * */

  const betLabel = bets
    .map((bet, index) => {
      return bet.name
    })
    .toString()

  return (
    <TicketLiteContainer>
      <Icon size={40} label={`${status}Lite`} />
      <TicketLiteContentContainer>
        <TicketLiteContentText>{betLabel}</TicketLiteContentText>
        <TicketLiteDateText color={labelColor}>
          {`${moment(parseInt(updatedDate, 0)).calendar()} - ${getTicketType(bets)}`}
        </TicketLiteDateText>
      </TicketLiteContentContainer>
      <TicketLiteRightContainer>
        <TicketLiteRightText color={getColorTicketStatus(status)}>
          {status === 'lost' ? currency(stake) : currency(total)}
        </TicketLiteRightText>
      </TicketLiteRightContainer>
    </TicketLiteContainer>
  )
}

export default withTheme(TicketLite)
