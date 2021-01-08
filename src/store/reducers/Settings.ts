import { SETTINGS_EVENT } from '../types';

interface State {
  open: boolean | null
};

const INITIAL_STATE: State = {
	open: false
};

const Settings = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case SETTINGS_EVENT:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default Settings;