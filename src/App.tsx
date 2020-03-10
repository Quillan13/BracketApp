import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MM2020 from 'Pages/Brackets/MM2020'
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
	// const [redirectTo, setRedirectTo] = useState<string>();

	useEffect(() => {
		if (isAuthenticated) {
			UserSettingsService.GetByOwnerId().then(response => {
				dispatch(UserSettingsActionCreators.Update(response));
			})
		}
		// setRedirectTo("/");
	}, [isAuthenticated, dispatch]);

	useEffect(() => {
		setTheme(createTheme(userSettings?.primary, userSettings?.secondary, userSettings?.tertiary));
	}, [userSettings]);

	// if (redirectTo !== undefined)
	// 	return <Redirect to={redirectTo} />

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Layout>
					{isAuthenticated &&
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/PreMade">
								<PreMade />
							</Route>
							<Route path="/UserSettings">
								<UserSettings />
							</Route>
							<Route path="/MyCollections">
								<MyCollections />
							</Route>
							<Route path="/Brackets">
								<Route path="/Brackets/BracketType" >
									<BracketType />
								</Route>
								<Route path="/Brackets/MM2020">
									<MM2020 />
								</Route>
								<Route path="/Brackets/SingleCustom">
									<SingleCustomBracket />
								</Route>
								<Route path="/Brackets/DoubleCustom">
									<DoubleCustomBracket />
								</Route>
								<Route path="/Brackets/DisneyAnimated">
									<DisneyAnimatedMovies />
								</Route>
								<Route path="/Brackets/DreamworksAnimated">
									<DreamworksAnimatedFilms />
								</Route>
							</Route>
						</Switch>
					}
					{!isAuthenticated &&
						<Router>
							<Switch>
								<Route path="/">
									<Home />
								</Route>
							</Switch>
						</Router>
					}
				</Layout>
			</ThemeProvider>
		</Router>
	);
};

export default App;
