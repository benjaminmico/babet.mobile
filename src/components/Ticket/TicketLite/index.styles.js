import styled from 'styled-components'
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export const TicketLiteContainer = styled.View`
  width: ${windowWidth * 0.89}px;
  height: 80px;
  flex-direction: row;
  align-items: center;
`

export const TicketLiteContentContainer = styled.View`
  margin-left: 25px;
  width: ${windowWidth * 0.55}px;
`

export const TicketLiteContentText = styled.Text`
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  letter-spacing: -0.14px;
`

export const TicketLiteDateText = styled.Text`
  font-family: 'AvenirNext-Medium';
  color: ${props => props.color};
  margin-top: 5px;
  font-size: 10px;
  letter-spacing: -0.11px;
`

export const TicketLiteRightContainer = styled.View`
  justify-content: flex-end;
  flex: 1;
`

export const TicketLiteRightText = styled.Text`
  font-family: 'AvenirNext-Medium';
  color: ${props => props.color};
  font-size: 13px;
  letter-spacing: -0.14px;
  text-align: right;
`
