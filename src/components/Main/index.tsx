// import { useContext } from 'react';
// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, logout } from '../../store/slice';
// import { AuthContext } from '../../context/authContext';

export const Main = () => {
	const dispatch = useDispatch();
	const user = useSelector(userSelector);

	const handleClick = () => {
		dispatch(logout());
	};

	return (
		<div>
			Main user name: {user?.username}
			<button onClick={handleClick}>losdgfs</button>
		</div>
	);
};
