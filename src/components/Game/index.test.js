/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import Game from '.'
import {sportEmoji} from './utils/sport'

describe.only('Game', () => {
  describe('Integrity tests', () => {
    it('renders pending Game correctly', () => {
      const sport = 'football'
      const localTeam = 'Marseille'
      const visitorTeam = 'Paris SG'
      const nameBet = 'Victoire ou nul de Marseille'
      const odd = 1.3
      const status = 'pending'

      const wrapper = mount(
        <ThemeContextProvider>
          <Game
            sport={sport}
            localTeam={localTeam}
            visitorTeam={visitorTeam}
            name={nameBet}
            odd={odd}
            status={status}
          />
        </ThemeContextProvider>,
      )

      const GameLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const GameResultValue = wrapper.find('Text').at(4)
      const GameOddValue = wrapper.find('Text').at(6)

      expect(GameLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(GameResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('pending')
      expect(GameOddValue.prop('children')).toBe(odd.toFixed(2))
    })
    it('renders lost Game correctly', () => {
      const sport = 'football'
      const localTeam = 'Marseille'
      const visitorTeam = 'Paris SG'
      const nameBet = 'Victoire ou nul de Marseille'
      const odd = 1.3
      const status = 'lost'

      const wrapper = mount(
        <ThemeContextProvider>
          <Game
            sport={sport}
            localTeam={localTeam}
            visitorTeam={visitorTeam}
            name={nameBet}
            odd={odd}
            status={status}
          />
        </ThemeContextProvider>,
      )

      const GameLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const GameResultValue = wrapper.find('Text').at(4)
      const GameOddValue = wrapper.find('Text').at(6)

      expect(GameLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(GameResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('lost')
      expect(GameOddValue.prop('children')).toBe(odd.toFixed(2))
    })
    it('renders won Game correctly', () => {
      const sport = 'football'
      const localTeam = 'Marseille'
      const visitorTeam = 'Paris SG'
      const nameBet = 'Victoire ou nul de Marseille'
      const odd = 1.3
      const status = 'won'

      const wrapper = mount(
        <ThemeContextProvider>
          <Game
            sport={sport}
            localTeam={localTeam}
            visitorTeam={visitorTeam}
            name={nameBet}
            odd={odd}
            status={status}
          />
        </ThemeContextProvider>,
      )

      const GameLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const GameResultValue = wrapper.find('Text').at(4)
      const GameOddValue = wrapper.find('Text').at(6)

      expect(GameLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(GameResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('won')
      expect(GameOddValue.prop('children')).toBe(odd.toFixed(2))
    })

    it('renders football Game correctly', () => {
      const sport = 'football'
      const localTeam = 'Marseille'
      const visitorTeam = 'Paris SG'
      const nameBet = 'Victoire ou nul de Marseille'
      const odd = 1.3
      const status = 'won'

      const wrapper = mount(
        <ThemeContextProvider>
          <Game
            sport={sport}
            localTeam={localTeam}
            visitorTeam={visitorTeam}
            name={nameBet}
            odd={odd}
            status={status}
          />
        </ThemeContextProvider>,
      )

      const GameLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const GameResultValue = wrapper.find('Text').at(4)
      const GameOddValue = wrapper.find('Text').at(6)

      expect(GameLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(GameResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('won')
      expect(GameOddValue.prop('children')).toBe(odd.toFixed(2))
    })
    it('renders tennis Game correctly', () => {
      const sport = 'tennis'
      const localTeam = 'Federer'
      const visitorTeam = 'Nadal'
      const nameBet = 'Victoire de Federer'
      const odd = 1.3
      const status = 'won'

      const wrapper = mount(
        <ThemeContextProvider>
          <Game
            sport={sport}
            localTeam={localTeam}
            visitorTeam={visitorTeam}
            name={nameBet}
            odd={odd}
            status={status}
          />
        </ThemeContextProvider>,
      )

      const GameLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const GameResultValue = wrapper.find('Text').at(4)
      const GameOddValue = wrapper.find('Text').at(6)

      expect(GameLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(GameResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('won')
      expect(GameOddValue.prop('children')).toBe(odd.toFixed(2))
    })
    it('renders rugby Game correctly', () => {
      const sport = 'rugby'
      const localTeam = 'Stade Toulousain'
      const visitorTeam = 'RC Toulon'
      const nameBet = 'Victoire de Stade Toulousain'
      const odd = 1.3
      const status = 'won'

      const wrapper = mount(
        <ThemeContextProvider>
          <Game
            sport={sport}
            localTeam={localTeam}
            visitorTeam={visitorTeam}
            name={nameBet}
            odd={odd}
            status={status}
          />
        </ThemeContextProvider>,
      )

      const GameLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const GameResultValue = wrapper.find('Text').at(4)
      const GameOddValue = wrapper.find('Text').at(6)

      expect(GameLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(GameResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('won')
      expect(GameOddValue.prop('children')).toBe(odd.toFixed(2))
    })

    it('renders basketball Game correctly', () => {
      const sport = 'basketball'
      const localTeam = 'Golden State Warriors'
      const visitorTeam = 'Denver Nuggets'
      const nameBet = 'Victoire ou nul de Golden State Warriors'
      const odd = 1.3
      const status = 'won'

      const wrapper = mount(
        <ThemeContextProvider>
          <Game
            sport={sport}
            localTeam={localTeam}
            visitorTeam={visitorTeam}
            name={nameBet}
            odd={odd}
            status={status}
          />
        </ThemeContextProvider>,
      )

      const GameLabel = wrapper.find('Text').first()
      const IconItem = wrapper.find('Icon').first()
      const GameResultValue = wrapper.find('Text').at(4)
      const GameOddValue = wrapper.find('Text').at(6)

      expect(GameLabel.prop('children')).toBe(`${sportEmoji(sport)}  ${localTeam} - ${visitorTeam}`)
      expect(GameResultValue.prop('children')).toBe(nameBet)
      expect(IconItem.prop('label')).toBe('won')
      expect(GameOddValue.prop('children')).toBe(odd.toFixed(2))
    })
  })

  describe('Props tests', () => {
    it('renders default Game', () => {
      const sport = 'rugby'
      const localTeam = 'Stade Toulousain'
      const visitorTeam = 'RC Toulon'
      const nameBet = 'Victoire de Stade Toulousain'
      const odd = 1.3
      const status = 'won'

      const wrapper = mount(
        <ThemeContextProvider>
          <Game
            sport={sport}
            localTeam={localTeam}
            visitorTeam={visitorTeam}
            name={nameBet}
            odd={odd}
            status={status}
          />
        </ThemeContextProvider>,
      )
      const GameContainer = wrapper.find('View').first()
      const GameLabel = wrapper.find('Text').first()
      const GameResultValue = wrapper.find('Text').at(4)
      const GameOddValue = wrapper.find('Text').at(6)

      const stylesContainer = StyleSheet.flatten(GameContainer.prop('style'))
      expect(stylesContainer.marginTop).toBe(11)
      expect(stylesContainer.flexDirection).toBe('row')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesLabel = StyleSheet.flatten(GameLabel.prop('style'))
      expect(stylesLabel.color).toBe('#000000')
      expect(stylesLabel.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesLabel.fontSize).toBe(13)
      expect(stylesLabel.letterSpacing).toBe(-0.14)
      expect(stylesLabel.lineHeight).toBe(18)
      expect(stylesLabel.paddingBottom).toBe(2.5)

      const stylesResultValue = StyleSheet.flatten(GameResultValue.prop('style'))
      expect(stylesResultValue.color).toBe('#000000')
      expect(stylesResultValue.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesResultValue.fontSize).toBe(13)
      expect(stylesResultValue.letterSpacing).toBe(-0.14)
      expect(stylesResultValue.lineHeight).toBe(18)

      const stylesOddValue = StyleSheet.flatten(GameOddValue.prop('style'))
      expect(stylesOddValue.color).toBe('#000000')
      expect(stylesOddValue.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesOddValue.fontSize).toBe(13)
      expect(stylesOddValue.letterSpacing).toBe(-0.14)
      expect(stylesOddValue.lineHeight).toBe(18)
      expect(stylesOddValue.textAlign).toBe('right')
    })
  })
})
