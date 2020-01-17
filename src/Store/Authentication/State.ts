import { DateTime } from 'luxon';

export interface IAuthenticationState {
	name?: string;
	emails?: string[];
	expiration?: DateTime;
	isAuthenticated: boolean;
}

export const InitialState: IAuthenticationState = {
	isAuthenticated: false,
};
