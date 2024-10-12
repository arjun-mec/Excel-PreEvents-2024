import { createContext } from 'react';

const UserContext = createContext({
	userData: {
		loggedIn: false,
		name: '',
		email: '',
		profilePictureUrl: '',
		roles: [],
		registeredEvents: [],
	},
	userLoading: true,
	userError: '',
	logout: () => {},
});

export default UserContext;