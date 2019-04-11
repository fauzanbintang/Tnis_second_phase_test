const defaultStore = {
  customers: [],
  balance: {},
  loading: false,
  err: false
}

export default function (state = defaultStore, action) {
  const { type, payload } = action
  switch (type) {
    case 'GET_CUSTOMERS_SUCCESS':
      return { ...state, customers: payload.customers, loading: false }
    case 'GET_CUSTOMERS_LOADING':
      return { ...state, loading: true }
    case 'GET_CUSTOMERS_ERR':
      return { ...state, err: true, loading: false }

    case 'GET_BALANCE_SUCCESS':
      return { ...state, balance: payload.balance, loading: false }
    case 'GET_BALANCE_LOADING':
      return { ...state, loading: true }
    case 'GET_BALANCE_ERR':
      return { ...state, err: true, loading: false }

    case 'ADD_DEPOSIT_SUCCESS':
      return { ...state, loading: false }
    case 'ADD_DEPOSIT_LOADING':
      return { ...state, loading: true }
    case 'ADD_DEPOSIT_ERR':
      return { ...state, err: true, loading: false }

    default:
      return state
  }
}