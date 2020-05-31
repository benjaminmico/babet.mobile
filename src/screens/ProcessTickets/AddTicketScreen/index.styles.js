import styled from 'styled-components'

export const AddTicketScreenSnapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 106px;
  align-self: center;
  width: 65px;
  height: 65px;
  border: 5px solid #ffffff;
  border-radius: 32.5px;
`

export const AddTicketScreenSendButton = styled.View`
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
