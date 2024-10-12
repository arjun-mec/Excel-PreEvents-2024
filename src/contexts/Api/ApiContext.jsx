import { createContext } from 'react';

export const ApiContext = createContext({
	accessToken: '',
	refreshToken: '',
	setAccessToken: () => {},
	setRefreshToken: () => {},
	axiosAccPrivate: {},
	axiosAccPublic: {},
	axiosEventsPrivate: {},
	axiosEventsPublic: {},
});