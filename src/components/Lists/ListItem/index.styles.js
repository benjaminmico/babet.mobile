import styled from 'styled-components'

export const ListItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 62px;
  padding-top: 19px;
  padding-left: 10px;
  padding-bottom: 19px;
  align-items: center;
`

export const ListItemText = styled.Text`
  color: ${props => props.color};
  font-family: 'AvenirNext-DemiBold';
  font-size: 15px;
  letter-spacing: -0.16px;
  margin-left: ${props => (props.isIcon ? '33px' : '10px')};
  margin-top: 2px;
  text-align: left;
`

export const ListItemIconsContainer = styled.View`
  position: absolute;
  right: 26px;
  width: 65px;
  height: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ListItemLine = styled.View`
  background-color: rgba(220, 218, 218, 0.5);
  height: 1px;
  width: 100%;
`
