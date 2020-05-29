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
  TicketContainer,
  TicketContentBets,
  TicketContentResults,
  TicketHeader,
  TicketKPIContainer,
  TicketKPILabel,
  TicketKPIValue,
  TicketLabel,
  TicketMainKPILabel,
  TicketMainKPIValue,
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

const Ticket = ({updatedDate, bets, stake, globalOdd, total, status, theme}: Props) => {
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
        return null
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

  const keyExtractor = (item, index) => {
    return index + item.id
  }

  /**
   * render bet button
   * text can only be de displayed on one line
   * */

  return (
    <TicketContainer backgroundColor={backgroundContainerColor} theme={keyTheme}>
      <TicketHeader>
        <TicketLabel color={labelColor}>
          {`${moment(parseInt(updatedDate, 0)).calendar()} - ${getTicketType(bets)}`}
        </TicketLabel>
        <Icon
          style={{
            position: 'absolute',
            right: 12,
          }}
          size={18}
          label="share"
        />
      </TicketHeader>
      <TicketContentBets>
        {bets.map((bet, index) => {
          const {sport, localTeam, visitorTeam, name, odd, status: gameStatus} = bet
          return (
            <Bet
              key={keyExtractor(bet, index)}
              isLast={index === bets.length - 1}
              sport={sport}
              localTeam={localTeam}
              visitorTeam={visitorTeam}
              name={name}
              odd={odd}
              status={gameStatus}
            />
          )
        })}
      </TicketContentBets>
      <TicketContentResults backgroundColor={getColorTicketStatus(status)}>
        <TicketKPIContainer>
          <TicketKPILabel testID="STAKE_LABEL" color={reverseTextColor}>
            Mise totale
          </TicketKPILabel>
          <TicketKPIValue color={reverseTextColor}>{currency(stake)}</TicketKPIValue>
        </TicketKPIContainer>
        <TicketKPIContainer>
          <TicketKPILabel color={reverseTextColor}>Côte totale</TicketKPILabel>
          <TicketKPIValue color={reverseTextColor}>{globalOdd.toFixed(2)}</TicketKPIValue>
        </TicketKPIContainer>
        <TicketKPIContainer>
          <TicketMainKPILabel color={reverseTextColor}>{getTotalLabel(status)}</TicketMainKPILabel>
          <TicketMainKPIValue color={reverseTextColor}>
            {status === 'lost' ? currency(stake) : currency(total)}
          </TicketMainKPIValue>
        </TicketKPIContainer>
        {/* {status === 'lost' && (
          <TicketKPIContainer>
            <TicketMainKPILabel color={textColor}>{'Gains perdus'}</TicketMainKPILabel>
            <TicketMainKPIValue color={textColor}>{currency(total)}</TicketMainKPIValue>
          </TicketKPIContainer>
        )} */}
      </TicketContentResults>
    </TicketContainer>
  )
}

export default withTheme(Ticket)
