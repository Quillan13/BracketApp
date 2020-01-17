import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import Theme from 'Theme';
import { Store } from 'Store';
import { ThemeProvider } from '@material-ui/core';

test("App doesn't crash when rendered", () => {
	expect(() => render(<Provider store={Store}>
		<ThemeProvider theme={Theme}>
			<App />
		</ThemeProvider>
	</Provider>)).not.toThrow();
});
