// @flow

import {withTheme} from '@core/themeProvider'
import React, {useEffect, useContext, useRef} from 'react'
import {Animated, Easing, StyleSheet} from 'react-native'
import {ToastContext} from './ToastContext'

import {ToastContentContainer, ToastContentTitle, ToastContentLabel} from './index.styles'

type Props = {
  // theme
  theme: Object,
}

const Toast = ({theme}: Props) => {
  // call toast context
  const {toast} = useContext(ToastContext)

  // init animation to y : - 100 to hide component
  const translateYRef = useRef(new Animated.Value(-100))

  // toast translate y with a 300ms easy speed
  useEffect(() => {
    if (toast?.visible) {
      Animated.timing(translateYRef.current, {
        duration: 300,
        easing: Easing.ease,
        toValue: 50,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(translateYRef.current, {
        duration: 450,
        easing: Easing.ease,
        toValue: -100,
        useNativeDriver: true,
      }).start()
    }
  }, [toast])

  // get theme props
  const {
    key: keyTheme,
    colors: {
      components: {backgroundContainer},
      texts: {text: textColor, description: descriptionColor},
      palette: {white: errorTextColor, error: errorBackgroundContainer},
    },
  } = theme

  // toastContainer style for Animated.View (better to handle this without styled component)
  const styles = StyleSheet.create({
    toastContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      paddingLeft: 6,
      paddingRight: 6,
    },
  })

  /**
   * render toast
   * call toast title && toast message
   * call toast type to adapt style in case of type === error
   * */
  return (
    <Animated.View style={[styles.toastContainer, {transform: [{translateY: translateYRef.current}]}]}>
      <ToastContentContainer
        theme={keyTheme && toast.type === 'error'}
        backgroundColor={toast.type === 'error' ? errorBackgroundContainer : backgroundContainer}
      >
        <ToastContentTitle color={toast.type === 'error' ? errorTextColor : textColor}>{toast.title}</ToastContentTitle>
        <ToastContentLabel numberOfLines={2} color={toast.type === 'error' ? errorTextColor : descriptionColor}>
          {toast.message}
        </ToastContentLabel>
      </ToastContentContainer>
    </Animated.View>
  )
}

export default withTheme(Toast)
