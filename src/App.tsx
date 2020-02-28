import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';

import MM2020 from 'Pages/Brackets/MM2020'
import Brackets from 'Pages/Brackets';
import BracketType from 'Pages/Brackets/BracketType'
import SingleCustomBracket from 'Pages/Brackets/SingleCustomBracket';
import DoubleCustomBracket from 'Pages/Brackets/DoubleCustomBracket';
import DisneyAnimatedMovies from 'Pages/Brackets/DisneyAnimatedMovies';
import DreamworksAnimatedFilms from 'Pages/Brackets/DreamworksAnimatedMovies';
import Layout from 'Components/Layout';
import PreMade from 'Pages/PreMade';
import Home from 'Pages/Home';
import UserSettings from 'Pages/UserSettings';
import { ThemeProvider, Theme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { GlobalState } from 'Store';
import UserSettingsService from 'Services/UserSettingsService';
import CreateTheme from 'Theme';

const App: React.FC = () => {

	const { isAuthenticated } = useSelector((state: GlobalState) => state.authentication);
	const [Theme, setTheme] = useState(CreateTheme('#0d47a1', '#ffab40', '#66bb6a'));

	useEffect(() => {
		if (isAuthenticated) {
			UserSettingsService.GetByOwnerId().then(response => {
				setTheme(CreateTheme(response.primary, response.secondary, response.tertiary));
			})

		};
	}
		, [isAuthenticated]);

	return (
		<>
			<ThemeProvider theme={Theme}>
				<Layout>
					<Router>
						<Home path="/" />
						<PreMade path="PreMade" />
						<UserSettings path="UserSettings" />
						<Brackets path="Brackets">
							<BracketType path="BracketType" />
							<MM2020 path="MM2020" />
							<SingleCustomBracket path="SingleCustom" />
							<DoubleCustomBracket path="DoubleCustom" />
							<DisneyAnimatedMovies path="DisneyAnimated" />
							<DreamworksAnimatedFilms path="DreamworksAnimated" />
						</Brackets>
					</Router>
				</Layout>
			</ThemeProvider>
		</>
	);
};

export default App;
