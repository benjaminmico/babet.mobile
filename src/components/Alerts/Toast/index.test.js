/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import AlertQuestion from '.'

describe.only('AlertQuestion', () => {
  describe('Integrity tests', () => {
    it('renders AlertQuestion correctly', () => {
      const questionLabel = 'Êtes-vous sur de réaliser cette action ?'
      const cancellableButtonLabel = 'Annuler'
      const actionButtonLabel = 'Supprimer'

      const wrapper = mount(
        <ThemeContextProvider>
          <AlertQuestion
            questionLabel={questionLabel}
            cancellableButtonLabel={cancellableButtonLabel}
            actionButtonLabel={actionButtonLabel}
          />
        </ThemeContextProvider>,
      )

      const AlertQuestionText = wrapper.find('Text').first()
      const AlertQuestionCancellableButton = wrapper.find('Button').first()
      const AlertQuestionActionButton = wrapper.find('Button').at(1)
      expect(AlertQuestionText.prop('children')).toBe(questionLabel)
      expect(AlertQuestionCancellableButton.exists()).toBe(true)
      expect(AlertQuestionActionButton.exists()).toBe(true)
    })
  })

  describe('Props tests', () => {
    it('renders AlertQuestion', () => {
      const label = 'Traitement de la photo en cours…'

      const wrapper = mount(
        <ThemeContextProvider>
          <AlertQuestion label={label} />
        </ThemeContextProvider>,
      )

      const AlertQuestionContainer = wrapper.find('View').first()
      const AlertQuestionContentContainer = wrapper.find('View').at(2)
      const AlertQuestionButtonsContainer = wrapper.find('View').at(4)
      const AlertQuestionText = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(AlertQuestionContainer.prop('style'))
      expect(stylesContainer.position).toBe('absolute')
      expect(stylesContainer.top).toBe(0)
      expect(stylesContainer.left).toBe(0)
      expect(stylesContainer.right).toBe(0)
      expect(stylesContainer.bottom).toBe(0)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesContentContainer = StyleSheet.flatten(AlertQuestionContentContainer.prop('style'))
      expect(stylesContentContainer.backgroundColor).toBe('#FFFFFF')
      expect(stylesContentContainer.borderRadius).toBe(12.6)
      expect(stylesContentContainer.width).toBe(335)
      expect(stylesContentContainer.height).toBe(176)
      expect(stylesContentContainer.justifyContent).toBe('center')
      expect(stylesContentContainer.alignItems).toBe('center')

      const stylesButtonsContainer = StyleSheet.flatten(AlertQuestionButtonsContainer.prop('style'))
      expect(stylesButtonsContainer.position).toBe('absolute')
      expect(stylesButtonsContainer.width).toBe(192)
      expect(stylesButtonsContainer.left).toBe(120)
      expect(stylesButtonsContainer.bottom).toBe(15)
      expect(stylesButtonsContainer.flexDirection).toBe('row')
      expect(stylesButtonsContainer.justifyContent).toBe('space-between')
      expect(stylesContentContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(AlertQuestionText.prop('style'))
      expect(stylesText.color).toBe('#000000')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(15)
      expect(stylesText.letterSpacing).toBe(-0.16)
      expect(stylesText.marginBottom).toBe(37)
      expect(stylesText.paddingLeft).toBe(20)
      expect(stylesText.paddingRight).toBe(20)
      expect(stylesText.textAlign).toBe('center')
    })
  })
})
