import styled from 'styled-components'
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export const GraphContainer = styled.View`
  background-color: ${props => props.backgroundColor};
  width: ${windowWidth * 0.89}px;
  border-radius: 12.6px;
  shadow-offset: ${props => (props.theme === 'white' ? '0px 10px' : '0px')};
  shadow-radius: ${props => (props.theme === 'white' ? '18px' : '0px')};
  shadow-color: #c8c9ca;
  shadow-opacity: ${props => (props.theme === 'white' ? '0.5' : '0')};
  elevation: 3;
`

export const GraphHeader = styled.View`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
`

export const GraphContent = styled.View`
  width: 100%;
  height: 95px;
`

export const GraphFooter = styled.View`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  border-top-width: 0.86px;
  border-color: 'rgba(151,151,151,0.1)';
`

export const GraphLabel = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const GraphDescription = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const GraphItemsContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`

export const GraphFilters = styled.View`
  position: absolute;
  right: 20px;
  bottom: 20px;
`
