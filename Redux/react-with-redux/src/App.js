import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from './state/index';

function App() {

	const account = useSelector((state) => state.account);
	// console.log(account);

	const dispatch = useDispatch();
	const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

	return (
		<div className="App">
			<h1>{account}</h1>
			<button 
				style={{marginRight: "10px"}} 
				onClick={() => depositMoney(1000)}
			> 
				Deposit 
			</button>
			<button
				onClick={() => withdrawMoney(1000)}
			> 
				Withdraw 
			</button>
		</div>
	);
}

export default App;
