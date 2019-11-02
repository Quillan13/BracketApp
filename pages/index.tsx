import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

import dynamic from 'next/dynamic';

const BracketView = dynamic(() => import('../components/BracketView'), { ssr: false });

const Home = () => {
	return (
		<div style={{ height: '100vh', width: '100vw' }}>
			<BracketView />
		</div>
	);
};

export default Home;
