import React from 'react';
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

const App: React.FC = () => {
	return (
		<>
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
		</>
	);
};

export default App;
