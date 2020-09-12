/**
 * @jest-environment jsdom
 */
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import moment from 'moment'
import React from 'react'
import {StyleSheet} from 'react-native'
import Ticket from '.'

describe.only('Ticket', () => {
  describe('Integrity tests', () => {
    it('renders pending Ticket correctly', () => {
      const updatedDate = 1588707873

      const stake = 15

      const globalOdd = 9.8

      const total = 147

      const status = 'pending'

      const wrapper = mount(
        <ThemeContextProvider>
          <Ticket
            updatedDate={updatedDate}
            bets={[]}
            stake={stake}
            globalOdd={globalOdd}
            total={total}
            status={status}
          />
        </ThemeContextProvider>,
      )

      const TicketLabelText = wrapper.find('Text').first()
      const TicketStakeLabelText = wrapper.find('Text').at(3)
      const TicketStakeValueText = wrapper.find('Text').at(4)
      const TicketGlobalOddLabelText = wrapper.find('Text').at(6)
      const TicketGlobalOddValueText = wrapper.find('Text').at(8)
      const TicketResultLabelText = wrapper.find('Text').at(10)
      const TicketResultValueText = wrapper.find('Text').at(12)

      expect(TicketLabelText.prop('children')).toBe(`${moment(updatedDate * 1000).calendar()} - Combiné`)
      expect(TicketStakeLabelText.prop('children')).toBe(`Mise totale`)
      expect(TicketStakeValueText.prop('children')).toBe(`€15.00`)
      expect(TicketGlobalOddLabelText.prop('children')).toBe(`Côte totale`)
      expect(TicketGlobalOddValueText.prop('children')).toBe(`9.80`)
      expect(TicketResultLabelText.prop('children')).toBe(`Gains potentiels`)
      expect(TicketResultValueText.prop('children')).toBe(`€147.00`)
    })
    it('renders lost Ticket correctly', () => {
      const updatedDate = 1588707873

      const stake = 15

      const globalOdd = 9.8

      const total = 147

      const status = 'lost'

      const wrapper = mount(
        <ThemeContextProvider>
          <Ticket
            updatedDate={updatedDate}
            bets={[]}
            stake={stake}
            globalOdd={globalOdd}
            total={total}
            status={status}
          />
        </ThemeContextProvider>,
      )

      const TicketLabelText = wrapper.find('Text').first()
      const TicketStakeLabelText = wrapper.find('Text').at(3)
      const TicketStakeValueText = wrapper.find('Text').at(4)
      const TicketGlobalOddLabelText = wrapper.find('Text').at(6)
      const TicketGlobalOddValueText = wrapper.find('Text').at(8)
      const TicketResultLabelText = wrapper.find('Text').at(10)
      const TicketResultValueText = wrapper.find('Text').at(12)

      expect(TicketLabelText.prop('children')).toBe(`${moment(updatedDate * 1000).calendar()} - Combiné`)
      expect(TicketStakeLabelText.prop('children')).toBe(`Mise totale`)
      expect(TicketStakeValueText.prop('children')).toBe(`€15.00`)
      expect(TicketGlobalOddLabelText.prop('children')).toBe(`Côte totale`)
      expect(TicketGlobalOddValueText.prop('children')).toBe(`9.80`)
      expect(TicketResultLabelText.prop('children')).toBe(`Somme perdue`)
      expect(TicketResultValueText.prop('children')).toBe(`€15.00`)
    })
    it('renders won Ticket correctly', () => {
      const updatedDate = 1588707873

      const stake = 15

      const globalOdd = 9.8

      const total = 147

      const status = 'won'

      const wrapper = mount(
        <ThemeContextProvider>
          <Ticket
            updatedDate={updatedDate}
            bets={[]}
            stake={stake}
            globalOdd={globalOdd}
            total={total}
            status={status}
          />
        </ThemeContextProvider>,
      )

      const TicketLabelText = wrapper.find('Text').first()
      const TicketStakeLabelText = wrapper.find('Text').at(3)
      const TicketStakeValueText = wrapper.find('Text').at(4)
      const TicketGlobalOddLabelText = wrapper.find('Text').at(6)
      const TicketGlobalOddValueText = wrapper.find('Text').at(8)
      const TicketResultLabelText = wrapper.find('Text').at(10)
      const TicketResultValueText = wrapper.find('Text').at(12)

      expect(TicketLabelText.prop('children')).toBe(`${moment(updatedDate * 1000).calendar()} - Combiné`)
      expect(TicketStakeLabelText.prop('children')).toBe(`Mise totale`)
      expect(TicketStakeValueText.prop('children')).toBe(`€15.00`)
      expect(TicketGlobalOddLabelText.prop('children')).toBe(`Côte totale`)
      expect(TicketGlobalOddValueText.prop('children')).toBe(`9.80`)
      expect(TicketResultLabelText.prop('children')).toBe(`Gains encaissés`)
      expect(TicketResultValueText.prop('children')).toBe(`€147.00`)
    })
  })

  describe('Props tests', () => {
    it('renders pending Ticket', () => {
      const updatedDate = 1588707873

      const stake = 15

      const globalOdd = 9.8

      const total = 147

      const status = 'pending'

      const windowWidth = 375

      const wrapper = mount(
        <ThemeContextProvider>
          <Ticket
            updatedDate={updatedDate}
            bets={[]}
            stake={stake}
            globalOdd={globalOdd}
            total={total}
            status={status}
          />
        </ThemeContextProvider>,
      )

      const TicketContainer = wrapper.find('View').first()
      const TicketContainerHeader = wrapper.find('View').at(2)
      const TicketContentBets = wrapper.find('View').at(9)
      const TicketKPIContainer = wrapper.find('View').at(10)
      const TicketLabelText = wrapper.find('Text').first()
      const TicketStakeLabelText = wrapper.find('Text').at(3)
      const TicketStakeValueText = wrapper.find('Text').at(4)
      const TicketGlobalOddLabelText = wrapper.find('Text').at(6)
      const TicketGlobalOddValueText = wrapper.find('Text').at(8)
      const TicketResultLabelText = wrapper.find('Text').at(10)
      const TicketResultValueText = wrapper.find('Text').at(12)

      const stylesContainer = StyleSheet.flatten(TicketContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#FFFFFF')
      expect(stylesContainer.width).toBe(windowWidth * 0.89 * 2)
      expect(stylesContainer.borderRadius).toBe(12.6)
      expect(stylesContainer.shadowRadius).toBe(18)
      expect(stylesContainer.shadowOpacity).toBe(0.5)

      const stylesContainerHeader = StyleSheet.flatten(TicketContainerHeader.prop('style'))
      expect(stylesContainerHeader.flexDirection).toBe('row')
      expect(stylesContainerHeader.alignItems).toBe('center')
      expect(stylesContainerHeader.width).toBe('100%')
      expect(stylesContainerHeader.height).toBe(37)
      expect(stylesContainerHeader.paddingLeft).toBe(10)
      expect(stylesContainerHeader.borderBottomWidth).toBe(1)
      expect(stylesContainerHeader.borderColor).toBe('rgba(173, 173, 173, 0.32)')

      const stylesContentBets = StyleSheet.flatten(TicketContentBets.prop('style'))
      expect(stylesContentBets.backgroundColor).toBe('#7C7C7C')
      expect(stylesContentBets.height).toBe(75)
      expect(stylesContentBets.width).toBe('100%')
      expect(stylesContentBets.marginTop).toBe(11)
      expect(stylesContentBets.paddingTop).toBe(7)
      expect(stylesContentBets.paddingBottom).toBe(8)
      expect(stylesContentBets.alignItems).toBe('center')
      expect(stylesContentBets.justifyContent).toBe('space-between')
      expect(stylesContentBets.borderBottomLeftRadius).toBe(12.6)
      expect(stylesContentBets.borderBottomRightRadius).toBe(12.6)

      const stylesKPIContainer = StyleSheet.flatten(TicketKPIContainer.prop('style'))
      expect(stylesKPIContainer.flexDirection).toBe('row')
      expect(stylesKPIContainer.alignItems).toBe('center')
      expect(stylesKPIContainer.width).toBe('100%')
      expect(stylesKPIContainer.paddingLeft).toBe(22)

      const stylesLabelText = StyleSheet.flatten(TicketLabelText.prop('style'))
      expect(stylesLabelText.color).toBe('#ADADAD')
      expect(stylesLabelText.maxWidth).toBe(221)
      expect(stylesLabelText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesLabelText.fontSize).toBe(13)
      expect(stylesLabelText.letterSpacing).toBe(-0.14)
      expect(stylesLabelText.lineHeight).toBe(18)

      const stylesStakeLabelText = StyleSheet.flatten(TicketStakeLabelText.prop('style'))
      expect(stylesStakeLabelText.color).toBe('#FFFFFF')
      expect(stylesStakeLabelText.right).toBe(12)
      expect(stylesStakeLabelText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesStakeLabelText.fontSize).toBe(13)
      expect(stylesStakeLabelText.letterSpacing).toBe(-0.14)
      expect(stylesStakeLabelText.lineHeight).toBe(18)

      const stylesStakeValueText = StyleSheet.flatten(TicketStakeValueText.prop('style'))
      expect(stylesStakeValueText.color).toBe('#FFFFFF')
      expect(stylesStakeValueText.right).toBe(13)
      expect(stylesStakeValueText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesStakeValueText.fontSize).toBe(13)
      expect(stylesStakeValueText.letterSpacing).toBe(-0.14)
      expect(stylesStakeValueText.lineHeight).toBe(18)

      const stylesGlobalOddLabelText = StyleSheet.flatten(TicketGlobalOddLabelText.prop('style'))
      expect(stylesGlobalOddLabelText.color).toBe('#FFFFFF')
      expect(stylesGlobalOddLabelText.right).toBe(12)
      expect(stylesGlobalOddLabelText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesGlobalOddLabelText.fontSize).toBe(13)
      expect(stylesGlobalOddLabelText.letterSpacing).toBe(-0.14)
      expect(stylesGlobalOddLabelText.lineHeight).toBe(18)

      const stylesGlobalOddValueText = StyleSheet.flatten(TicketGlobalOddValueText.prop('style'))
      expect(stylesGlobalOddValueText.color).toBe('#FFFFFF')
      expect(stylesGlobalOddValueText.right).toBe(13)
      expect(stylesGlobalOddValueText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesGlobalOddValueText.fontSize).toBe(13)
      expect(stylesGlobalOddValueText.letterSpacing).toBe(-0.14)
      expect(stylesGlobalOddValueText.lineHeight).toBe(18)

      const stylesResultLabelText = StyleSheet.flatten(TicketResultLabelText.prop('style'))
      expect(stylesResultLabelText.color).toBe('#FFFFFF')
      expect(stylesResultLabelText.right).toBe(12)
      expect(stylesResultLabelText.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesResultLabelText.fontSize).toBe(13)
      expect(stylesResultLabelText.letterSpacing).toBe(-0.14)
      expect(stylesResultLabelText.lineHeight).toBe(18)

      const stylesResultValueText = StyleSheet.flatten(TicketResultValueText.prop('style'))
      expect(stylesResultValueText.color).toBe('#FFFFFF')
      expect(stylesResultValueText.right).toBe(13)
      expect(stylesResultValueText.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesResultValueText.fontSize).toBe(13)
      expect(stylesResultValueText.letterSpacing).toBe(-0.14)
      expect(stylesResultValueText.lineHeight).toBe(18)
    })
    it('renders lost Ticket', () => {
      const updatedDate = 1588707873

      const stake = 15

      const globalOdd = 9.8

      const total = 147

      const status = 'lost'

      const windowWidth = 375

      const wrapper = mount(
        <ThemeContextProvider>
          <Ticket
            updatedDate={updatedDate}
            bets={[]}
            stake={stake}
            globalOdd={globalOdd}
            total={total}
            status={status}
          />
        </ThemeContextProvider>,
      )

      const TicketContainer = wrapper.find('View').first()
      const TicketContainerHeader = wrapper.find('View').at(2)
      const TicketContentBets = wrapper.find('View').at(9)
      const TicketKPIContainer = wrapper.find('View').at(10)
      const TicketLabelText = wrapper.find('Text').first()
      const TicketStakeLabelText = wrapper.find('Text').at(3)
      const TicketStakeValueText = wrapper.find('Text').at(4)
      const TicketGlobalOddLabelText = wrapper.find('Text').at(6)
      const TicketGlobalOddValueText = wrapper.find('Text').at(8)
      const TicketResultLabelText = wrapper.find('Text').at(10)
      const TicketResultValueText = wrapper.find('Text').at(12)

      const stylesContainer = StyleSheet.flatten(TicketContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#FFFFFF')
      expect(stylesContainer.width).toBe(windowWidth * 0.89 * 2)
      expect(stylesContainer.borderRadius).toBe(12.6)
      expect(stylesContainer.shadowRadius).toBe(18)
      expect(stylesContainer.shadowOpacity).toBe(0.5)

      const stylesContainerHeader = StyleSheet.flatten(TicketContainerHeader.prop('style'))
      expect(stylesContainerHeader.flexDirection).toBe('row')
      expect(stylesContainerHeader.alignItems).toBe('center')
      expect(stylesContainerHeader.width).toBe('100%')
      expect(stylesContainerHeader.height).toBe(37)
      expect(stylesContainerHeader.paddingLeft).toBe(10)
      expect(stylesContainerHeader.borderBottomWidth).toBe(1)
      expect(stylesContainerHeader.borderColor).toBe('rgba(173, 173, 173, 0.32)')

      const stylesContentBets = StyleSheet.flatten(TicketContentBets.prop('style'))
      expect(stylesContentBets.backgroundColor).toBe('#CA1010')
      expect(stylesContentBets.height).toBe(75)
      expect(stylesContentBets.width).toBe('100%')
      expect(stylesContentBets.marginTop).toBe(11)
      expect(stylesContentBets.paddingTop).toBe(7)
      expect(stylesContentBets.paddingBottom).toBe(8)
      expect(stylesContentBets.alignItems).toBe('center')
      expect(stylesContentBets.justifyContent).toBe('space-between')
      expect(stylesContentBets.borderBottomLeftRadius).toBe(12.6)
      expect(stylesContentBets.borderBottomRightRadius).toBe(12.6)

      const stylesKPIContainer = StyleSheet.flatten(TicketKPIContainer.prop('style'))
      expect(stylesKPIContainer.flexDirection).toBe('row')
      expect(stylesKPIContainer.alignItems).toBe('center')
      expect(stylesKPIContainer.width).toBe('100%')
      expect(stylesKPIContainer.paddingLeft).toBe(22)

      const stylesLabelText = StyleSheet.flatten(TicketLabelText.prop('style'))
      expect(stylesLabelText.color).toBe('#ADADAD')
      expect(stylesLabelText.maxWidth).toBe(221)
      expect(stylesLabelText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesLabelText.fontSize).toBe(13)
      expect(stylesLabelText.letterSpacing).toBe(-0.14)
      expect(stylesLabelText.lineHeight).toBe(18)

      const stylesStakeLabelText = StyleSheet.flatten(TicketStakeLabelText.prop('style'))
      expect(stylesStakeLabelText.color).toBe('#FFFFFF')
      expect(stylesStakeLabelText.right).toBe(12)
      expect(stylesStakeLabelText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesStakeLabelText.fontSize).toBe(13)
      expect(stylesStakeLabelText.letterSpacing).toBe(-0.14)
      expect(stylesStakeLabelText.lineHeight).toBe(18)

      const stylesStakeValueText = StyleSheet.flatten(TicketStakeValueText.prop('style'))
      expect(stylesStakeValueText.color).toBe('#FFFFFF')
      expect(stylesStakeValueText.right).toBe(13)
      expect(stylesStakeValueText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesStakeValueText.fontSize).toBe(13)
      expect(stylesStakeValueText.letterSpacing).toBe(-0.14)
      expect(stylesStakeValueText.lineHeight).toBe(18)

      const stylesGlobalOddLabelText = StyleSheet.flatten(TicketGlobalOddLabelText.prop('style'))
      expect(stylesGlobalOddLabelText.color).toBe('#FFFFFF')
      expect(stylesGlobalOddLabelText.right).toBe(12)
      expect(stylesGlobalOddLabelText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesGlobalOddLabelText.fontSize).toBe(13)
      expect(stylesGlobalOddLabelText.letterSpacing).toBe(-0.14)
      expect(stylesGlobalOddLabelText.lineHeight).toBe(18)

      const stylesGlobalOddValueText = StyleSheet.flatten(TicketGlobalOddValueText.prop('style'))
      expect(stylesGlobalOddValueText.color).toBe('#FFFFFF')
      expect(stylesGlobalOddValueText.right).toBe(13)
      expect(stylesGlobalOddValueText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesGlobalOddValueText.fontSize).toBe(13)
      expect(stylesGlobalOddValueText.letterSpacing).toBe(-0.14)
      expect(stylesGlobalOddValueText.lineHeight).toBe(18)

      const stylesResultLabelText = StyleSheet.flatten(TicketResultLabelText.prop('style'))
      expect(stylesResultLabelText.color).toBe('#FFFFFF')
      expect(stylesResultLabelText.right).toBe(12)
      expect(stylesResultLabelText.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesResultLabelText.fontSize).toBe(13)
      expect(stylesResultLabelText.letterSpacing).toBe(-0.14)
      expect(stylesResultLabelText.lineHeight).toBe(18)

      const stylesResultValueText = StyleSheet.flatten(TicketResultValueText.prop('style'))
      expect(stylesResultValueText.color).toBe('#FFFFFF')
      expect(stylesResultValueText.right).toBe(13)
      expect(stylesResultValueText.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesResultValueText.fontSize).toBe(13)
      expect(stylesResultValueText.letterSpacing).toBe(-0.14)
      expect(stylesResultValueText.lineHeight).toBe(18)
    })
    it('renders won Ticket', () => {
      const updatedDate = 1588707873

      const stake = 15

      const globalOdd = 9.8

      const total = 147

      const status = 'won'

      const windowWidth = 375

      const wrapper = mount(
        <ThemeContextProvider>
          <Ticket
            updatedDate={updatedDate}
            bets={[]}
            stake={stake}
            globalOdd={globalOdd}
            total={total}
            status={status}
          />
        </ThemeContextProvider>,
      )

      const TicketContainer = wrapper.find('View').first()
      const TicketContainerHeader = wrapper.find('View').at(2)
      const TicketContentBets = wrapper.find('View').at(9)
      const TicketKPIContainer = wrapper.find('View').at(10)
      const TicketLabelText = wrapper.find('Text').first()
      const TicketStakeLabelText = wrapper.find('Text').at(3)
      const TicketStakeValueText = wrapper.find('Text').at(4)
      const TicketGlobalOddLabelText = wrapper.find('Text').at(6)
      const TicketGlobalOddValueText = wrapper.find('Text').at(8)
      const TicketResultLabelText = wrapper.find('Text').at(10)
      const TicketResultValueText = wrapper.find('Text').at(12)

      const stylesContainer = StyleSheet.flatten(TicketContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#FFFFFF')
      expect(stylesContainer.width).toBe(windowWidth * 0.89 * 2)
      expect(stylesContainer.borderRadius).toBe(12.6)
      expect(stylesContainer.shadowRadius).toBe(18)
      expect(stylesContainer.shadowOpacity).toBe(0.5)

      const stylesContainerHeader = StyleSheet.flatten(TicketContainerHeader.prop('style'))
      expect(stylesContainerHeader.flexDirection).toBe('row')
      expect(stylesContainerHeader.alignItems).toBe('center')
      expect(stylesContainerHeader.width).toBe('100%')
      expect(stylesContainerHeader.height).toBe(37)
      expect(stylesContainerHeader.paddingLeft).toBe(10)
      expect(stylesContainerHeader.borderBottomWidth).toBe(1)
      expect(stylesContainerHeader.borderColor).toBe('rgba(173, 173, 173, 0.32)')

      const stylesContentBets = StyleSheet.flatten(TicketContentBets.prop('style'))
      expect(stylesContentBets.backgroundColor).toBe('#14B916')
      expect(stylesContentBets.height).toBe(75)
      expect(stylesContentBets.width).toBe('100%')
      expect(stylesContentBets.marginTop).toBe(11)
      expect(stylesContentBets.paddingTop).toBe(7)
      expect(stylesContentBets.paddingBottom).toBe(8)
      expect(stylesContentBets.alignItems).toBe('center')
      expect(stylesContentBets.justifyContent).toBe('space-between')
      expect(stylesContentBets.borderBottomLeftRadius).toBe(12.6)
      expect(stylesContentBets.borderBottomRightRadius).toBe(12.6)

      const stylesKPIContainer = StyleSheet.flatten(TicketKPIContainer.prop('style'))
      expect(stylesKPIContainer.flexDirection).toBe('row')
      expect(stylesKPIContainer.alignItems).toBe('center')
      expect(stylesKPIContainer.width).toBe('100%')
      expect(stylesKPIContainer.paddingLeft).toBe(22)

      const stylesLabelText = StyleSheet.flatten(TicketLabelText.prop('style'))
      expect(stylesLabelText.color).toBe('#ADADAD')
      expect(stylesLabelText.maxWidth).toBe(221)
      expect(stylesLabelText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesLabelText.fontSize).toBe(13)
      expect(stylesLabelText.letterSpacing).toBe(-0.14)
      expect(stylesLabelText.lineHeight).toBe(18)

      const stylesStakeLabelText = StyleSheet.flatten(TicketStakeLabelText.prop('style'))
      expect(stylesStakeLabelText.color).toBe('#FFFFFF')
      expect(stylesStakeLabelText.right).toBe(12)
      expect(stylesStakeLabelText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesStakeLabelText.fontSize).toBe(13)
      expect(stylesStakeLabelText.letterSpacing).toBe(-0.14)
      expect(stylesStakeLabelText.lineHeight).toBe(18)

      const stylesStakeValueText = StyleSheet.flatten(TicketStakeValueText.prop('style'))
      expect(stylesStakeValueText.color).toBe('#FFFFFF')
      expect(stylesStakeValueText.right).toBe(13)
      expect(stylesStakeValueText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesStakeValueText.fontSize).toBe(13)
      expect(stylesStakeValueText.letterSpacing).toBe(-0.14)
      expect(stylesStakeValueText.lineHeight).toBe(18)

      const stylesGlobalOddLabelText = StyleSheet.flatten(TicketGlobalOddLabelText.prop('style'))
      expect(stylesGlobalOddLabelText.color).toBe('#FFFFFF')
      expect(stylesGlobalOddLabelText.right).toBe(12)
      expect(stylesGlobalOddLabelText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesGlobalOddLabelText.fontSize).toBe(13)
      expect(stylesGlobalOddLabelText.letterSpacing).toBe(-0.14)
      expect(stylesGlobalOddLabelText.lineHeight).toBe(18)

      const stylesGlobalOddValueText = StyleSheet.flatten(TicketGlobalOddValueText.prop('style'))
      expect(stylesGlobalOddValueText.color).toBe('#FFFFFF')
      expect(stylesGlobalOddValueText.right).toBe(13)
      expect(stylesGlobalOddValueText.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesGlobalOddValueText.fontSize).toBe(13)
      expect(stylesGlobalOddValueText.letterSpacing).toBe(-0.14)
      expect(stylesGlobalOddValueText.lineHeight).toBe(18)

      const stylesResultLabelText = StyleSheet.flatten(TicketResultLabelText.prop('style'))
      expect(stylesResultLabelText.color).toBe('#FFFFFF')
      expect(stylesResultLabelText.right).toBe(12)
      expect(stylesResultLabelText.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesResultLabelText.fontSize).toBe(13)
      expect(stylesResultLabelText.letterSpacing).toBe(-0.14)
      expect(stylesResultLabelText.lineHeight).toBe(18)

      const stylesResultValueText = StyleSheet.flatten(TicketResultValueText.prop('style'))
      expect(stylesResultValueText.color).toBe('#FFFFFF')
      expect(stylesResultValueText.right).toBe(13)
      expect(stylesResultValueText.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesResultValueText.fontSize).toBe(13)
      expect(stylesResultValueText.letterSpacing).toBe(-0.14)
      expect(stylesResultValueText.lineHeight).toBe(18)
    })
  })
})
