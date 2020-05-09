import styled from 'styled-components'
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export const ChartsContainer = styled.View`
  width: ${windowWidth * 0.603}px;
  height: 90px;
`

export const ChartLastItemContainer = styled.View`
  position: absolute;
  right: ${-56 / 3}px;
  top: -30px;
  height: 21px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 7.69px;
  padding-right: 7.69px;
  justify-content: center;
  align-items: center;
  border-radius: 6.91px;
  background-color: #ffffff;
  shadow-offset: ${props => (props.theme === 'white' ? '0px 10px' : '0px')};
  shadow-radius: ${props => (props.theme === 'white' ? '18px' : '0px')};
  shadow-color: #c8c9ca;
  shadow-opacity: ${props => (props.theme === 'white' ? '0.5' : '0')};
  elevation: 3;
`

export const ChartLastItemValue = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 11px;
  letter-spacing: -0.14px;
`
