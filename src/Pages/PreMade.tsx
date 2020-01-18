import React from 'react';

import Button from '@material-ui/core/Button';

import Page from 'Types/Page';

const PreMade: Page = () => {
	return (
		<>
			<Button href="/Brackets/DisneyAnimated">Disney Animated Movies</Button>
			<br />
			<Button href="/Brackets/DreamworksAnimated">Dreamworks Animated Movies</Button>
		</>
	);
};

export default PreMade;
