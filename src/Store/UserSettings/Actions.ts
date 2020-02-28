import { IUserSettingsState } from './State';

export enum UserSettingsActions {
	Update = 'UserSettings_Update',
}

interface UpdateAction {
	type: UserSettingsActions.Update;
	userSettings: IUserSettingsState["userSettings"];
}

export const UserSettingsActionCreators = {
	Update: (userSettings: IUserSettingsState["userSettings"]): UpdateAction => ({
		type: UserSettingsActions.Update,
		userSettings,
	}),
};

export type UserSettingsAction = UpdateAction;
