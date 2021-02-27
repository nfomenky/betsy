import { csrfFetch } from './csrf';

const SET_USER = 'session/ADD_USER';
const REMOVE_USER = 'session/REMOVE_USER';

// regular actions
const setUser = (user) => {
	return {
		type: SET_USER,
		payload: user,
	};
};

const removeUser = () => {
	return {
		type: REMOVE_USER,
	};
};

// thunk actions
export const signup = (newUser) => {
	return async function (dispatch) {
		const { username, email, password } = newUser;
		const response = await csrfFetch('/api/users', {
			method: 'POST',
			body: JSON.stringify({
				username,
				email,
				password,
			}),
		});
		const data = await response.json();
		dispatch(setUser(data.user));
		return response;
	};
};

export const login = (user) => {
	return async function (dispatch) {
		const { credential, password } = user;
		const response = await csrfFetch('/api/session', {
			method: 'POST',
			body: JSON.stringify({
				credential,
				password,
			}),
		});
		const data = await response.json();
		dispatch(setUser(data.user));
		return response;
	};
};

export const logout = () => {
  return async function(dispatch) {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
  }
}

export const restoreUser = () => {
	return async function (dispatch) {
		const response = await csrfFetch('/api/session');
		const data = await response.json();
		dispatch(setUser(data.user));
		return response;
	};
};

const initialState = { user: null };

// reducer
const sessionReducer = (state = initialState, action) => {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case SET_USER:
			newState.user = action.payload;
			return newState;
		case REMOVE_USER:
			newState.user = null;
			return newState;
		default:
			return state;
	}
};

export default sessionReducer;
