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
		container: {
			padding: theme.spacing(2),

			minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,

			'@media (min-width:0px) and (orientation: landscape)': {
				minHeight: `calc(100vh - ${
					(theme.mixins.toolbar['@media (min-width:0px) and (orientation: landscape)'] as any).minHeight
					}px)`,
			},

			'@media (min-width: 600px)': {
				minHeight: `calc(100vh - ${(theme.mixins.toolbar['@media (min-width:600px)'] as any).minHeight}px)`,
			},
			backgroundColor: "#E3E2E2",

		},
	})
);

const Layout: React.FC = ({ children }) => {
	const [appDrawerOpen, setAppDrawerOpen] = useState(false);
	const classes = useStyles();

	return (
		<Box display="flex">
			<CssBaseline />
			<AppBar appDrawerOpen={appDrawerOpen} toggleAppDrawer={setAppDrawerOpen} />
			<AppDrawer open={appDrawerOpen} onClose={() => setAppDrawerOpen(false)} />
			<Box flexGrow={1}>
				<Toolbar />
				<Container className={classes.container} component="main" maxWidth="xl">
					{children}
				</Container>
			</Box>
		</Box>
	);
};

export default Layout;