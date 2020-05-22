import styled from 'styled-components'

export const ToastContainer = styled.View`
  position: absolute;
  top: 50px;
  right: 0px;
  left: 0px;
  padding-left: 6px;
  padding-right: 6px;
`
export const ToastContentContainer = styled.View`
  background-color: ${props => props.backgroundColor};
  shadow-offset: ${props => (props.theme === 'white' ? '0px 10px' : '0px')};
  shadow-radius: ${props => (props.theme === 'white' ? '18px' : '0px')};
  shadow-color: #c8c9ca;
  shadow-opacity: ${props => (props.theme === 'white' ? '0.5' : '0')};
  width: 100%;
  height: 78px;
  border-radius: 12.6px;
`
