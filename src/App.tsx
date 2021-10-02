import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import {useSelector, useDispatch } from "react-redux"
import {RootState} from "./state/reducers"
import { bindActionCreators } from 'redux';
import {actionCreators} from "./state"

const App = (): JSX.Element => {
  const account  = useSelector((state:RootState)=>state.account);
  const dispatch = useDispatch()
  
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators,dispatch)
  
  
  console.log('account: ', account)
  
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={()=>depositMoney(100)}>Deposit</button>
      <button onClick={()=>withdrawMoney(100)}>Withdraw</button>
    </div>
  
  );
}
    


export default App;
