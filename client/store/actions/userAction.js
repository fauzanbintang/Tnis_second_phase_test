import axios from 'axios'
import { Alert } from 'react-native'
const url = 'http://localhost:3000'

export function getCustomers() {
  return async (dispatch) => {
    dispatch({ type: 'GET_CUSTOMERS_LOADING' })
    try {
      let { data } = await axios.get(`${url}/users`)
      dispatch({ type: 'GET_CUSTOMERS_SUCCESS', payload: { customers: data.data } })
    }
    catch (err) {
      dispatch({ type: 'GET_CUSTOMERS_ERR' })
    }
  }
}

export function getBalance(accountNumber) {
  return async (dispatch) => {
    dispatch({ type: 'GET_BALANCE_LOADING' })
    try {
      let { data } = await axios.get(`${url}/users/${accountNumber}`)
      dispatch({ type: 'GET_BALANCE_SUCCESS', payload: { balance: data.data } })
    }
    catch (err) {
      dispatch({ type: 'GET_BALANCE_ERR' })
    }
  }
}

export function addDeposit(input) {
  return async (dispatch) => {
    dispatch({ type: 'ADD_DEPOSIT_LOADING' })
    try {
      let { data } = await axios.post(`${url}/deposits`, input)
      Alert.alert('Notification', 'Successfully add deposit')
      dispatch({ type: 'ADD_DEPOSIT_SUCCESS' })
    }
    catch (err) {
      dispatch({ type: 'ADD_DEPOSIT_ERR' })
    }
  }
}