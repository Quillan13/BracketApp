import React from 'react';
import { Router } from '@reach/router';
import Brackets from 'Pages/Brackets';
import CustomBracket from 'Pages/Brackets/CustomBracket';

import Home from 'Pages/Home';
import DisneyAnimatedMovies from 'Pages/Brackets/DisneyAnimatedMovies';
import DreamworksAnimatedFilms from 'Pages/Brackets/DreamworksAnimatedMovies';

const App: React.FC = () => {
	return (
		<Router>
			<Home path="/" />
			<Brackets path="Brackets">
				<CustomBracket path="Custom" />
				<DisneyAnimatedMovies path="DisneyAnimated" />
				<DreamworksAnimatedFilms path="DreamworksAnimated" />
			</Brackets>
		</Router>
	);
};

export default App;
