import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import Theme from 'Theme';
import { Store } from 'Store';
import * as ServiceWorker from './Types/ServiceWorker';
import { ThemeProvider } from '@material-ui/core';

ReactDOM.render(
	<Provider store={Store}>
		<ThemeProvider theme={Theme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ServiceWorker.unregister();
