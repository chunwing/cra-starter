import { combineReducers } from '@reduxjs/toolkit'
import accountReducer from './accountRecuder'
const reducers = combineReducers({
    account : accountReducer
})
export default reducers
export type RootState = ReturnType<typeof reducers>
