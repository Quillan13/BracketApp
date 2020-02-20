import React, { useEffect, useState } from 'react';

import Page from 'Types/Page';
import { Button, makeStyles, Theme, createStyles, Grid } from '@material-ui/core';

import Axios from 'axios';
import { GlobalState } from 'Store';
import { useSelector } from 'react-redux';
import AuthService from 'Services/AuthService';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		button: {
			backgroundColor: theme.palette.tertiary.main,
			color: theme.palette.tertiary.contrastText,
			'&:hover': { backgroundColor: theme.palette.tertiary.dark, color: theme.palette.tertiary.contrastText },
			height: '400px',
			width: '25vw',
			borderRadius: 30,
		},
		bar: {
			width: '100%',
			marginBottom: '30px',
			height: '200px',
			borderRadius: 30,
		},
		root: {
			height: '100%',
		},
	})
);

const Home: Page = () => {
	const classes = useStyles();

	const [response, setResponse] = useState<any>();
	const { isAuthenticated } = useSelector((state: GlobalState) => state.authentication);

	useEffect(() => {
		if (isAuthenticated) {
			AuthService.GetAccessToken().then(({ accessToken }) => {
				Axios.get(`${process.env.REACT_APP_API_BASE_URL}/WeatherForecast`, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `bearer ${accessToken}`,
					},
				})
					.then(setResponse)
					.catch(error => {
						//do something with error
						console.error(error);
					});
			});
		}
	}, [isAuthenticated]);

	return (
		<Grid container className={classes.root} direction="column" justify="space-between">
			{response !== undefined && (
				<Grid item xs={12}>
					<pre>{JSON.stringify(response, null, 4)}</pre>
				</Grid>
			)}
			<Grid item>
				<Button color="secondary" size="large" variant="contained" className={classes.bar} href="/Brackets/MM2020">
					March Madness 2020
				</Button>
			</Grid>
			<Grid item>
				<Grid container justify="space-between">
					<Grid item>
						<Button className={classes.button} size="large" href="/Brackets/BracketType">
							Custom Brackets
						</Button>
					</Grid>
					<Grid item>
						<Button className={classes.button} size="large" href="/PreMade">
							Pre Built Brackets
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Home;
