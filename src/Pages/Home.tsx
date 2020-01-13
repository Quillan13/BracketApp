import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import AuthService from 'Services/AuthService'

import Page from 'Types/Page';
import { AuthResponse } from 'msal';

const Home: Page = () => {
	const [authResponse, setAuthResponse] = useState<AuthResponse>();
	const login = async () => {
		const response = await AuthService.LogIn();
		setAuthResponse(response);
	}
	return (
		<>
			<Button onClick={login}>Login</Button>
			<Button href="/Brackets/Custom">Build a Bracket</Button>
			<br />
			<Button href="/Brackets/DisneyAnimated">Disney Animated Movies</Button>
			<br />
			<Button href="/Brackets/DreamworksAnimated">Dreamworks Animated Movies</Button>
			{authResponse != null && <pre>{JSON.stringify(authResponse, null, 4)}</pre>}
		</>
	);
};

export default Home;
