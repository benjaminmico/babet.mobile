import styled from 'styled-components'
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

const cursorRadius = 10

export const AnimatedChartsContainer = styled.View`
  width: ${windowWidth * 2}px;
  height: 100%;
`

export const AnimatedChartsValueContainer = styled.View`
  position: absolute;
  bottom: 20px;
  right: -34px;
  width: 68px;
  height: 21px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border-radius: 7px;
  shadow-offset: ${props => (props.theme === 'white' ? '0px 10px' : '0px')};
  shadow-radius: ${props => (props.theme === 'white' ? '18px' : '0px')};
  shadow-color: #c8c9ca;
  shadow-opacity: ${props => (props.theme === 'white' ? '0.5' : '0')};
`

export const AnimatedChartsValueTextInput = styled.TextInput`
  font-family: 'AvenirNext-DemiBold';
  font-size: 11px;
`

export const AnimatedChartsCursor = styled.View`
  border-width: 3px;
  border-color: #5100ff;
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: ${cursorRadius}px;
`
