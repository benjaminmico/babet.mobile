import styled from 'styled-components'

export const BetContainer = styled.View`
  margin-top: 11px;
  flex-direction: row;
  align-items: center;
`

export const BetContentContainer = styled.View``

export const BetLabel = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
  padding-bottom: 2.5px;
`

export const BetResultLabel = styled.Text`
  color: ${props => props.color};
  width: 275px;
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const BetResultValue = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const BetOddContainer = styled.View`
  position: absolute;
  right: 15.59px;
  justify-content: center;
  align-items: center;
`

export const BetOddValue = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
  text-align: right;
`

export const BetLine = styled.View`
  background-color: rgba(173, 173, 173, 0.32);
  height: 1px;
  width: 100%;
  margin-top: 11px;
  padding-left: 11px;
`
