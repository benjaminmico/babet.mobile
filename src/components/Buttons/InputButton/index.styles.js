import styled from 'styled-components'

export const InputButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.backgroundColor};
  width: 339px;
  height: 53px;
  padding-top: 6px;
  padding-left: 9px;
  padding-right: 9px;
  padding-bottom: 6px;
  justify-content: center;
  align-items: center;
`

export const InputButtonText = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-Bold';
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 1px;
  text-align: center;
`
