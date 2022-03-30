import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux';
import { depositMoney, withdrawMoney} from './State/action/action';
import { bindActionCreators } from 'redux'

function App() {

  const account = useSelector(state => state.account)
  const dispatch = useDispatch();
  const [amount, setamount] = useState()
  const action = bindActionCreators({depositMoney, withdrawMoney}, dispatch)

  console.log(account)

  return (
    <div className="App">
      <h1>{account}</h1>
      <div>
        <input
            type="text" value={amount} placeholder="Enter the Money"
            onChange={(e)=>{
              e.preventDefault();
              setamount(e.target.value)
            }}
        />
      </div>
      <br/>
      <div>
        <button onClick={()=> action.depositMoney(Number(amount))}>Deposit</button>
        <button onClick={() => action.withdrawMoney(Number(amount))}>Withdraw</button>
      </div>
    </div>
  );
}

export default App;
