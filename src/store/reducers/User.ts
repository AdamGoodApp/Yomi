import { AUTH_EVENT } from '../types';

interface State {
  auth: {} | null
};

const INITIAL_STATE: State = {
	auth: null
};

const UserReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case AUTH_EVENT:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default UserReducer;