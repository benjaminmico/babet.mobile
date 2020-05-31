import styled from 'styled-components'
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export const ConfirmTicketScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`

export const ConfirmTicketScreenImagePreviewContainer = styled.View`
  flex-direction: row;
  width: 100%;
  width: ${windowWidth * 0.89}px;
  padding-bottom: 14px;
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
  height: 89px;
  width: ${windowWidth * 0.89}px;
  border-radius: 10.89px;
  padding-left: 11px;
  padding-top: 15px;
`

export const ConfirmTicketScreenSendButton = styled.TouchableOpacity`
  background-color: ${props => props.backgroundColor};
  position: absolute;
  bottom: 25px;
  right: 17px;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  border-radius: 34px;
`

export const ConfirmTicketBankrollTitleHeader = styled.Text`
  font-family: 'AvenirNext-DemiBold';
  font-size: 13px;
  color: ${props => props.color};
  letter-spacing: -0.14px;
  line-height: 18px;
  text-align: left;
`
