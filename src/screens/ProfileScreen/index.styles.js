import styled from 'styled-components'
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export const ProfileScreenContainer = styled.View`
  flex: 1;
  padding-top: 56px;
  background-color: ${props => props.backgroundColor};
`

export const ProfileScreenContentContainer = styled.ScrollView`
  flex: 1;
  width: ${windowWidth * 0.89}px;
  align-self: center;
`

export const ProfileScreenHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 72px;
`

export const ProfileScreenKPIContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`

export const ProfileScreenImageHeaderContainer = styled.View`
  width: 63px;
  height: 63px;
  border-radius: 31.5px;
`

export const ProfileScreenContentHeaderContainer = styled.View`
  padding-left: 11.85px;
  padding-right: 11.85px;
`

export const ProfileScreenTitleHeader = styled.Text`
  font-family: 'AvenirNext-Bold';
  font-size: 24px;
  color: ${props => props.color};
  letter-spacing: 0;
  line-height: 33px;
`

export const ProfileScreenTitleDescription = styled.Text`
  font-family: "AvenirNext-Medium";
  font-size: 13px;
  color: ${props => props.color};
  height: 41px;
  width: ${windowWidth * 0.6}px;
  margin-top: 2px;
  letter-spacing: -0.14px;
  line-height: 18px;
}`

export const ProfileScreenTicketsHeaderContainer = styled.View`
  margin-top: 33px;
  flex-direction: row;
  justify-content: space-between;
`

export const ProfileScreenTicketsHeaderText = styled.Text`
  font-family: 'AvenirNext-DemiBold';
  font-size: 16px;
  color: ${props => props.color};
  letter-spacing: -0.17px;
  line-height: 22px;
  text-align: left;
`

export const ProfileScreenTicketsIndicatorContainer = styled.View`
  position: absolute;
  right: 0px;
  background-color: ${props => props.backgroundColor};
  justify-content: center;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
  align-items: center;
`

export const ProfileScreenTicketsIndicatorText = styled.Text`
  font-family: 'AvenirNext-DemiBold';
  font-size: 12px;
  color: ${props => props.color};
  letter-spacing: -0.13px;
  line-height: 18px;
  text-align: center;
`

export const ProfileScreenTicketsContentContainer = styled.View`
  margin-top: 16px;
`