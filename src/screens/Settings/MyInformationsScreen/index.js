// @flow
import {setUserInformations} from '@api/graphql/mutations/setUser'
import {useMutation} from '@apollo/react-hooks'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
import actions from '@store/actions'
import Input from '@components/Input'
import {withTheme} from '@core/themeProvider'
import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {
  MyInformationsScreenContainer,
  MyInformationsScreenContentContainer,
  MyInformationsButtonContainer,
} from './index.styles'
import InputButton from '@components/Buttons/InputButton'

type Props = {
  theme: Object,
}

const MyInformationsScreen = ({theme}: Props) => {
  // get theme props
  const {backgroundColor} = theme

  // get store user informations
  const {
    auth: {firstname: storeFirstname, lastname: storeLastname, nickname: storeNickname, description: storeDescription},
  } = useSelector(state => state)

  // set local state nickname to update value when changing text
  const [nickname, setNickname] = useState(storeNickname)
  const [description, setDescription] = useState(storeDescription)

  const [mutationSetUserInformations] = useMutation(setUserInformations)

  const {goBack} = useNavigation()

  const dispatch = useDispatch()

  const {t} = useTranslation()

  /**
   * send informations when pressing button
   * call graphql mutation =>
   * get firstname && lastname as static value && use local state nickname && local state description
   * update nickname && description on store
   * go back once informations are dispatched on store
   */
  const sendInformations = () => {
    const {addUserInformations} = actions

    // add mutation to update lastTimeLogged
    mutationSetUserInformations({
      variables: {firstname: storeFirstname, lastname: storeLastname, nickname, description},
    })

    // action to add firstname && last name on store
    dispatch(addUserInformations({firstname: storeFirstname, lastname: storeLastname, nickname, description}))
    goBack()
  }

  return (
    <MyInformationsScreenContainer activeOpacity={1.0} backgroundColor={backgroundColor}>
      <MyInformationsScreenContentContainer>
        <Input inputLabel={t('nickname')} onChangeText={setNickname} placeholder={nickname} value={nickname} />
        <Input
          inputLabel={t('description')}
          onChangeText={setDescription}
          placeholder={description}
          value={description}
        />
        <MyInformationsButtonContainer>
          <InputButton label={t('update')} onPress={() => sendInformations()} />
        </MyInformationsButtonContainer>
      </MyInformationsScreenContentContainer>
    </MyInformationsScreenContainer>
  )
}

export default withTheme(MyInformationsScreen)
