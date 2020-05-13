import styled from 'styled-components'

export const InputContainer = styled.TouchableOpacity`
  border-bottom-width: ${props => (props.theme === 'dark' ? 0 : 1)}px;
  border-color: ${props => (props.theme === 'dark' ? 'transparent' : 'rgba(220, 218, 218, 0.5)')};

  ${'' /* border-color: rgba(220, 218, 218, 0.5); */}
  width: 100%;
  height: 72px;
  padding-top: 14px;
  padding-left: 21.5px;
  padding-bottom: 6px;
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
  padding: 0px;
  border-width: 0px;
  text-align: left;
`
