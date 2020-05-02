import styled from 'styled-components'

export const FiltersScrollContainer = styled.ScrollView``

export const FiltersContainer = styled.View``

// renders list to 'row' or 'column' depends on horizontal or not
export const FiltersContentContainer = styled.View`
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
`
