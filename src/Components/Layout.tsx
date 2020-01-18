import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from './BracketAppBar';
import AppDrawer from './AppDrawer';

const Layout: React.FC = ({ children }) => {
	const [appDrawerOpen, setAppDrawerOpen] = useState(false);

	return (
		<Box display="flex">
			<CssBaseline />
			<AppBar appDrawerOpen={appDrawerOpen} toggleAppDrawer={setAppDrawerOpen} />
			<AppDrawer open={appDrawerOpen} onClose={() => setAppDrawerOpen(false)} />
			<Box flexGrow={1} paddingY={2}>
				<Toolbar />
				<Container component="main" maxWidth="xl">
					{children}
				</Container>
			</Box>
		</Box>
	);
};

export default Layout;