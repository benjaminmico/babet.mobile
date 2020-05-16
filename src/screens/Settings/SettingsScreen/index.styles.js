import styled from 'styled-components'
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width

export const SettingsScreenContainer = styled.TouchableOpacity`
  background-color: ${props => props.backgroundColor};
  height: 100%;
  padding-bottom: 20px;
`

export const SettingsScreenSocialButtonsContainer = styled.View`
  justify-content: space-between;
  height: 169px;
  margin-top: 45px;
  padding-left: 21px;
  padding-right: 21px;
`

export const SettingsScreenTermsText = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  width: ${windowWidth * 0.75}px;
  align-self: center;
  letter-spacing: -0.14px;
  line-height: 18px;
  margin-top: 45px;
  text-align: center;
`

export const SettingsScreenLineSeparator = styled.View`
  background-color: ${props => props.backgroundColor};
  width: 261px;
  height: 1px;
  margin-top: 39px;
  align-self: center;
`

export const SettingsScreenInputsContainer = styled.View`
  margin-top: 39px;
`

export const SettingsScreenInputButtonContainer = styled.View`
  margin-top: 39px;
  padding-left: 21px;
  padding-right: 21px;
`

export const SettingsScreenEmailSignUpText = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-Medium';
  font-size: 13px;
  width: ${windowWidth * 0.75}px;
  align-self: center;
  letter-spacing: -0.14px;
  line-height: 18px;
  margin-top: 26px;
  text-align: center;
`

export const SettingsScreenEmailErrorText = styled.Text`
  color: ${props => props.color};
  position: absolute;
  bottom: 50px;
  margin-bottom: 100px;
  font-size: 13px;
  width: ${windowWidth * 0.75}px;
  align-self: center;
  letter-spacing: -0.14px;
  line-height: 18px;
  text-align: center;
`
