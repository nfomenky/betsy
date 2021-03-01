import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
	const sessionUser = useSelector((state) => state.session.user);

	const sessionLinks = sessionUser ? (
		<ProfileButton user={sessionUser} />
	) : (
		<>
			<LoginFormModal />
			<NavLink to='/signup'>Sign up</NavLink>
		</>
	);

	return (
		<ul>
			<li>
				<NavLink exact to='/'>
					Home
				</NavLink>
				{isLoaded && sessionLinks}
			</li>
		</ul>
	);
};

export default Navigation;
