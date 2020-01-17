import { IAuthenticationState, InitialState } from './State';
import { AuthenticationAction, AuthenticationActions } from './Actions';

export function AuthenticationReducer(
	state: IAuthenticationState = InitialState,
	action: AuthenticationAction
): IAuthenticationState {
	switch (action.type) {
		case AuthenticationActions.LogIn:
			return {
				...state,

				isAuthenticated: true,
				name: action.name,
				emails: action.emails,
				expiration: action.expiration,
			};

		case AuthenticationActions.LogOut:
			return {
				...state,

				isAuthenticated: false,
				name: undefined,
				emails: undefined,
				expiration: undefined,
			};

		default:
			return {
				...state,
			};
	}
}
