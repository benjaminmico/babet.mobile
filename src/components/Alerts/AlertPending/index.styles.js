import styled from 'styled-components'

export const AlertPendingContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`
export const AlertPendingContentContainer = styled.View`
  background-color: ${props => props.backgroundColor};
  border-radius: 12.6px;
  width: 335px;
  height: 176px;
  justify-content: center;
  align-items: center;
`

export const AlertPendingActivityIndicator = styled.ActivityIndicator``

export const AlertPendingText = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 15px;
  letter-spacing: -0.16px;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`
