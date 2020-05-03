/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import AlertImage from '.'

describe.only('AlertImage', () => {
  describe('Integrity tests', () => {
    it('renders AlertImage correctly', () => {
      const imageLink = 'https://reactjs.org/logo-og.png'
      const questionLabel = 'Êtes-vous sur de réaliser cette action ?'
      const cancellableButtonLabel = 'Annuler'
      const actionButtonLabel = 'Supprimer'

      const wrapper = mount(
        <ThemeContextProvider>
          <AlertImage
            imageLink={imageLink}
            questionLabel={questionLabel}
            cancellableButtonLabel={cancellableButtonLabel}
            actionButtonLabel={actionButtonLabel}
          />
        </ThemeContextProvider>,
      )

      const AlertImageText = wrapper.find('Text').first()
      const AlertImageCancellableButton = wrapper.find('Button').first()
      const AlertImageActionButton = wrapper.find('Button').at(1)
      const AlertImageItem = wrapper.find('Image').first()

      expect(AlertImageItem.exists()).toBe(true)
      expect(AlertImageText.prop('children')).toBe(questionLabel)
      expect(AlertImageCancellableButton.exists()).toBe(true)
      expect(AlertImageActionButton.exists()).toBe(true)
    })
  })

  describe('Props tests', () => {
    it('renders AlertImage', () => {
      const label = 'Traitement de la photo en cours…'

      const wrapper = mount(
        <ThemeContextProvider>
          <AlertImage label={label} />
        </ThemeContextProvider>,
      )

      const AlertImageContainer = wrapper.find('View').first()
      const AlertImageContentContainer = wrapper.find('View').at(2)
      const AlertImageButtonsContainer = wrapper.find('View').at(4)
      const AlertImageItem = wrapper.find('Image').first()
      const AlertImageText = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(AlertImageContainer.prop('style'))
      expect(stylesContainer.position).toBe('absolute')
      expect(stylesContainer.top).toBe(0)
      expect(stylesContainer.left).toBe(0)
      expect(stylesContainer.right).toBe(0)
      expect(stylesContainer.bottom).toBe(0)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesContentContainer = StyleSheet.flatten(AlertImageContentContainer.prop('style'))
      expect(stylesContentContainer.backgroundColor).toBe('#FFFFFF')
      expect(stylesContentContainer.borderRadius).toBe(12.6)
      expect(stylesContentContainer.width).toBe(335)
      expect(stylesContentContainer.justifyContent).toBe('center')
      expect(stylesContentContainer.alignItems).toBe('center')

      const stylesButtonsContainer = StyleSheet.flatten(AlertImageButtonsContainer.prop('style'))
      expect(stylesButtonsContainer.position).toBe('absolute')
      expect(stylesButtonsContainer.width).toBe(192)
      expect(stylesButtonsContainer.left).toBe(120)
      expect(stylesButtonsContainer.bottom).toBe(15)
      expect(stylesButtonsContainer.flexDirection).toBe('row')
      expect(stylesButtonsContainer.justifyContent).toBe('space-between')
      expect(stylesContentContainer.alignItems).toBe('center')

      const stylesImage = StyleSheet.flatten(AlertImageItem.prop('style'))
      expect(stylesImage.width).toBe(195)
      expect(stylesImage.height).toBe(259)

      const stylesText = StyleSheet.flatten(AlertImageText.prop('style'))
      expect(stylesText.color).toBe('#000000')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(15)
      expect(stylesText.letterSpacing).toBe(-0.16)
      expect(stylesText.marginBottom).toBe(37)
      expect(stylesText.paddingTop).toBe(40)
      expect(stylesText.paddingLeft).toBe(20)
      expect(stylesText.paddingRight).toBe(20)
      expect(stylesText.textAlign).toBe('center')
    })
  })
})
