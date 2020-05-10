import AsyncStorage from '@react-native-community/async-storage'
import React, {useContext, useEffect, useState} from 'react'
import {useDarkMode} from 'react-native-dark-mode'
import THEMES from './themes.json'

const STORAGE_KEY = 'THEME_ID'
const ThemeContext = React.createContext()

export const ThemeContextProvider = ({children}) => {
  const [themeID, setThemeID] = useState()

  const isDarkMode = useDarkMode ? useDarkMode() : false

  useEffect(() => {
    ;(async () => {
      // eslint-disable-next-line no-unused-expressions
      isDarkMode ? setThemeID(THEMES[0].key) : setThemeID(THEMES[1].key)
      // const storedThemeID = await AsyncStorage.getItem(STORAGE_KEY)
      // if (storedThemeID) setThemeID(storedThemeID)
      // // eslint-disable-next-line no-unused-expressions
      // else isDarkMode ? setThemeID(THEMES[0].key) : setThemeID(THEMES[1].key)
    })()
  }, [])

  return <ThemeContext.Provider value={{themeID, setThemeID}}>{themeID ? children : null}</ThemeContext.Provider>
}

export function withTheme(Component) {
  return props => {
    const {themeID, setThemeID} = useContext(ThemeContext)

    const getTheme = themeID => THEMES.find(theme => theme.key === themeID)
    const setTheme = themeID => {
      AsyncStorage.setItem(STORAGE_KEY, themeID)
      setThemeID(themeID)
    }

    return <Component {...props} themes={THEMES} theme={getTheme(themeID)} setTheme={setTheme} />
  }
}

export function getTheme() {
  const {themeID} = useContext(ThemeContext)

  const getThemeContent = themeID => THEMES.find(theme => theme.key === themeID)

  return getThemeContent(themeID)
}
