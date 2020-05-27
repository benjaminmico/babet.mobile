// @flow

import {withTheme} from '@core/themeProvider'
import React, {useContext, useState} from 'react'
import {createBankroll} from '@api/graphql/mutations/createBankroll'
import {editBankroll} from '@api/graphql/mutations/editBankroll'
import {deleteBankroll} from '@api/graphql/mutations/deleteBankroll'
import {useMutation} from '@apollo/react-hooks'
import ListItem from '@components/Lists/ListItem'
import {MyBankrollsScreenContainer, MyBankrollsScreenContentContainer} from './index.styles'
import {useSelector, useDispatch} from 'react-redux'
import actions from '@store/actions'
import Button from '@components/Buttons/Button'
import AlertQuestion from '@components/Alerts/AlertQuestion'
import AlertInput from '@components/Alerts/AlertInput'
import {useNavigation} from '@react-navigation/native'
import {useTranslation} from 'react-i18next'
import {ToastContext} from '@components/Alerts/Toast/ToastContext'

type Props = {
  theme: Object,
}

const MyBankrollsScreen = ({theme}: Props) => {
  // display alert mode or not when creating a bankroll
  const [alertCreate, setAlertCreate] = useState(false)
  // display alert mode or not when editing a bankroll
  const [alertEdit, setAlertEdit] = useState(false)
  // display alert mode or not when deleting a bankroll
  const [alertDelete, setAlertDelete] = useState(false)
  // bankroll name to create when updating alert input bankroll creation
  const [bankrollNameToCreate, setBankrollNameToCreate] = useState(false)
  // bankroll name to edit when updating alert input bankroll creation
  const [bankrollNameToEdit, setBankrollNameToEdit] = useState(false)
  // current bankroll id in case of delete
  const [currentBankrollId, setCurrentBankrollId] = useState(null)

  // get bankrolls items from store
  const {
    bankrolls: {items: bankrolls},
  } = useSelector(state => state)

  const {show} = useContext(ToastContext)
  const {t} = useTranslation()
  const {setOptions} = useNavigation()

  // add store actions
  const {
    createBankroll: createBankrollAction,
    editBankroll: editBankrollAction,
    deleteBankroll: deleteBankrollAction,
  } = actions

  const [mutationCreateBankroll] = useMutation(createBankroll)
  const [mutationEditBankroll] = useMutation(editBankroll)
  const [mutationDeleteBankroll] = useMutation(deleteBankroll)

  const dispatch = useDispatch()

  /**
   * disable header when modal alert is displaying
   * update header props if header isn't shown
   */
  if (alertCreate || alertEdit || alertDelete) setOptions({headerShown: false})
  else setOptions({headerShown: true})

  /**
   * Create a bankroll
   * Execute mutation to create bankroll
   * Add Bankroll to list items
   * @param {String} name bankroll name
   *
   */
  const onCreateBankroll = async name => {
    try {
      const {data, error} = await mutationCreateBankroll({
        variables: {name},
      })
      setAlertCreate(false)
      if (error) {
        show({
          title: t('unknownErrorTitle'),
          message: t('unknownErrorDescription'),
          type: 'error',
        })
      }
      dispatch(createBankrollAction(data.createBankroll))
    } catch (error) {
      setAlertCreate(false)
      console.log('error', error)
      show({
        title: t('unknownErrorTitle'),
        message: t('unknownErrorDescription'),
        type: 'error',
      })
    }
  }

  /**
   * Edit a bankroll
   * Execute mutation to edit bankroll
   * Update Bankroll list with editable item
   * @param {String} id bankroll id
   * @param {String} newName bankroll name to edit
   *
   */
  const onEditBankroll = async (id, newName) => {
    try {
      const {data, error} = await mutationEditBankroll({
        variables: {id, name: newName},
      })
      setAlertEdit(false)
      if (error) {
        console.log('error', error)
        show({
          title: t('unknownErrorTitle'),
          message: t('unknownErrorDescription'),
          type: 'error',
        })
      }
      dispatch(editBankrollAction(data.editBankroll))
    } catch (error) {
      console.log('error', error)
      setAlertEdit(false)
      show({
        title: t('unknownErrorTitle'),
        message: t('unknownErrorDescription'),
        type: 'error',
      })
    }
  }

  /**
   * Delete a bankroll
   * Execute mutation to delete bankroll
   * Remove deleted bankroll from store
   * @param {String} id bankroll id
   *
   */
  const onDeleteBankroll = async id => {
    try {
      setAlertDelete(false)
      const {data, error} = await mutationDeleteBankroll({variables: {id}})
      if (error) {
        console.log('error', error)
        show({
          title: t('unknownErrorTitle'),
          message: t('unknownErrorDescription'),
          type: 'error',
        })
      }
      if (data.deleteBankroll) dispatch(deleteBankrollAction(bankrolls.find(bankroll => bankroll.id === id)))
    } catch (error) {
      setAlertDelete(false)
      console.log('error', error)
      show({
        title: t('unknownErrorTitle'),
        message: t('unknownErrorDescription'),
        type: 'error',
      })
    }
  }

  // get theme props
  const {backgroundColor} = theme

  return (
    <MyBankrollsScreenContainer
      activeOpacity={1.0}
      backgroundColor={backgroundColor}
      alert={alertCreate || alertEdit || alertDelete}
    >
      <Button
        style={{width: 146, alignSelf: 'center', marginTop: 50}}
        label="ajouter une bankroll"
        onPress={() => {
          setAlertCreate(true)
        }}
      />
      <MyBankrollsScreenContentContainer>
        {!!bankrolls?.length &&
          bankrolls.map(({id, creationDate, name}) => {
            return (
              <ListItem
                key={creationDate}
                label={name}
                leftActionIcon="update"
                onLeftAction={() => {
                  setCurrentBankrollId(id)
                  setAlertEdit(true)
                }}
                rightActionIcon="delete"
                onRightAction={() => {
                  setCurrentBankrollId(id)
                  setAlertDelete(true)
                }}
              />
            )
          })}
      </MyBankrollsScreenContentContainer>
      {alertCreate && (
        <AlertInput
          questionLabel={t('nameBankrollCreation')}
          cancellableButtonLabel="Annuler"
          cancellableButtonPress={() => setAlertCreate(false)}
          actionButtonLabel="Confirmer"
          inputPlaceholder={t('nameBankrollCreationInputPlaceholder')}
          onChangeInputValue={setBankrollNameToCreate}
          actionButtonPress={() => onCreateBankroll(bankrollNameToCreate)}
        />
      )}
      {alertEdit && (
        <AlertInput
          questionLabel={t('nameBankrollEdit')}
          cancellableButtonLabel="Annuler"
          cancellableButtonPress={() => setAlertEdit(false)}
          actionButtonLabel="Confirmer"
          inputPlaceholder={t('nameBankrollEditInputPlaceholder')}
          onChangeInputValue={setBankrollNameToEdit}
          actionButtonPress={() => onEditBankroll(currentBankrollId, bankrollNameToEdit)}
        />
      )}
      {alertDelete && (
        <AlertQuestion
          questionLabel={`${t('deleteBankrollAlert')} "${
            bankrolls.find(bankroll => bankroll.id === currentBankrollId)?.name
          }" ?`}
          cancellableButtonLabel="Annuler"
          cancellableButtonPress={() => setAlertDelete(false)}
          actionButtonLabel="Confirmer"
          actionButtonPress={() => onDeleteBankroll(currentBankrollId)}
        />
      )}
    </MyBankrollsScreenContainer>
  )
}

export default withTheme(MyBankrollsScreen)
