import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AuthenticationReducer } from './Authentication';
import LocalStorageService from '../Services/LocalStorageService';
import { UserSettingsReducer } from './UserSettings';

const reducers = {
	authentication: AuthenticationReducer,
	userSettings: UserSettingsReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, LocalStorageService.LoadReduxStore(), composeWithDevTools());

store.subscribe(() => LocalStorageService.PersistReduxStore(store.getState()));

export type GlobalState = ReturnType<typeof rootReducer>;

export { store as Store, reducers as Reducers, rootReducer as RootReducer };
