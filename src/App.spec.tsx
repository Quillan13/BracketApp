import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test("App doesn't crash when rendered", () => {
	expect(() => render(<App />)).not.toThrow();
});
