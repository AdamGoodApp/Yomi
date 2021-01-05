import { AUTH_EVENT } from '../types';

export const setUser = (data : any) => {
	return { type: AUTH_EVENT, payload: data };
};