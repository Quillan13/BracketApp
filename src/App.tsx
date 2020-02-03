import React from 'react';
import { Router } from '@reach/router';

import Brackets from 'Pages/Brackets';
import BracketType from 'Pages/Brackets/BracketType'
import SingleCustomBracket from 'Pages/Brackets/SingleCustomBracket';
import DoubleCustomBracket from 'Pages/Brackets/DoubleCustomBracket';
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
						<BracketType path="BracketType" />
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
