import styled from 'styled-components'

export const HistoryContainer = styled.View``

export const HistoryItemContainer = styled.View`
  align-items: center;
  flex-direction: row;
`

export const HistoryItem = styled.View`
  background-color: ${props => props.color};
  margin-left: ${props => (props.marginLeft ? 4.84 : 0)}px;
  height: 13.82px;
  width: 13.82px;
  border-radius: ${13.82 / 2}px;
`

export const HistoryBar = styled.View`
  position: absolute;
  flex: 1;
  top: 50%;
  bottom: 50%;
  z-index: -1;
  width: ${props => props.itemsLength * 18.66 - 4.84}px;
  background-color: ${props => props.color};
  height: 1.38px;
  text-align: left;
`
