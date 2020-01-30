import React from 'react';
import { Router } from '@reach/router';

import Brackets from 'Pages/Brackets';
import CustomBracket from 'Pages/Brackets/CustomBracket';
import DisneyAnimatedMovies from 'Pages/Brackets/DisneyAnimatedMovies';
import DreamworksAnimatedFilms from 'Pages/Brackets/DreamworksAnimatedMovies';
import Layout from 'Components/Layout';
import PreMade from 'Pages/PreMade';
import Home from 'Pages/Home';
import Make from 'Components/Inputs/Make';

const App: React.FC = () => {
	return (
		<>
			<Layout>
				<Router>
					<Home path="/" />
					<PreMade path="PreMade" />
					<Brackets path="Brackets">
						<CustomBracket path="Custom">
							<Make path="Custom/4" num={4} />}
				 			<Make path="Custom/8" num={8} />
							<Make path="Custom/16" num={16} />
							<Make path="Custom/32" num={32} />
							<Make path="Custom/64" num={64} />
							<Make path="Custom/128" num={128} />
						</CustomBracket>
						<DisneyAnimatedMovies path="DisneyAnimated" />
						<DreamworksAnimatedFilms path="DreamworksAnimated" />
					</Brackets>
				</Router>
			</Layout>
		</>
	);
};

export default App;
