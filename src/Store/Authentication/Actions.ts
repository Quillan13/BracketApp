import { DateTime } from 'luxon';
import { AuthResponse } from 'msal';

export enum AuthenticationActions {
	LogIn = 'Authentication_LogIn',
	LogOut = 'Authentication_LogOut',
}

interface LogInAction {
	type: AuthenticationActions.LogIn;
	emails: string[];
	name: string;
	expiration: DateTime;
}

interface LogOutAction {
	type: AuthenticationActions.LogOut;
}

export const AuthenticationActionCreators = {
	LogIn: (authResponse: AuthResponse): LogInAction => ({
		type: AuthenticationActions.LogIn,
		emails: (authResponse.idToken.claims.emails as unknown) as string[],
		name: authResponse.idToken.name,
		expiration: DateTime.fromSeconds(+authResponse.idToken.expiration),
	}),
	LogOut: (): LogOutAction => ({
		type: AuthenticationActions.LogOut,
	}),
};

export type AuthenticationAction = LogInAction | LogOutAction;
