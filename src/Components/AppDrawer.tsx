import clsx from 'clsx';
import React from 'react';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CollectionsIcon from '@material-ui/icons/Collections';
import { Link } from '@reach/router';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawer: {
			width: 240,
			flexShrink: 0,
			whiteSpace: 'nowrap',
		},
		drawerOpen: {
			width: 240,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			background: theme.palette.secondary.main,
		},
		drawerClose: {
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			overflowX: 'hidden',
			width: theme.spacing(7) + 1,
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9) + 1,
			},
			background: theme.palette.primary.main,
		},
		toolbar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			padding: theme.spacing(0, 1),
			...theme.mixins.toolbar,
		},
		icon: {
			color: '#FFFFFF'
		},
	})
);

const AppDrawer: React.FC<AppDrawerProps> = ({ open, onClose }) => {
	const theme = useTheme();
	const classes = useStyles();

	return (
		<Drawer
			variant="permanent"
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: open,
				[classes.drawerClose]: !open,
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				}),
			}}>
			<div className={classes.toolbar}>
				<IconButton onClick={onClose}>
					{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>
			</div>
			<Divider />
			<List>
				{[{ text: 'Home', path: "/", icon: <HomeIcon /> },
				{ text: 'Build A Bracket', path: "/Brackets/BracketType", icon: <BuildIcon /> },
				{ text: 'Pre Built Brackets', path: "/PreMade", icon: <CollectionsIcon /> }].map((route, index) => (
					<ListItem component={Link} to={route.path} button key={route.text}>
						<ListItemIcon className={classes.icon}>{route.icon}</ListItemIcon>
						<ListItemText className={classes.icon} primary={route.text} />
					</ListItem>
				))}
			</List>
			<Divider />
		</Drawer>
	);
};

type AppDrawerProps = {
	open: boolean;
	onClose: () => void;
};

export default AppDrawer;