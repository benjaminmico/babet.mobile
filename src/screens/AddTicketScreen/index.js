// @flow

import {getUserInformations} from '@api/graphql/queries/user'
import {useMutation, useQuery} from '@apollo/react-hooks'
import Button from '@components/Buttons/Button'
import {withTheme} from '@core/themeProvider'
import actions from '@store/actions'
import React, {useEffect, useState} from 'react'
import {View} from 'react-native'
import {useDispatch} from 'react-redux'
import {setUserInformations} from '../../api/graphql/mutations/setUser'
import {AddTicketScreenSnapper} from './index.styles'

// type Props = {
//   theme: Object,
// }

const AddTicketScreen = (/* {theme}: Props */) => {
  const {data: userInformations} = useQuery(getUserInformations)

  const [queryUserInformations, setQueryUserInformations] = useState(null)

  const dispatch = useDispatch()

  const [mutationSetUserInformations] = useMutation(setUserInformations)

  /**
   * Load GraphQL user informations and add it to local state
   */
  useEffect(() => {
    if (userInformations?.user && !queryUserInformations) setQueryUserInformations(userInformations?.user)
  }, [userInformations])

  /**
   * Update user informations on database based on first & lastname
   * By doing this, we ensure that firstname & lastname are always up to date
   * and also lastTimeLogged value is updated
   */
  useEffect(() => {
    const {addUserInformations} = actions

    if (queryUserInformations) {
      const {firstname, lastname} = queryUserInformations
      // add mutation to update lastTimeLogged
      mutationSetUserInformations({variables: {firstname, lastname}})

      // action to add firstname && last name on store
      dispatch(addUserInformations({firstname, lastname}))
    }
  }, [queryUserInformations?.firstname])

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {/* <RNCamera
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}
      /> */}
      <Button
        style={{
          position: 'absolute',
          bottom: 201,
          alignSelf: 'center',
        }}
        label="choisir une photo"
        iconLabel="ticket"
        black
      />

      <AddTicketScreenSnapper />
    </View>
  )
}

export default withTheme(AddTicketScreen)
