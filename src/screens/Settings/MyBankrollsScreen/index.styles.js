import styled from 'styled-components'
import {Platform} from 'react-native'

export const MyBankrollsScreenContainer = styled.View`
  background-color: ${props => props.backgroundColor};
  height: 100%;
  padding-top: ${props => (props.alert ? (Platform.OS === 'android' ? 60 : 88) : 0)};
`

export const MyBankrollsScreenContentContainer = styled.ScrollView`
  padding-top: 31px;
`
