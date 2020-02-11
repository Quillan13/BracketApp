import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import SemiFinal from 'Components/SemiFinal';
import Championship from 'Components/Championship';
import Bracket from 'Data/DisneyAnimatedFilms';
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

const DisneyAnimatedMovies: Page = () => {
	function handleChamp1() {
		if (winners[125] != null && winners[126] != null) {
			setLeft('green');
			setRight('red');
		}
	}

	function handleChamp2() {
		if (winners[125] != null && winners[126] != null) {
			setLeft('red');
			setRight('green');
		}
	}

	function handleWinner(winner: string, index: number, loser: string) {
		if (winner != null && loser != null) {
			const newWinners = [...winners];
			newWinners[index] = winner;
			setWinner(newWinners);
		}
	}

	const classes = useStyles(createMuiTheme());
	// var winners = new Array();
	const [left, setLeft] = useState('default');
	const [right, setRight] = useState('default');
	const [winners, setWinner] = useState([].map(() => ""));

	return (
		<Grid container wrap="nowrap" className={classes.bracket}>
			<div className="bracket-left">
				<div className="round">
					<Match direction="left" team1={Bracket.Princesses[0].title} team2={Bracket.Princesses[15].title} click={handleWinner} id={1} />
					<Match direction="left" team1={Bracket.Princesses[1].title} team2={Bracket.Princesses[14].title} click={handleWinner} id={2} />
					<Match direction="left" team1={Bracket.Princesses[2].title} team2={Bracket.Princesses[13].title} click={handleWinner} id={3} />
					<Match direction="left" team1={Bracket.Princesses[3].title} team2={Bracket.Princesses[12].title} click={handleWinner} id={4} />
					{/* <p className="category-left">Princesses</p> */}
					<Match direction="left" team1={Bracket.Princesses[4].title} team2={Bracket.Princesses[11].title} click={handleWinner} id={5} />
					<Match direction="left" team1={Bracket.Princesses[5].title} team2={Bracket.Princesses[10].title} click={handleWinner} id={6} />
					<Match direction="left" team1={Bracket.Princesses[6].title} team2={Bracket.Princesses[9].title} click={handleWinner} id={7} />
					<Match direction="left" team1={Bracket.Princesses[7].title} team2={Bracket.Princesses[8].title} click={handleWinner} id={8} />
					<Match direction="left" team1={Bracket.EarlyYears[0].title} team2={Bracket.EarlyYears[15].title} click={handleWinner} id={9} />
					<Match direction="left" team1={Bracket.EarlyYears[1].title} team2={Bracket.EarlyYears[14].title} click={handleWinner} id={10} />
					<Match direction="left" team1={Bracket.EarlyYears[2].title} team2={Bracket.EarlyYears[13].title} click={handleWinner} id={11} />
					<Match direction="left" team1={Bracket.EarlyYears[3].title} team2={Bracket.EarlyYears[12].title} click={handleWinner} id={12} />
					<Match direction="left" team1={Bracket.EarlyYears[4].title} team2={Bracket.EarlyYears[11].title} click={handleWinner} id={13} />
					<Match direction="left" team1={Bracket.EarlyYears[5].title} team2={Bracket.EarlyYears[10].title} click={handleWinner} id={14} />
					<Match direction="left" team1={Bracket.EarlyYears[6].title} team2={Bracket.EarlyYears[9].title} click={handleWinner} id={15} />
					<Match direction="left" team1={Bracket.EarlyYears[7].title} team2={Bracket.EarlyYears[8].title} click={handleWinner} id={16} />
					<Match direction="left" team1={Bracket.Sequals2[0].title} team2={Bracket.Sequals2[15].title} click={handleWinner} id={17} />
					<Match direction="left" team1={Bracket.Sequals2[1].title} team2={Bracket.Sequals2[14].title} click={handleWinner} id={18} />
					<Match direction="left" team1={Bracket.Sequals2[2].title} team2={Bracket.Sequals2[13].title} click={handleWinner} id={19} />
					<Match direction="left" team1={Bracket.Sequals2[3].title} team2={Bracket.Sequals2[12].title} click={handleWinner} id={20} />
					<Match direction="left" team1={Bracket.Sequals2[4].title} team2={Bracket.Sequals2[11].title} click={handleWinner} id={21} />
					<Match direction="left" team1={Bracket.Sequals2[5].title} team2={Bracket.Sequals2[10].title} click={handleWinner} id={22} />
					<Match direction="left" team1={Bracket.Sequals2[6].title} team2={Bracket.Sequals2[9].title} click={handleWinner} id={23} />
					<Match direction="left" team1={Bracket.Sequals2[7].title} team2={Bracket.Sequals2[8].title} click={handleWinner} id={24} />
					<Match direction="left" team1={Bracket.TVMovies[0].title} team2={Bracket.TVMovies[15].title} click={handleWinner} id={25} />
					<Match direction="left" team1={Bracket.TVMovies[1].title} team2={Bracket.TVMovies[14].title} click={handleWinner} id={26} />
					<Match direction="left" team1={Bracket.TVMovies[2].title} team2={Bracket.TVMovies[13].title} click={handleWinner} id={27} />
					<Match direction="left" team1={Bracket.TVMovies[3].title} team2={Bracket.TVMovies[12].title} click={handleWinner} id={28} />
					<Match direction="left" team1={Bracket.TVMovies[4].title} team2={Bracket.TVMovies[11].title} click={handleWinner} id={29} />
					<Match direction="left" team1={Bracket.TVMovies[5].title} team2={Bracket.TVMovies[10].title} click={handleWinner} id={30} />
					<Match direction="left" team1={Bracket.TVMovies[6].title} team2={Bracket.TVMovies[9].title} click={handleWinner} id={31} />
					<Match direction="left" team1={Bracket.TVMovies[7].title} team2={Bracket.TVMovies[8].title} click={handleWinner} id={32} />
				</div>

				<div className="round">
					<Match direction="left" team1={winners[1]} team2={winners[2]} click={handleWinner} id={65} />
					<Match direction="left" team1={winners[3]} team2={winners[4]} click={handleWinner} id={66} />
					<Match direction="left" team1={winners[5]} team2={winners[6]} click={handleWinner} id={67} />
					<Match direction="left" team1={winners[7]} team2={winners[8]} click={handleWinner} id={68} />
					<Match direction="left" team1={winners[9]} team2={winners[10]} click={handleWinner} id={69} />
					<Match direction="left" team1={winners[11]} team2={winners[12]} click={handleWinner} id={70} />
					<Match direction="left" team1={winners[13]} team2={winners[14]} click={handleWinner} id={71} />
					<Match direction="left" team1={winners[15]} team2={winners[16]} click={handleWinner} id={72} />
					<Match direction="left" team1={winners[17]} team2={winners[18]} click={handleWinner} id={73} />
					<Match direction="left" team1={winners[19]} team2={winners[20]} click={handleWinner} id={74} />
					<Match direction="left" team1={winners[21]} team2={winners[22]} click={handleWinner} id={75} />
					<Match direction="left" team1={winners[23]} team2={winners[24]} click={handleWinner} id={76} />
					<Match direction="left" team1={winners[25]} team2={winners[26]} click={handleWinner} id={77} />
					<Match direction="left" team1={winners[27]} team2={winners[28]} click={handleWinner} id={78} />
					<Match direction="left" team1={winners[29]} team2={winners[30]} click={handleWinner} id={79} />
					<Match direction="left" team1={winners[31]} team2={winners[32]} click={handleWinner} id={80} />
				</div>

				<div className="round">
					<Match direction="left" team1={winners[65]} team2={winners[66]} click={handleWinner} id={97} />
					<Match direction="left" team1={winners[67]} team2={winners[68]} click={handleWinner} id={98} />
					<Match direction="left" team1={winners[69]} team2={winners[70]} click={handleWinner} id={99} />
					<Match direction="left" team1={winners[71]} team2={winners[72]} click={handleWinner} id={100} />
					<Match direction="left" team1={winners[73]} team2={winners[74]} click={handleWinner} id={101} />
					<Match direction="left" team1={winners[75]} team2={winners[76]} click={handleWinner} id={102} />
					<Match direction="left" team1={winners[77]} team2={winners[78]} click={handleWinner} id={103} />
					<Match direction="left" team1={winners[79]} team2={winners[80]} click={handleWinner} id={104} />
				</div>
				<div className="round">
					<Match direction="left" team1={winners[97]} team2={winners[98]} click={handleWinner} id={113} />
					<Match direction="left" team1={winners[99]} team2={winners[100]} click={handleWinner} id={114} />
					<Match direction="left" team1={winners[101]} team2={winners[102]} click={handleWinner} id={115} />
					<Match direction="left" team1={winners[103]} team2={winners[104]} click={handleWinner} id={116} />
				</div>

				<div className="round">
					<Match direction="left" team1={winners[113]} team2={winners[114]} click={handleWinner} id={121} />
					<Match direction="left" team1={winners[115]} team2={winners[116]} click={handleWinner} id={122} />
				</div>

				<SemiFinal direction="left" team1={winners[121]} team2={winners[122]} click={handleWinner} id={125}></SemiFinal>

				<Championship team1={winners[125]} click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1={winners[126]} click={handleChamp2} color={right}></Championship>

				<SemiFinal direction="right" team1={winners[123]} team2={winners[124]} click={handleWinner} id={126}></SemiFinal>

				<div className="round">
					<Match direction="right" team1={winners[117]} team2={winners[118]} click={handleWinner} id={123} />
					<Match direction="right" team1={winners[119]} team2={winners[120]} click={handleWinner} id={124} />
				</div>

				<div className="round">
					<Match direction="right" team1={winners[105]} team2={winners[106]} click={handleWinner} id={117} />
					<Match direction="right" team1={winners[107]} team2={winners[108]} click={handleWinner} id={118} />
					<Match direction="right" team1={winners[109]} team2={winners[110]} click={handleWinner} id={119} />
					<Match direction="right" team1={winners[111]} team2={winners[112]} click={handleWinner} id={120} />
				</div>

				<div className="round">
					<Match direction="right" team1={winners[81]} team2={winners[82]} click={handleWinner} id={105} />
					<Match direction="right" team1={winners[83]} team2={winners[84]} click={handleWinner} id={106} />
					<Match direction="right" team1={winners[85]} team2={winners[86]} click={handleWinner} id={107} />
					<Match direction="right" team1={winners[87]} team2={winners[88]} click={handleWinner} id={108} />
					<Match direction="right" team1={winners[89]} team2={winners[90]} click={handleWinner} id={109} />
					<Match direction="right" team1={winners[91]} team2={winners[92]} click={handleWinner} id={110} />
					<Match direction="right" team1={winners[93]} team2={winners[94]} click={handleWinner} id={111} />
					<Match direction="right" team1={winners[95]} team2={winners[96]} click={handleWinner} id={112} />
				</div>

				<div className="round">
					<Match direction="right" team1={winners[33]} team2={winners[34]} click={handleWinner} id={81} />
					<Match direction="right" team1={winners[35]} team2={winners[36]} click={handleWinner} id={82} />
					<Match direction="right" team1={winners[37]} team2={winners[38]} click={handleWinner} id={83} />
					<Match direction="right" team1={winners[39]} team2={winners[40]} click={handleWinner} id={84} />
					<Match direction="right" team1={winners[41]} team2={winners[42]} click={handleWinner} id={85} />
					<Match direction="right" team1={winners[43]} team2={winners[44]} click={handleWinner} id={86} />
					<Match direction="right" team1={winners[45]} team2={winners[46]} click={handleWinner} id={87} />
					<Match direction="right" team1={winners[47]} team2={winners[48]} click={handleWinner} id={88} />
					<Match direction="right" team1={winners[49]} team2={winners[50]} click={handleWinner} id={89} />
					<Match direction="right" team1={winners[51]} team2={winners[52]} click={handleWinner} id={90} />
					<Match direction="right" team1={winners[53]} team2={winners[54]} click={handleWinner} id={91} />
					<Match direction="right" team1={winners[55]} team2={winners[56]} click={handleWinner} id={92} />
					<Match direction="right" team1={winners[57]} team2={winners[58]} click={handleWinner} id={93} />
					<Match direction="right" team1={winners[59]} team2={winners[60]} click={handleWinner} id={94} />
					<Match direction="right" team1={winners[61]} team2={winners[62]} click={handleWinner} id={95} />
					<Match direction="right" team1={winners[63]} team2={winners[64]} click={handleWinner} id={96} />
				</div>

				<div className="round">
					<Match direction="right" team1={Bracket.ComingofAge[0].title} team2={Bracket.ComingofAge[15].title} click={handleWinner} id={33} />
					<Match direction="right" team1={Bracket.ComingofAge[1].title} team2={Bracket.ComingofAge[14].title} click={handleWinner} id={34} />
					<Match direction="right" team1={Bracket.ComingofAge[2].title} team2={Bracket.ComingofAge[13].title} click={handleWinner} id={35} />
					<Match direction="right" team1={Bracket.ComingofAge[3].title} team2={Bracket.ComingofAge[12].title} click={handleWinner} id={36} />
					<Match direction="right" team1={Bracket.ComingofAge[4].title} team2={Bracket.ComingofAge[11].title} click={handleWinner} id={37} />
					<Match direction="right" team1={Bracket.ComingofAge[5].title} team2={Bracket.ComingofAge[10].title} click={handleWinner} id={38} />
					<Match direction="right" team1={Bracket.ComingofAge[6].title} team2={Bracket.ComingofAge[9].title} click={handleWinner} id={39} />
					<Match direction="right" team1={Bracket.ComingofAge[7].title} team2={Bracket.ComingofAge[8].title} click={handleWinner} id={40} />
					<Match direction="right" team1={Bracket.Sequals1[0].title} team2={Bracket.Sequals1[15].title} click={handleWinner} id={41} />
					<Match direction="right" team1={Bracket.Sequals1[1].title} team2={Bracket.Sequals1[14].title} click={handleWinner} id={42} />
					<Match direction="right" team1={Bracket.Sequals1[2].title} team2={Bracket.Sequals1[13].title} click={handleWinner} id={43} />
					<Match direction="right" team1={Bracket.Sequals1[3].title} team2={Bracket.Sequals1[12].title} click={handleWinner} id={44} />
					<Match direction="right" team1={Bracket.Sequals1[4].title} team2={Bracket.Sequals1[11].title} click={handleWinner} id={45} />
					<Match direction="right" team1={Bracket.Sequals1[5].title} team2={Bracket.Sequals1[10].title} click={handleWinner} id={46} />
					<Match direction="right" team1={Bracket.Sequals1[6].title} team2={Bracket.Sequals1[9].title} click={handleWinner} id={47} />
					<Match direction="right" team1={Bracket.Sequals1[7].title} team2={Bracket.Sequals1[8].title} click={handleWinner} id={48} />
					<Match direction="right" team1={Bracket.Pixarish[0].title} team2={Bracket.Pixarish[15].title} click={handleWinner} id={49} />
					<Match direction="right" team1={Bracket.Pixarish[1].title} team2={Bracket.Pixarish[14].title} click={handleWinner} id={50} />
					<Match direction="right" team1={Bracket.Pixarish[2].title} team2={Bracket.Pixarish[13].title} click={handleWinner} id={51} />
					<Match direction="right" team1={Bracket.Pixarish[3].title} team2={Bracket.Pixarish[12].title} click={handleWinner} id={52} />
					<Match direction="right" team1={Bracket.Pixarish[4].title} team2={Bracket.Pixarish[11].title} click={handleWinner} id={53} />
					<Match direction="right" team1={Bracket.Pixarish[5].title} team2={Bracket.Pixarish[10].title} click={handleWinner} id={54} />
					<Match direction="right" team1={Bracket.Pixarish[6].title} team2={Bracket.Pixarish[9].title} click={handleWinner} id={55} />
					<Match direction="right" team1={Bracket.Pixarish[7].title} team2={Bracket.Pixarish[8].title} click={handleWinner} id={56} />
					<Match direction="right" team1={Bracket.TFCentury[0].title} team2={Bracket.TFCentury[15].title} click={handleWinner} id={57} />
					<Match direction="right" team1={Bracket.TFCentury[1].title} team2={Bracket.TFCentury[14].title} click={handleWinner} id={58} />
					<Match direction="right" team1={Bracket.TFCentury[2].title} team2={Bracket.TFCentury[13].title} click={handleWinner} id={59} />
					<Match direction="right" team1={Bracket.TFCentury[3].title} team2={Bracket.TFCentury[12].title} click={handleWinner} id={60} />
					<Match direction="right" team1={Bracket.TFCentury[4].title} team2={Bracket.TFCentury[11].title} click={handleWinner} id={61} />
					<Match direction="right" team1={Bracket.TFCentury[5].title} team2={Bracket.TFCentury[10].title} click={handleWinner} id={62} />
					<Match direction="right" team1={Bracket.TFCentury[6].title} team2={Bracket.TFCentury[9].title} click={handleWinner} id={63} />
					<Match direction="right" team1={Bracket.TFCentury[7].title} team2={Bracket.TFCentury[8].title} click={handleWinner} id={64} />
				</div>
			</div>
		</Grid>
	);
};

export default DisneyAnimatedMovies;
