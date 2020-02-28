import { IUserSettingsState, InitialState } from './State';
import { UserSettingsAction, UserSettingsActions } from './Actions';

export function UserSettingsReducer(
	state: IUserSettingsState = InitialState,
	action: UserSettingsAction
): IUserSettingsState {
	switch (action.type) {
		case UserSettingsActions.Update:
			return {
				...state,

				userSettings: action.userSettings,
			};

		default:
			return {
				...state,
			};
	}
}
