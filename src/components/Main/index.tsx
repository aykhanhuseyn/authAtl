import { useContext } from 'react';
import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { userSelector, logout } from '../../store/slice';
import { AuthContext } from '../../context/authContext';

export const Main = () => {
	// const dispatch = useDispatch();
	// const user = useSelector(userSelector);

	const context = useContext(AuthContext);
	const user = context.state.user;

	useEffect(() => {
		console.log(user);
	}, [user]);

	const handleClick = () => {
		context.dispatch({ type: 'LOGOUT' });
		// dispatch(logout());
	};

	return (
		<div>
			<h2>Main user name: {user?.username}</h2>
			<button onClick={handleClick}>losdgfs</button>
		</div>
	);
};
