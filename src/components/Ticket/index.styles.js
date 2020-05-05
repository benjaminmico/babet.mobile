import styled from 'styled-components'

export const TicketContainer = styled.View`
  background-color: ${props => props.backgroundColor};
  width: 336px;
  border-radius: 12.6px;
  shadow-offset: ${props => (props.theme === 'white' ? '0px 10px' : '0px')};
  shadow-radius: ${props => (props.theme === 'white' ? '18px' : '0px')};
  shadow-color: #c8c9ca;
  shadow-opacity: ${props => (props.theme === 'white' ? '0.5' : '0')};
`

export const TicketHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 37px;
  padding-left: 12px;
  border-bottom-width: 1px;
  border-color: rgba(173, 173, 173, 0.32);
`

export const TicketLabel = styled.Text`
  color: ${props => props.color};
  max-width: 221px;
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const TicketContentBets = styled.View`
  padding-left: 11.41px;
`

export const TicketContentResults = styled.View`
  background-color: ${props => props.backgroundColor};
  height: 75px;
  width: 100%;
  margin-top: 11px;
  padding-top: 7px;
  padding-bottom: 8px;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 12.6px;
  border-bottom-right-radius: 12.6px;
`

export const TicketKPIContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-left: 22px;
`

export const TicketKPILabel = styled.Text`
  right: 12px;
  color: ${props => props.color};
  max-width: 120px;
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const TicketKPIValue = styled.Text`
  position: absolute;
  top: 1px;
  right: 13px;
  color: ${props => props.color};
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
  text-align: right;
`

export const TicketMainKPILabel = styled.Text`
  right: 12px;
  color: ${props => props.color};
  max-width: 120px;
  font-family: 'AvenirNext-Bold';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const TicketMainKPIValue = styled.Text`
  position: absolute;
  top: 1px;
  right: 13px;
  color: ${props => props.color};
  font-family: 'AvenirNext-Bold';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
  text-align: right;
`
