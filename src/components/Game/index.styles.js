import styled from 'styled-components'

export const GameContainer = styled.View`
  margin-top: 11px;
  flex-direction: row;
  align-items: center;
`

export const GameContentContainer = styled.View``

export const GameLabel = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
  padding-bottom: 2.5px;
`

export const GameResultLabel = styled.Text`
  color: ${props => props.color};
  width: 275px;
  font-family: 'AvenirNext-DemiBold';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const GameResultValue = styled.Text`
  color: ${props => props.color};
  width: 90px;
  font-family: 'AvenirNext-DemiBold';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const GameOddContainer = styled.View`
  position: absolute;
  right: 15.59px;
  justify-content: center;
  align-items: center;
`

export const GameOddValue = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
  text-align: right;
`

export const GameLine = styled.View`
  background-color: rgba(173, 173, 173, 0.32);
  height: 1px;
  width: 100%;
  margin-top: 11px;
  padding-left: 11px;
`
