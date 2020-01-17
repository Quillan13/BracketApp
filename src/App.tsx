import React from 'react';
import { Router } from '@reach/router';

import BracketAppBar from 'Components/BracketAppBar';

import Home from 'Pages/Home';
import Brackets from 'Pages/Brackets';
import CustomBracket from 'Pages/Brackets/CustomBracket';
import DisneyAnimatedMovies from 'Pages/Brackets/DisneyAnimatedMovies';
import DreamworksAnimatedFilms from 'Pages/Brackets/DreamworksAnimatedMovies';

const App: React.FC = () => {
	return (
		<>
			<BracketAppBar />
			<Router>
				<Home path="/" />
				<Brackets path="Brackets">
					<CustomBracket path="Custom" />
					<DisneyAnimatedMovies path="DisneyAnimated" />
					<DreamworksAnimatedFilms path="DreamworksAnimated" />
				</Brackets>
			</Router>
		</>
	);
};

export default App;
