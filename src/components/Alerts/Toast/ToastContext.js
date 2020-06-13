import React, {createContext, useState, useEffect, useRef, useCallback} from 'react'

/**
 * toast is a title && a message
 * type are null or error
 * visible false is init state
 */
const initialToast = {
  title: '',
  message: '',
  type: null,
  visible: false,
}

// create Toast context
export const ToastContext = createContext({})

// Toast provider to call toast anywhere on the app
export const ToastProvider = ({children}) => {
  const [toast, setToast] = useState(initialToast)
  const timeout = useRef()

  // show toast by passing visible props to true
  const show = useCallback(args => {
    setToast({...initialToast, visible: true, ...args})
    console.log('error', args.error)
  }, [])

  // hide by passing visible props to false
  const hide = useCallback(() => {
    setToast({...toast, visible: false})
  }, [toast])

  // hide toast after 3000ms of visible state && clear timeout
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (toast.visible) {
      timeout.current = setTimeout(hide, 3000)
      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current)
        }
      }
    }
  }, [hide, toast])

  // children value supposed to be Toast component
  return (
    <ToastContext.Provider
      value={{
        hide,
        show,
        toast,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}
