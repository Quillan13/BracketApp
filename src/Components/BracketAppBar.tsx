import React from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import AuthService from 'Services/AuthService';
import { AuthenticationActionCreators } from 'Store/Authentication';
import { GlobalState } from 'Store';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		username: {
			marginRight: theme.spacing(3),
		},

		appBar: {
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			marginLeft: 240,
			width: `calc(100% - 240px)`,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
	})
);

const AppBar: React.FC<AppBarProps> = ({ appDrawerOpen, toggleAppDrawer }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state: GlobalState) => state.authentication.isAuthenticated);
	const username = useSelector((state: GlobalState) => state.authentication.name);

	const login = async () => {
		try {
			const response = await AuthService.LogIn();
			dispatch(AuthenticationActionCreators.LogIn(response));
		} catch (error) {
			console.error(error);
		}
	};

	const logout = async () => {
		try {
			AuthService.LogOut();
			dispatch(AuthenticationActionCreators.LogOut());
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<MuiAppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: appDrawerOpen })}>
			<Toolbar>
				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => toggleAppDrawer(!appDrawerOpen)}>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					Bracket App
				</Typography>

				{username !== undefined && (
					<Typography className={classes.username} variant="subtitle1">
						Hello and Welcome, {username}
					</Typography>
				)}
				{isAuthenticated ? (
					<Button variant="contained" color="secondary" onClick={logout}>
						Logout
					</Button>
				) : (
					<Button variant="contained" color="secondary" onClick={login}>
						Login
					</Button>
				)}
			</Toolbar>
		</MuiAppBar>
	);
};

type AppBarProps = {
	appDrawerOpen: boolean;
	toggleAppDrawer: (open: boolean) => void;
};

export default AppBar;