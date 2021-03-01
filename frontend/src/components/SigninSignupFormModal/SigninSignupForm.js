import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import './SigninSignup.css';

const SigninSignUpForm = () => {
	//sign in
	const dispatch = useDispatch();
	const [credential, setCredential] = useState('');
	const [password, setPassword] = useState('');
	const [signinErrors, setSigninErrors] = useState([]);

	//sign up
	// const sessionUser = useSelector((state) => state.session.user);
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [signupErrors, setSignupErrors] = useState([]);

	const handleSigninSubmit = (e) => {
		e.preventDefault();
		setSigninErrors([]);
		return dispatch(sessionActions.login({ credential, password })).catch(
			async (res) => {
				const data = await res.json();
				if (data && data.errors) setSigninErrors(data.errors);
			}
		);
	};

	const handleSignupSubmit = (e) => {
		e.preventDefault();
		if (newPassword === confirmNewPassword) {
			setSignupErrors([]);
			return dispatch(
				sessionActions.signup({ email, username, password })
			).catch(async (res) => {
				const data = await res.json();
				if (data && data.errors) setSignupErrors(data.errors);
			});
		}
		return setSignupErrors([
			'Confirm Password field must be the same as the Password field',
		]);
	};

	const handleDemoLogin = (e) => {
    e.preventDefault();
		return dispatch(
			sessionActions.login({ credential: 'demo', password: 'password' })
		).catch(async (res) => {
			const data = await res.json();
			if (data && data.errors) setSigninErrors(data.errors);
		});
	};

	return (
		<div className='signin-singup-container'>
			<div className='signin-container'>
				<h2>Sign in</h2>
				<form className='form signin-form' onSubmit={handleSigninSubmit}>
					<ul>
						{signinErrors.map((error, idx) => (
							<li key={idx}>{error}</li>
						))}
					</ul>
					<label>
						Username or Email
						<input
							type='text'
							value={credential}
							onChange={(e) => setCredential(e.target.value)}
							required
						/>
					</label>
					<label>
						Password
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</label>
					<button type='submit'>Log In</button>
				</form>
			</div>
			<div>
				<form onSubmit={handleDemoLogin}>
					<button type='submit'>Demo</button>
				</form>
			</div>
			<div className='divider'>
				<hr />
			</div>
			<div className='signup-container'>
				<h2>Create a new account</h2>
				<form className=' form signup-form' onSubmit={handleSignupSubmit}>
					<ul>
						{signupErrors.map((error, idx) => (
							<li key={idx}>{error}</li>
						))}
					</ul>
					<label>
						Email
						<input
							type='text'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</label>
					<label>
						Username
						<input
							type='text'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</label>
					<label>
						Password
						<input
							type='password'
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
							required
						/>
					</label>
					<label>
						Confirm Password
						<input
							type='password'
							value={confirmNewPassword}
							onChange={(e) => setConfirmNewPassword(e.target.value)}
							required
						/>
					</label>
					<button type='submit'>Sign Up</button>
				</form>
			</div>
		</div>
	);
};

export default SigninSignUpForm;
