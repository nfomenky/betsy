import { useState } from 'react';
import SigninSignUpForm from './SigninSignupForm'
import {Modal} from '../../context/Modal';

const SigninSignupFormModal = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button onClick={() => setShowModal(true)}>Log In</button>
			{showModal && (
				<Modal className='modal' onClose={() => setShowModal(false)}>
					<SigninSignUpForm />
				</Modal>
			)}
		</>
	)
};

export default SigninSignupFormModal;
