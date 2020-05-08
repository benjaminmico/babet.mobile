import styled from 'styled-components'
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export const ComparisonItemContainer = styled.View`
  width: ${windowWidth * 0.82}px;
  margin-bottom: 17.13px;
`

export const ComparisonItemValue = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-Bold';
  font-size: 18px;
  letter-spacing: -0.54px;
  line-height: 20px;
`

export const ComparisonItemDescription = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-Bold';
  font-size: 11px;
  letter-spacing: -0.12px;
  line-height: 13px;
`

export const ComparisonLabel = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-Bold';
  font-size: 13px;
  letter-spacing: -0.1px;
`
