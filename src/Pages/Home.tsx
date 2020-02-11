import React from 'react';

import Page from 'Types/Page';
import { Button, makeStyles, Theme, createStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            backgroundColor: theme.palette.tertiary.main,
            color: theme.palette.tertiary.contrastText,
            "&:hover": { backgroundColor: theme.palette.tertiary.dark, color: theme.palette.tertiary.contrastText },
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
            height: "100%",
        },
    })
);

const Home: Page = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} direction="column" justify="space-between">
            <Grid item>
                <Button color="secondary" size="large" variant="contained" className={classes.bar} href="/Brackets/MM2020">March Madness 2020</Button>
            </Grid>
            <Grid item>
                <Grid container justify="space-between">
                    <Grid item>
                        <Button className={classes.button} size="large" href="/Brackets/BracketType">Custom Brackets</Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.button} size="large" href="/PreMade">Pre Built Brackets</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
