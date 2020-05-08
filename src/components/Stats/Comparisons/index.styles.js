import styled from 'styled-components'
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export const ComparisonsContainer = styled.View`
  background-color: ${props => props.backgroundColor};
  width: ${windowWidth * 0.89}px;
  border-radius: 12.6px;
  shadow-offset: ${props => (props.theme === 'white' ? '0px 10px' : '0px')};
  shadow-radius: ${props => (props.theme === 'white' ? '18px' : '0px')};
  shadow-color: #c8c9ca;
  shadow-opacity: ${props => (props.theme === 'white' ? '0.5' : '0')};
`

export const ComparisonsHeader = styled.View`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  border-bottom-width: 0.86px;
  border-color: 'rgba(151,151,151,0.1)';
`

export const ComparisonsLabel = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const ComparisonsItemsContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`
