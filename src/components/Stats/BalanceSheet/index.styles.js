import styled from 'styled-components'

export const BalanceSheetContainer = styled.View`
  background-color: ${props => props.backgroundColor};
  flex-direction: row;
  align-items: center;
  width: 339px;
  height: 127px;
  border-radius: 12.6px;
  shadow-offset: ${props => (props.theme === 'white' ? '0px 10px' : '0px')};
  shadow-radius: ${props => (props.theme === 'white' ? '18px' : '0px')};
  shadow-color: #c8c9ca;
  shadow-opacity: ${props => (props.theme === 'white' ? '0.5' : '0')};
`

export const BalanceSheetContentContainer = styled.View`
  height: 100px;
  width: 223.64px;
  margin-left: 12.14px;
  justify-content: space-between;
`

export const BalanceSheetLabel = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const BalanceSheetValue = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-Bold';
  font-size: 35px;
  letter-spacing: -1.27px;
  line-height: 48px;
`

export const BalanceSheetDescription = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const BalanceSheetFilters = styled.View`
  position: absolute;
  right: 20px;
`
