import styled from 'styled-components'

export const ToastContentContainer = styled.View`
  background-color: ${props => props.backgroundColor};
  shadow-offset: ${props => (props.theme === 'white' ? '0px 10px' : '0px')};
  shadow-radius: ${props => (props.theme === 'white' ? '18px' : '0px')};
  shadow-color: #c8c9ca;
  shadow-opacity: ${props => (props.theme === 'white' ? '0.5' : '0')};
  width: 100%;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 11px;
  border-radius: 12.6px;
`

export const ToastContentTitle = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 15px;
  letter-spacing: -0.15px;
  line-height: 19px;
`

export const ToastContentLabel = styled.Text`
  color: ${props => props.color};
  margin-top: 3px;
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`
