import styled from 'styled-components'
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export const GenericContainer = styled.View`
  background-color: ${props => props.backgroundColor};
  flex-direction: row;
  width: ${windowWidth * 0.42}px;
  height: 143px;
  border-radius: 12.6px;
  shadow-offset: ${props => (props.theme === 'white' ? '0px 10px' : '0px')};
  shadow-radius: ${props => (props.theme === 'white' ? '18px' : '0px')};
  shadow-color: #c8c9ca;
  shadow-opacity: ${props => (props.theme === 'white' ? '0.5' : '0')};
  elevation: 3;
`

export const GenericContentContainer = styled.View`
  margin-left: 11px;
`

export const GenericLabel = styled.Text`
  position: absolute;
  top: 10px;
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const GenericValue = styled.Text`
  position: absolute;
  top: 30px;
  color: ${props => props.color};
  font-family: 'AvenirNext-Bold';
  font-size: 35px;
  letter-spacing: -1.27px;
  line-height: 48px;
`

export const GenericKPILabel = styled.Text`
  position: absolute;
  top: 73px;
  color: ${props => props.color};
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const GenericDescription = styled.Text`
  position: absolute;
  top: 97px;
  width: 142.94px;
  color: ${props => props.color};
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  letter-spacing: -0.14px;
  line-height: 18px;
`

export const GenericFilters = styled.View`
  position: absolute;
  right: 20px;
`
