import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';

import MM2020 from 'Pages/Brackets/MM2020'
import Brackets from 'Pages/Brackets';
import BracketType from 'Pages/Brackets/BracketType';
import MyCollections from 'Pages/MyCollections';
import SingleCustomBracket from 'Pages/Brackets/SingleCustomBracket';
import DoubleCustomBracket from 'Pages/Brackets/DoubleCustomBracket';
import DisneyAnimatedMovies from 'Pages/Brackets/DisneyAnimatedMovies';
import DreamworksAnimatedFilms from 'Pages/Brackets/DreamworksAnimatedMovies';
import Layout from 'Components/Layout';
import PreMade from 'Pages/PreMade';
import Home from 'Pages/Home';
import UserSettings from 'Pages/UserSettings';
import { ThemeProvider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { UserSettingsActionCreators } from 'Store/UserSettings'
import { GlobalState } from 'Store';
import UserSettingsService from 'Services/UserSettingsService';
import createTheme from 'Theme';
import Constants from 'Constants'

const App: React.FC = () => {

	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state: GlobalState) => state.authentication);
	const { userSettings } = useSelector((state: GlobalState) => state.userSettings);
	const [theme, setTheme] = useState(createTheme(Constants.primary, Constants.secondary, Constants.tertiary));

	useEffect(() => {
		if (isAuthenticated) {
			UserSettingsService.GetByOwnerId().then(response => {
				dispatch(UserSettingsActionCreators.Update(response));
			})

		};
	}, [isAuthenticated]);

	useEffect(() => {
		setTheme(createTheme(userSettings?.primary, userSettings?.secondary, userSettings?.tertiary));
	}, [userSettings]);

	return (
		<>
			<ThemeProvider theme={theme}>
				<Layout>
					{isAuthenticated &&
						<Router>
							<Home path="/" />
							<PreMade path="PreMade" />
							<UserSettings path="UserSettings" />
							<MyCollections path="MyCollections" />
							<Brackets path="Brackets">
								<BracketType path="BracketType" />
								<MM2020 path="MM2020" />
								<SingleCustomBracket path="SingleCustom" />
								<DoubleCustomBracket path="DoubleCustom" />
								<DisneyAnimatedMovies path="DisneyAnimated" />
								<DreamworksAnimatedFilms path="DreamworksAnimated" />
							</Brackets>
						</Router>
					}
					<Router>
						<Home path="/" />
					</Router>


				</Layout>
			</ThemeProvider>
		</>
	);
};

export default App;
