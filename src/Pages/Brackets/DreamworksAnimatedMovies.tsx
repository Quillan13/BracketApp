import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import SemiFinal from 'Components/SemiFinal';
import Championship from 'Components/Championship';
import Bracket from 'Data/DreamworksAnimatedFilms';
import { makeStyles, Theme, createStyles, createMuiTheme, Grid } from '@material-ui/core';
import Page from 'Types/Page';

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

const DreamworksAnimatedFilms: Page = () => {
	function handleChamp1() {
		setLeft('green');
		setRight('red');
	}

	function handleChamp2() {
		setLeft('red');
		setRight('green');
	}

	const classes = useStyles(createMuiTheme());
	const [left, setLeft] = useState('default');
	const [right, setRight] = useState('default');
	// const [bottom, setBottom] = useState("default");

	return (
		<Grid container wrap="nowrap" className={classes.bracket}>
			<div className="bracket-left">
				<div className="round">
					<Match direction="left" team1={Bracket.Movies1[0].title} team2={Bracket.Movies1[15].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies1[1].title} team2={Bracket.Movies1[14].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies1[2].title} team2={Bracket.Movies1[13].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies1[3].title} team2={Bracket.Movies1[12].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies1[4].title} team2={Bracket.Movies1[11].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies1[5].title} team2={Bracket.Movies1[10].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies1[6].title} team2={Bracket.Movies1[9].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies1[7].title} team2={Bracket.Movies1[8].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies2[0].title} team2={Bracket.Movies2[15].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies2[1].title} team2={Bracket.Movies2[14].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies2[2].title} team2={Bracket.Movies2[13].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies2[3].title} team2={Bracket.Movies2[12].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies2[4].title} team2={Bracket.Movies2[11].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies2[5].title} team2={Bracket.Movies2[10].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies2[6].title} team2={Bracket.Movies2[9].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Movies2[7].title} team2={Bracket.Movies2[8].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Specials[0].title} team2={Bracket.Specials[15].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Specials[1].title} team2={Bracket.Specials[14].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Specials[2].title} team2={Bracket.Specials[13].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Specials[3].title} team2={Bracket.Specials[12].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Specials[4].title} team2={Bracket.Specials[11].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Specials[5].title} team2={Bracket.Specials[10].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Specials[6].title} team2={Bracket.Specials[9].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Specials[7].title} team2={Bracket.Specials[8].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Sequals[0].title} team2={Bracket.Sequals[15].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Sequals[1].title} team2={Bracket.Sequals[14].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Sequals[2].title} team2={Bracket.Sequals[13].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Sequals[3].title} team2={Bracket.Sequals[12].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Sequals[4].title} team2={Bracket.Sequals[11].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Sequals[5].title} team2={Bracket.Sequals[10].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Sequals[6].title} team2={Bracket.Sequals[9].title} click={() => {}} id={0} />
					<Match direction="left" team1={Bracket.Sequals[7].title} team2={Bracket.Sequals[8].title} click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
					<Match direction="left" team1="" team2="" click={() => {}} id={0} />
				</div>

				<SemiFinal direction="left" team1="" team2="" click={() => {}} id={0} />

				<Championship team1="" click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1="" click={handleChamp2} color={right}></Championship>

				<SemiFinal direction="right" team1="" team2="" click={() => {}} id={0} />

				<div className="round">
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
					<Match direction="right" team1="" team2="" click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="right" team1={Bracket.TVShows1[0].title} team2={Bracket.TVShows1[15].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows1[1].title} team2={Bracket.TVShows1[14].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows1[2].title} team2={Bracket.TVShows1[13].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows1[3].title} team2={Bracket.TVShows1[12].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows1[4].title} team2={Bracket.TVShows1[11].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows1[5].title} team2={Bracket.TVShows1[10].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows1[6].title} team2={Bracket.TVShows1[9].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows1[7].title} team2={Bracket.TVShows1[8].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows2[0].title} team2={Bracket.TVShows2[15].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows2[1].title} team2={Bracket.TVShows2[14].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows2[2].title} team2={Bracket.TVShows2[13].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows2[3].title} team2={Bracket.TVShows2[12].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows2[4].title} team2={Bracket.TVShows2[11].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows2[5].title} team2={Bracket.TVShows2[10].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows2[6].title} team2={Bracket.TVShows2[9].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.TVShows2[7].title} team2={Bracket.TVShows2[8].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts1[0].title} team2={Bracket.Shorts1[15].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts1[1].title} team2={Bracket.Shorts1[14].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts1[2].title} team2={Bracket.Shorts1[13].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts1[3].title} team2={Bracket.Shorts1[12].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts1[4].title} team2={Bracket.Shorts1[11].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts1[5].title} team2={Bracket.Shorts1[10].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts1[6].title} team2={Bracket.Shorts1[9].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts1[7].title} team2={Bracket.Shorts1[8].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts2[0].title} team2={Bracket.Shorts2[15].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts2[1].title} team2={Bracket.Shorts2[14].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts2[2].title} team2={Bracket.Shorts2[13].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts2[3].title} team2={Bracket.Shorts2[12].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts2[4].title} team2={Bracket.Shorts2[11].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts2[5].title} team2={Bracket.Shorts2[10].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts2[6].title} team2={Bracket.Shorts2[9].title} click={() => {}} id={0} />
					<Match direction="right" team1={Bracket.Shorts2[7].title} team2={Bracket.Shorts2[8].title} click={() => {}} id={0} />
				</div>
			</div>
		</Grid>
	);
};

export default DreamworksAnimatedFilms;
