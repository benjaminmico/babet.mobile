import styled from 'styled-components'

export const InputContainer = styled.View`
  border-bottom-width: 1px;
  border-color: rgba(220, 218, 218, 0.5);
  width: 100%;
  height: 72px;
  padding-top: 11px;
  padding-left: 21.5px;
  padding-bottom: 11px;
`

export const InputLabel = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
  text-align: left;
`

export const InputValue = styled.TextInput`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 15px;
  letter-spacing: -0.16px;
  line-height: 20px;
  margin-top: 8px;
  text-align: left;
`
