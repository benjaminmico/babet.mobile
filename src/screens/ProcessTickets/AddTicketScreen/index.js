// @flow

import {setUserInformations} from '@api/graphql/mutations/setUser'
import {getUserInformations} from '@api/graphql/queries/user'
import {useMutation, useQuery} from '@apollo/react-hooks'
import {ToastContext} from '@components/Alerts/Toast/ToastContext'
import Button from '@components/Buttons/Button'
import {withTheme} from '@core/themeProvider'
import {useNavigation} from '@react-navigation/native'
import actions from '@store/actions'
import React, {useContext, useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {View} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import {useDispatch, useSelector} from 'react-redux'
import {AddTicketScreenSnapper} from './index.styles'

const AddTicketScreen = () => {
  const {data: userInformations, error} = useQuery(getUserInformations)

  const {
    auth: {token},
  } = useSelector(state => state)

  const {navigate} = useNavigation()

  const {t} = useTranslation()

  const {show} = useContext(ToastContext)

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
   * handle GraphQL query error by displaying toast
   *
   * */
  useEffect(() => {
    if (error && token) {
      show({
        title: t('unknownErrorTitle'),
        message: t('unknownErrorDescription'),
        type: 'error',
      })
    }
  }, [error])
  /**
   * Update user informations on database based on first & lastname
   * By doing this, we ensure that firstname & lastname are always up to date
   * and also lastTimeLogged value is updated
   */
  useEffect(() => {
    const {addUserInformations} = actions

    if (queryUserInformations) {
      const {firstname, lastname, nickname, description} = queryUserInformations
      // add mutation to update lastTimeLogged
      mutationSetUserInformations({
        variables: {firstname, lastname, nickname, description},
      })

      // action to add firstname && last name on store
      dispatch(addUserInformations({firstname, lastname, nickname, description}))
    }
  }, [queryUserInformations?.firstname])

  /**
   * get selected images
   */
  function getSelectedImages() {
    ImagePicker.openPicker({
      multiple: true,
    }).then(imagesFromPicker => {
      navigate('ConfirmTicketScreen', {images: imagesFromPicker})
    })
  }

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        {/* <RNCamera
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}
      /> */}
      </View>
      <Button
        style={{
          position: 'absolute',
          bottom: 201,
          alignSelf: 'center',
        }}
        label="choisir une photo"
        iconLabel="ticket"
        black
        onPress={() => getSelectedImages()}
      />

      <AddTicketScreenSnapper />
    </>
  )
}

export default withTheme(AddTicketScreen)
