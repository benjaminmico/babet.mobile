// @flow

import {withTheme} from '@core/themeProvider'
import React, {useEffect} from 'react'
import {getBankrolls} from '@api/graphql/queries/bankrolls'
import {useQuery} from '@apollo/react-hooks'
import ListItem from '@components/Lists/ListItem'
import {MyBankrollsScreenContainer, MyBankrollsScreenContentContainer} from './index.styles'
import {useSelector, useDispatch} from 'react-redux'
import actions from '@store/actions'

type Props = {
  theme: Object,
}

const MyBankrollsScreen = ({theme}: Props) => {
  const {data} = useQuery(getBankrolls)

  const {
    bankrolls: {items: bankrolls},
  } = useSelector(state => state)

  const dispatch = useDispatch()
  /**
   * Load GraphQL user bankrolls and add it to local state when :
   * Bankrolls store are empty
   * Bankrolls queries are different than bankrolls store
   */
  useEffect(() => {
    const {setBankrollsList} = actions
    if (data?.bankrolls && !bankrolls?.length && data?.bankrolls !== bankrolls)
      dispatch(setBankrollsList(data.bankrolls))
  }, [data])

  // get theme props
  const {backgroundColor} = theme

  return (
    <MyBankrollsScreenContainer activeOpacity={1.0} backgroundColor={backgroundColor}>
      <MyBankrollsScreenContentContainer>
        {bankrolls?.length &&
          bankrolls.map(({creationDate, name}) => {
            return (
              <ListItem
                key={creationDate}
                label={name}
                leftActionIcon="update"
                rightActionIcon="delete"
                onLeftAction={() => console.log('onLeft')}
                onRightAction={() => console.log('onRight')}
              />
            )
          })}
      </MyBankrollsScreenContentContainer>
    </MyBankrollsScreenContainer>
  )
}

export default withTheme(MyBankrollsScreen)
