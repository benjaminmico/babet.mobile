import styled from 'styled-components'

export const AlertQuestionContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
  z-index: 100;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`
export const AlertQuestionContentContainer = styled.View`
  background-color: ${props => props.backgroundColor};
  border-radius: 12.6px;
  width: 335px;
  height: 176px;
  justify-content: center;
  align-items: center;
`

export const AlertQuestionButtonsContainer = styled.View`
  position: absolute;
  width: 162px;
  left: 150px;
  bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const AlertQuestionText = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 15px;
  letter-spacing: -0.16px;
  margin-bottom: 37px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`
