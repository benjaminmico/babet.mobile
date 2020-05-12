// @flow

import {getUserInformations} from '@api/graphql/queries/user'
import {useMutation, useQuery} from '@apollo/react-hooks'
import {withTheme} from '@core/themeProvider'
import React, {useEffect} from 'react'
import {View} from 'react-native'
import {setUserInformations} from '../../api/graphql/mutations/setUser'
import {useDispatch} from 'react-redux'
import actions from '@store/actions'

// type Props = {
//   theme: Object,
// }

const AddTicketScreen = (/* {theme}: Props */) => {
  const {data: userInformations} = useQuery(getUserInformations)

  const dispatch = useDispatch()

  const [mutationSetUserInformations] = useMutation(setUserInformations)

  useEffect(() => {
    /**
     * Update user informations on database based on first & lastname
     * By doing this, we ensure that firstname & lastname are always up to date
     * and also lastTimeLogged value is updated
     */
    function setUserInformations() {
      if (userInformations?.user) {
        const {addUserInformations} = actions

        // get user informations
        const {firstname, lastname} = userInformations?.user

        // add mutation to update lastTimeLogged
        mutationSetUserInformations({variables: {firstname, lastname}})

        // action to add firstname && last name on store
        dispatch(addUserInformations({firstname, lastname}))
      }
    }
    setUserInformations()
  }, [userInformations])

  return <View style={{flex: 1, backgroundColor: 'gold'}} />
}

export default withTheme(AddTicketScreen)
