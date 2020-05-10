import styled from 'styled-components'

export const BottomTabContainer = styled.View`
  position: absolute;
  bottom: 32.4px;
  justify-content: center;
  align-self: center;
  flex-direction: row;
  width: 190.8px;
  height: 51.6px;
  border-radius: 18px;
  background-color: ${props => props.backgroundColor};
`

export const BottomTabContentContainer = styled.View`
  flex-direction: row;
  width: 126px;
  justify-content: space-between;
  align-items: center;
`
