import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AuthenticationReducer } from './Authentication';
import LocalStorageService from '../Services/LocalStorageService';

const reducers = {
	authentication: AuthenticationReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, LocalStorageService.LoadReduxStore(), composeWithDevTools());

store.subscribe(() => LocalStorageService.PersistReduxStore(store.getState()));

export type GlobalState = ReturnType<typeof rootReducer>;

export { store as Store, reducers as Reducers, rootReducer as RootReducer };
