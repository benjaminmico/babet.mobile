/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import Bet from '.'
import {sportEmoji} from './utils/sport'

describe.only('Bet', () => {
  describe('Integrity tests', () => {
    it('renders pending Bet correctly', () => {
      const sport = 'football'
      const localTeam = 'Marseille'
      const visitorTeam = 'Paris SG'
      const nameBet = 'Victoire ou nul de Marseille'
      const odd = 1.3
      const status = 'pending'

      const wrapper = mount(
        <ThemeContextProvider>
          <Bet sport={sport} localTeam={localTeam} visitorTeam={visitorTeam} name={nameBet} odd={odd} status={status} />
        </ThemeContextProvider>,
      )

      const BetLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const BetResultValue = wrapper.find('Text').at(4)
      const BetOddValue = wrapper.find('Text').at(6)

      expect(BetLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(BetResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('pending')
      expect(BetOddValue.prop('children')).toBe(odd.toFixed(2))
    })
    it('renders lost Bet correctly', () => {
      const sport = 'football'
      const localTeam = 'Marseille'
      const visitorTeam = 'Paris SG'
      const nameBet = 'Victoire ou nul de Marseille'
      const odd = 1.3
      const status = 'lost'

      const wrapper = mount(
        <ThemeContextProvider>
          <Bet sport={sport} localTeam={localTeam} visitorTeam={visitorTeam} name={nameBet} odd={odd} status={status} />
        </ThemeContextProvider>,
      )

      const BetLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const BetResultValue = wrapper.find('Text').at(4)
      const BetOddValue = wrapper.find('Text').at(6)

      expect(BetLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(BetResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('lost')
      expect(BetOddValue.prop('children')).toBe(odd.toFixed(2))
    })
    it('renders won Bet correctly', () => {
      const sport = 'football'
      const localTeam = 'Marseille'
      const visitorTeam = 'Paris SG'
      const nameBet = 'Victoire ou nul de Marseille'
      const odd = 1.3
      const status = 'won'

      const wrapper = mount(
        <ThemeContextProvider>
          <Bet sport={sport} localTeam={localTeam} visitorTeam={visitorTeam} name={nameBet} odd={odd} status={status} />
        </ThemeContextProvider>,
      )

      const BetLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const BetResultValue = wrapper.find('Text').at(4)
      const BetOddValue = wrapper.find('Text').at(6)

      expect(BetLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(BetResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('won')
      expect(BetOddValue.prop('children')).toBe(odd.toFixed(2))
    })

    it('renders football Bet correctly', () => {
      const sport = 'football'
      const localTeam = 'Marseille'
      const visitorTeam = 'Paris SG'
      const nameBet = 'Victoire ou nul de Marseille'
      const odd = 1.3
      const status = 'won'

      const wrapper = mount(
        <ThemeContextProvider>
          <Bet sport={sport} localTeam={localTeam} visitorTeam={visitorTeam} name={nameBet} odd={odd} status={status} />
        </ThemeContextProvider>,
      )

      const BetLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const BetResultValue = wrapper.find('Text').at(4)
      const BetOddValue = wrapper.find('Text').at(6)

      expect(BetLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(BetResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('won')
      expect(BetOddValue.prop('children')).toBe(odd.toFixed(2))
    })
    it('renders tennis Bet correctly', () => {
      const sport = 'tennis'
      const localTeam = 'Federer'
      const visitorTeam = 'Nadal'
      const nameBet = 'Victoire de Federer'
      const odd = 1.3
      const status = 'won'

      const wrapper = mount(
        <ThemeContextProvider>
          <Bet sport={sport} localTeam={localTeam} visitorTeam={visitorTeam} name={nameBet} odd={odd} status={status} />
        </ThemeContextProvider>,
      )

      const BetLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const BetResultValue = wrapper.find('Text').at(4)
      const BetOddValue = wrapper.find('Text').at(6)

      expect(BetLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(BetResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('won')
      expect(BetOddValue.prop('children')).toBe(odd.toFixed(2))
    })
    it('renders rugby Bet correctly', () => {
      const sport = 'rugby'
      const localTeam = 'Stade Toulousain'
      const visitorTeam = 'RC Toulon'
      const nameBet = 'Victoire de Stade Toulousain'
      const odd = 1.3
      const status = 'won'

      const wrapper = mount(
        <ThemeContextProvider>
          <Bet sport={sport} localTeam={localTeam} visitorTeam={visitorTeam} name={nameBet} odd={odd} status={status} />
        </ThemeContextProvider>,
      )

      const BetLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const BetResultValue = wrapper.find('Text').at(4)
      const BetOddValue = wrapper.find('Text').at(6)

      expect(BetLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(BetResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('won')
      expect(BetOddValue.prop('children')).toBe(odd.toFixed(2))
    })

    it('renders basketball Bet correctly', () => {
      const sport = 'basketball'
      const localTeam = 'Golden State Warriors'
      const visitorTeam = 'Denver Nuggets'
      const nameBet = 'Victoire ou nul de Golden State Warriors'
      const odd = 1.3
      const status = 'won'

      const wrapper = mount(
        <ThemeContextProvider>
          <Bet sport={sport} localTeam={localTeam} visitorTeam={visitorTeam} name={nameBet} odd={odd} status={status} />
        </ThemeContextProvider>,
      )

      const BetLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const BetResultValue = wrapper.find('Text').at(4)
      const BetOddValue = wrapper.find('Text').at(6)

      expect(BetLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(BetResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('won')
      expect(BetOddValue.prop('children')).toBe(odd.toFixed(2))
    })
  })

  describe('Props tests', () => {
    it('renders default Bet', () => {
      const sport = 'rugby'
      const localTeam = 'Stade Toulousain'
      const visitorTeam = 'RC Toulon'
      const nameBet = 'Victoire de Stade Toulousain'
      const odd = 1.3
      const status = 'won'

      const wrapper = mount(
        <ThemeContextProvider>
          <Bet sport={sport} localTeam={localTeam} visitorTeam={visitorTeam} name={nameBet} odd={odd} status={status} />
        </ThemeContextProvider>,
      )
      const BetContainer = wrapper.find('View').first()
      const BetLabel = wrapper.find('Text').first()
      const BetResultValue = wrapper.find('Text').at(4)
      const BetOddValue = wrapper.find('Text').at(6)

      const stylesContainer = StyleSheet.flatten(BetContainer.prop('style'))
      expect(stylesContainer.marginTop).toBe(11)
      expect(stylesContainer.flexDirection).toBe('row')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesLabel = StyleSheet.flatten(BetLabel.prop('style'))
      expect(stylesLabel.color).toBe('#000000')
      expect(stylesLabel.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesLabel.fontSize).toBe(13)
      expect(stylesLabel.letterSpacing).toBe(-0.14)
      expect(stylesLabel.lineHeight).toBe(18)
      expect(stylesLabel.paddingBottom).toBe(2.5)

      const stylesResultValue = StyleSheet.flatten(BetResultValue.prop('style'))
      expect(stylesResultValue.color).toBe('#000000')
      expect(stylesResultValue.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesResultValue.fontSize).toBe(13)
      expect(stylesResultValue.letterSpacing).toBe(-0.14)
      expect(stylesResultValue.lineHeight).toBe(18)

      const stylesOddValue = StyleSheet.flatten(BetOddValue.prop('style'))
      expect(stylesOddValue.color).toBe('#000000')
      expect(stylesOddValue.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesOddValue.fontSize).toBe(13)
      expect(stylesOddValue.letterSpacing).toBe(-0.14)
      expect(stylesOddValue.lineHeight).toBe(18)
      expect(stylesOddValue.textAlign).toBe('right')
    })
  })
})
