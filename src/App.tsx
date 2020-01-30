import React from 'react';
import { Router } from '@reach/router';

import Brackets from 'Pages/Brackets';
import CustomBracket from 'Pages/Brackets/CustomBracket';
import DisneyAnimatedMovies from 'Pages/Brackets/DisneyAnimatedMovies';
import DreamworksAnimatedFilms from 'Pages/Brackets/DreamworksAnimatedMovies';
import Layout from 'Components/Layout';
import PreMade from 'Pages/PreMade';
import Home from 'Pages/Home';

const App: React.FC = () => {
	return (
		<>
			<Layout>
				<Router>
					<Home path="/" />
					<PreMade path="PreMade" />
					<Brackets path="Brackets">
						<CustomBracket path="Custom" />
						<DisneyAnimatedMovies path="DisneyAnimated" />
						<DreamworksAnimatedFilms path="DreamworksAnimated" />
					</Brackets>
				</Router>
			</Layout>
		</>
	);
};

export default App;
