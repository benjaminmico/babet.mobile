import styled from 'styled-components'

export const HeaderTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 14px;
`

export const HeaderTitleText = styled.Text`
  color: ${props => props.color};
  max-width: 349px;
  font-family: 'AvenirNext-Bold';
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 33px;
  padding-left: 10px;
`
