import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { useDispatch } from 'react-redux'

import AuthReducer from './Auth'
import CycleReducer from './Cycle'
import PayerReducer from './Payer'
import TransactionReducer from './Transaction'

const store = configureStore({
  reducer: {
    Auth:AuthReducer,
    Cycle:CycleReducer,
    Payer:PayerReducer,
    Transaction:TransactionReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store


export interface IStateRequest<T = any> {
  success: T,
  loading: boolean,
  error: any
}

export function defaultRequestState<T = any>(defaultValue: T): IStateRequest<T> {
  return {
      success: defaultValue,
      loading: false,
      error: null
  }
}
