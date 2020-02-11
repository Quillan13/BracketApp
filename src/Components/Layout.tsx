import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from './BracketAppBar';
import AppDrawer from './AppDrawer';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		height: {
			height: "100%-toolbar", //theme.mixins.toolbar
		},
		bgColor: {
			background: "#E3E2E2",
		},
	})
);

const Layout: React.FC = ({ children }) => {
	const [appDrawerOpen, setAppDrawerOpen] = useState(false);
	const classes = useStyles();

	return (
		<Box className={classes.bgColor} display="flex">
			<CssBaseline />
			<AppBar appDrawerOpen={appDrawerOpen} toggleAppDrawer={setAppDrawerOpen} />
			<AppDrawer open={appDrawerOpen} onClose={() => setAppDrawerOpen(false)} />
			<Box flexGrow={1} paddingY={2} height="100vh">
				<Toolbar />
				<Container className={classes.height} component="main" maxWidth="xl">
					{children}
				</Container>
			</Box>
		</Box>
	);
};

export default Layout;