import styled from 'styled-components'

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.backgroundColor};
  border-radius: 8px;
  flex-direction: row;
  width: 84px;
  height: 28px;
  padding-top: 6px;
  padding-left: 9px;
  padding-right: 9px;
  padding-bottom: 6px;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.14px;
  text-align: center;
`
