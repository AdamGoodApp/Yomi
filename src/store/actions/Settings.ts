import { SETTINGS_EVENT } from '../types';

export const setOpen = (data : any) => {
	return { type: SETTINGS_EVENT, payload: data };
};