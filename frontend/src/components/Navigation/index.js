import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SigninSignupFormModal from '../SigninSignupFormModal'
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
	const sessionUser = useSelector((state) => state.session.user);

	const sessionLinks = sessionUser ? (
		<ProfileButton user={sessionUser} />
	) : (
		<>
			<SigninSignupFormModal />
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
