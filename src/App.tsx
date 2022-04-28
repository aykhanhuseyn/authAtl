import { useReducer } from 'react';
import { AuthContext, reducer, initialState } from './context';
// import { useSelector } from 'react-redux';
// import { userSelector } from './store/slice';
import { Login } from './components/Login';
import { Main } from './components/Main';
import './App.css';

function App() {
	// const user = useSelector(userSelector);
	const [state, dispatch] = useReducer(reducer, initialState);
	const user = state.user;
	console.log('app', state);

	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			<>{user?.username ? <Main /> : <Login />}</>
		</AuthContext.Provider>
		// <>{user?.username ? <Main /> : <Login />}</>
	);
}

export default App;
