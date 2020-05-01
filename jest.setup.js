import * as ReactNative from 'react-native'
import {JSDOM} from 'jsdom'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import XMLHttpRequest from 'xhr2'

import 'jest-styled-components'

jest.doMock('react-native', () => {
  return Object.setPrototypeOf(
    {
      NativeModules: {
        ...ReactNative.NativeModules,
      },
    },
    ReactNative,
  )
})

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const {window} = jsdom

const copyProps = (src, target) => {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop))

  Object.defineProperties(target, props)
}

global.XMLHttpRequest = XMLHttpRequest // Fetch polyfill for RN
global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}

copyProps(window, global)

configure({adapter: new Adapter()})

// Ignore React Web errors when using React Native
console.error = message => {
  return message
}
