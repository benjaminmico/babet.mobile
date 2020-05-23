/**
 * Sample React Native Share Extension
 * @flow
 */

import React, {useEffect} from 'react'
import {View} from 'react-native'
import ShareExtension from 'react-native-share-extension'

const Share = () => {
  useEffect(() => {
    console.log('share', ShareExtension.data())
  })
  return <View style={{flex: 1, zIndex: 1000, backgroundColor: 'green'}} />
}

export default Share
