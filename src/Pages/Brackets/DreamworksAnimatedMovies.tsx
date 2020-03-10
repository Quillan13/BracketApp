import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import SemiFinal from 'Components/SemiFinal';
import Championship from 'Components/Championship';
import { makeStyles, Theme, createStyles, createMuiTheme, Grid } from '@material-ui/core';
import Bracket from 'Data/DreamworksAnimatedFilms';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		selectGrid: {
			height: '70px',
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

const DreamworksAnimatedFilms = () => {
	function handleChamp1() {
		if ((winners[125] ?? "") !== "" && (winners[126] ?? "") !== "") {
			setLeft('green');
			setRight('red');
		}
	}

	function handleChamp2() {
		if ((winners[125] ?? "") !== "" && (winners[126] ?? "") !== "") {
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
	const [left, setLeft] = useState('default');
	const [right, setRight] = useState('default');
	const [winners, setWinner] = useState([].map(() => ""));

	return (
		<Grid container wrap="nowrap" className={classes.bracket}>
			<div className="bracket-left">
				<div className="round">
					<Match direction="left" team1={Bracket.Movies1[0].title} team2={Bracket.Movies1[15].title} click={handleWinner} id={1} />
					<Match direction="left" team1={Bracket.Movies1[1].title} team2={Bracket.Movies1[14].title} click={handleWinner} id={2} />
					<Match direction="left" team1={Bracket.Movies1[2].title} team2={Bracket.Movies1[13].title} click={handleWinner} id={3} />
					<Match direction="left" team1={Bracket.Movies1[3].title} team2={Bracket.Movies1[12].title} click={handleWinner} id={4} />
					<Match direction="left" team1={Bracket.Movies1[4].title} team2={Bracket.Movies1[11].title} click={handleWinner} id={5} />
					<Match direction="left" team1={Bracket.Movies1[5].title} team2={Bracket.Movies1[10].title} click={handleWinner} id={6} />
					<Match direction="left" team1={Bracket.Movies1[6].title} team2={Bracket.Movies1[9].title} click={handleWinner} id={7} />
					<Match direction="left" team1={Bracket.Movies1[7].title} team2={Bracket.Movies1[8].title} click={handleWinner} id={8} />
					<Match direction="left" team1={Bracket.Movies2[0].title} team2={Bracket.Movies2[15].title} click={handleWinner} id={9} />
					<Match direction="left" team1={Bracket.Movies2[1].title} team2={Bracket.Movies2[14].title} click={handleWinner} id={10} />
					<Match direction="left" team1={Bracket.Movies2[2].title} team2={Bracket.Movies2[13].title} click={handleWinner} id={11} />
					<Match direction="left" team1={Bracket.Movies2[3].title} team2={Bracket.Movies2[12].title} click={handleWinner} id={12} />
					<Match direction="left" team1={Bracket.Movies2[4].title} team2={Bracket.Movies2[11].title} click={handleWinner} id={13} />
					<Match direction="left" team1={Bracket.Movies2[5].title} team2={Bracket.Movies2[10].title} click={handleWinner} id={14} />
					<Match direction="left" team1={Bracket.Movies2[6].title} team2={Bracket.Movies2[9].title} click={handleWinner} id={15} />
					<Match direction="left" team1={Bracket.Movies2[7].title} team2={Bracket.Movies2[8].title} click={handleWinner} id={16} />
					<Match direction="left" team1={Bracket.Specials[0].title} team2={Bracket.Specials[15].title} click={handleWinner} id={17} />
					<Match direction="left" team1={Bracket.Specials[1].title} team2={Bracket.Specials[14].title} click={handleWinner} id={18} />
					<Match direction="left" team1={Bracket.Specials[2].title} team2={Bracket.Specials[13].title} click={handleWinner} id={19} />
					<Match direction="left" team1={Bracket.Specials[3].title} team2={Bracket.Specials[12].title} click={handleWinner} id={20} />
					<Match direction="left" team1={Bracket.Specials[4].title} team2={Bracket.Specials[11].title} click={handleWinner} id={21} />
					<Match direction="left" team1={Bracket.Specials[5].title} team2={Bracket.Specials[10].title} click={handleWinner} id={22} />
					<Match direction="left" team1={Bracket.Specials[6].title} team2={Bracket.Specials[9].title} click={handleWinner} id={23} />
					<Match direction="left" team1={Bracket.Specials[7].title} team2={Bracket.Specials[8].title} click={handleWinner} id={24} />
					<Match direction="left" team1={Bracket.Sequals[0].title} team2={Bracket.Sequals[15].title} click={handleWinner} id={25} />
					<Match direction="left" team1={Bracket.Sequals[1].title} team2={Bracket.Sequals[14].title} click={handleWinner} id={26} />
					<Match direction="left" team1={Bracket.Sequals[2].title} team2={Bracket.Sequals[13].title} click={handleWinner} id={27} />
					<Match direction="left" team1={Bracket.Sequals[3].title} team2={Bracket.Sequals[12].title} click={handleWinner} id={28} />
					<Match direction="left" team1={Bracket.Sequals[4].title} team2={Bracket.Sequals[11].title} click={handleWinner} id={29} />
					<Match direction="left" team1={Bracket.Sequals[5].title} team2={Bracket.Sequals[10].title} click={handleWinner} id={30} />
					<Match direction="left" team1={Bracket.Sequals[6].title} team2={Bracket.Sequals[9].title} click={handleWinner} id={31} />
					<Match direction="left" team1={Bracket.Sequals[7].title} team2={Bracket.Sequals[8].title} click={handleWinner} id={32} />
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
					<Match direction="right" team1={Bracket.TVShows1[0].title} team2={Bracket.TVShows1[15].title} click={handleWinner} id={33} />
					<Match direction="right" team1={Bracket.TVShows1[1].title} team2={Bracket.TVShows1[14].title} click={handleWinner} id={34} />
					<Match direction="right" team1={Bracket.TVShows1[2].title} team2={Bracket.TVShows1[13].title} click={handleWinner} id={35} />
					<Match direction="right" team1={Bracket.TVShows1[3].title} team2={Bracket.TVShows1[12].title} click={handleWinner} id={36} />
					<Match direction="right" team1={Bracket.TVShows1[4].title} team2={Bracket.TVShows1[11].title} click={handleWinner} id={37} />
					<Match direction="right" team1={Bracket.TVShows1[5].title} team2={Bracket.TVShows1[10].title} click={handleWinner} id={38} />
					<Match direction="right" team1={Bracket.TVShows1[6].title} team2={Bracket.TVShows1[9].title} click={handleWinner} id={39} />
					<Match direction="right" team1={Bracket.TVShows1[7].title} team2={Bracket.TVShows1[8].title} click={handleWinner} id={40} />
					<Match direction="right" team1={Bracket.TVShows2[0].title} team2={Bracket.TVShows2[15].title} click={handleWinner} id={41} />
					<Match direction="right" team1={Bracket.TVShows2[1].title} team2={Bracket.TVShows2[14].title} click={handleWinner} id={42} />
					<Match direction="right" team1={Bracket.TVShows2[2].title} team2={Bracket.TVShows2[13].title} click={handleWinner} id={43} />
					<Match direction="right" team1={Bracket.TVShows2[3].title} team2={Bracket.TVShows2[12].title} click={handleWinner} id={44} />
					<Match direction="right" team1={Bracket.TVShows2[4].title} team2={Bracket.TVShows2[11].title} click={handleWinner} id={45} />
					<Match direction="right" team1={Bracket.TVShows2[5].title} team2={Bracket.TVShows2[10].title} click={handleWinner} id={46} />
					<Match direction="right" team1={Bracket.TVShows2[6].title} team2={Bracket.TVShows2[9].title} click={handleWinner} id={47} />
					<Match direction="right" team1={Bracket.TVShows2[7].title} team2={Bracket.TVShows2[8].title} click={handleWinner} id={48} />
					<Match direction="right" team1={Bracket.Shorts1[0].title} team2={Bracket.Shorts1[15].title} click={handleWinner} id={49} />
					<Match direction="right" team1={Bracket.Shorts1[1].title} team2={Bracket.Shorts1[14].title} click={handleWinner} id={50} />
					<Match direction="right" team1={Bracket.Shorts1[2].title} team2={Bracket.Shorts1[13].title} click={handleWinner} id={51} />
					<Match direction="right" team1={Bracket.Shorts1[3].title} team2={Bracket.Shorts1[12].title} click={handleWinner} id={52} />
					<Match direction="right" team1={Bracket.Shorts1[4].title} team2={Bracket.Shorts1[11].title} click={handleWinner} id={53} />
					<Match direction="right" team1={Bracket.Shorts1[5].title} team2={Bracket.Shorts1[10].title} click={handleWinner} id={54} />
					<Match direction="right" team1={Bracket.Shorts1[6].title} team2={Bracket.Shorts1[9].title} click={handleWinner} id={55} />
					<Match direction="right" team1={Bracket.Shorts1[7].title} team2={Bracket.Shorts1[8].title} click={handleWinner} id={56} />
					<Match direction="right" team1={Bracket.Shorts2[0].title} team2={Bracket.Shorts2[15].title} click={handleWinner} id={57} />
					<Match direction="right" team1={Bracket.Shorts2[1].title} team2={Bracket.Shorts2[14].title} click={handleWinner} id={58} />
					<Match direction="right" team1={Bracket.Shorts2[2].title} team2={Bracket.Shorts2[13].title} click={handleWinner} id={59} />
					<Match direction="right" team1={Bracket.Shorts2[3].title} team2={Bracket.Shorts2[12].title} click={handleWinner} id={60} />
					<Match direction="right" team1={Bracket.Shorts2[4].title} team2={Bracket.Shorts2[11].title} click={handleWinner} id={61} />
					<Match direction="right" team1={Bracket.Shorts2[5].title} team2={Bracket.Shorts2[10].title} click={handleWinner} id={62} />
					<Match direction="right" team1={Bracket.Shorts2[6].title} team2={Bracket.Shorts2[9].title} click={handleWinner} id={63} />
					<Match direction="right" team1={Bracket.Shorts2[7].title} team2={Bracket.Shorts2[8].title} click={handleWinner} id={64} />
				</div>
			</div>
		</Grid>
	);
};

export default DreamworksAnimatedFilms;
