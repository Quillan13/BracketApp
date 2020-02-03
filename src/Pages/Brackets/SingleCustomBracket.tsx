import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles, Theme, createStyles, createMuiTheme, Box, Grid } from '@material-ui/core';
import Page from 'Types/Page';
import Make from 'Components/Inputs/Make';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		selectGrid: {
			height: '70px',
			width: '100vw',
		},
		bracket: {
			margin: 'auto',
			width: 'fit-content',
			minHeight: 'calc(100vh - 70px)',
			padding: theme.spacing(3),
		},
		formControl: {
			margin: theme.spacing(1),
			//Keep the Drop Down From Getting Clustered
			minWidth: 150,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	})
);

const SingleCustomBracket: Page = () => {
	const classes = useStyles(createMuiTheme());

	const inputLabel = React.useRef<HTMLLabelElement>(null);

	const [labelWidth, setLabelWidth] = React.useState(0);

	React.useEffect(() => {
		setLabelWidth(inputLabel.current!.offsetWidth);
	}, []);

	const [bracketSize, setBracketSize] = React.useState<number>();
	return (
		<>
			<Box height="70px" width="100vw" padding={2}>
				<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
						Bracket Size
					</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={bracketSize}
						onChange={event => setBracketSize(parseInt(event.target.value as string))}
						labelWidth={labelWidth}>
						<MenuItem value={undefined}>
							<em>None</em>
						</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={8}>8</MenuItem>
						<MenuItem value={16}>16</MenuItem>
						<MenuItem value={32}>32</MenuItem>
						<MenuItem value={64}>64</MenuItem>
						<MenuItem value={128}>128</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Grid container wrap="nowrap" className={classes.bracket}>
				{bracketSize === 4 && <Make num={4} />}
				{bracketSize === 8 && <Make num={8} />}
				{bracketSize === 16 && <Make num={16} />}
				{bracketSize === 32 && <Make num={32} />}
				{bracketSize === 64 && <Make num={64} />}
				{bracketSize === 128 && <Make num={128} />}
			</Grid>
		</>
	);
};

export default SingleCustomBracket;
