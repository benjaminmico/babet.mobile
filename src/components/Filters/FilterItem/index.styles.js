import styled from 'styled-components'

export const FilterItemContainer = styled.TouchableOpacity`
  background-color: ${props => props.backgroundColor};
  border-radius: 8px;
  flex-direction: row;
  margin-top: ${props => (props.index === 0 ? '0px' : props.horizontal ? '0px' : '11px')};
  margin-left: ${props => (props.index === 0 ? '0px' : props.horizontal ? '19px' : '0px')};
  height: 24px;
  padding-left: 19px;
  padding-right: 19px;
  justify-content: center;
  align-items: center;
`

export const FilterItemText = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.14px;
`
