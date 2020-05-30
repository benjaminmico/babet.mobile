import styled from 'styled-components'
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export const ConfirmTicketScreenContainer = styled.View`
  margin-top: 230px;
`

export const ConfirmTicketScreenImagePreviewContainer = styled.View`
  padding-bottom: 16px;
  flex-direction: row;
`

export const ConfirmTicketScreenImageItemPreview = styled.View`
  width: 57px;
  height: 65px;
  border-width: 1px;
  border-color: #979797;
  margin-left: ${props => (props.isFirst ? 0 : 15)}px;
`

export const ConfirmTicketBankrollSelectContainer = styled.View`
  background-color: ${props => props.backgroundColor};
  width: ${windowWidth * 0.89}px;
  height: 89px;
  border-radius: 10.89px;
  padding-left: 11px;
  padding-top: 15px;
`

export const ConfirmTicketBankrollTitleHeader = styled.Text`
  font-family: 'AvenirNext-DemiBold';
  font-size: 13px;
  color: ${props => props.color};
  letter-spacing: -0.14px;
  line-height: 18px;
  text-align: left;
`
