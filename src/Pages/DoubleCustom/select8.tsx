import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import SemiFinal from 'Components/SemiFinal';
import Championship from 'Components/Championship';

const Select8: React.FC<Select8Props> = ({ seeds }) => {
	function handleChamp1() {
		if ((winners[11] ?? "") !== "" && (winners[13] ?? "") !== "") {
			setLeft('green');
			setRight('red');
		}
	}

	function handleChamp2() {
		if ((winners[11] ?? "") !== "" && (winners[13] ?? "") !== "") {
			setLeft('red');
			setRight('green');
		}
	}

	const handleWinner = (winner: string, index: number, loser: string) => {
		if (winner != null && loser != null) {
			const newWinners = [...winners];
			newWinners[index] = winner;
			setWinner(newWinners);

			const newLosers = [...losers];
			newLosers[index] = loser;
			setLosers(newLosers);
		}
	};

	const [left, setLeft] = useState('default');
	const [right, setRight] = useState('default');
	const [winners, setWinner] = useState([].map(() => ""));
	const [losers, setLosers] = useState([].map(() => ""));

	return (
		<>
			<div className="bracket-left">

				<div className="bracket-center">Winners</div>

				<div className="round">
					<Match direction="left" team1={seeds[0]} team2={seeds[7]} click={handleWinner} id={0} />
					<Match direction="left" team1={seeds[1]} team2={seeds[6]} click={handleWinner} id={1} />
					<Match direction="left" team1={seeds[2]} team2={seeds[5]} click={handleWinner} id={2} />
					<Match direction="left" team1={seeds[3]} team2={seeds[4]} click={handleWinner} id={3} />
				</div>
				<div className="round">
					<Match direction="left" team1={winners[0]} team2={winners[1]} click={handleWinner} id={7} />
					<Match direction="left" team1={winners[2]} team2={winners[3]} click={handleWinner} id={8} />
				</div>

				<SemiFinal direction="left" team1={winners[7]} team2={winners[8]} click={handleWinner} id={11} />

				<Championship team1={winners[11]} click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">

				<Championship team1={winners[13]} click={handleChamp2} color={right}></Championship>

				<SemiFinal direction="right" team1={winners[12]} team2={losers[11]} click={handleWinner} id={13} />

				<div className="round">
					<Match direction="right" team1={winners[9]} team2={winners[10]} click={handleWinner} id={12} />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
				</div>

				<div className="round">
					<Match direction="right" team1={winners[4]} team2={losers[7]} click={handleWinner} id={9} />
					<Match direction="right" team1={winners[5]} team2={losers[8]} click={handleWinner} id={10} />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
				</div>

				<div className="round">
					<Match direction="right" team1={losers[0]} team2={losers[1]} click={handleWinner} id={4} />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1={losers[2]} team2={losers[3]} click={handleWinner} id={5} />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
				</div>

				<div className="bracket-center">Losers</div>

			</div>
		</>
	);
};

interface Select8Props {
	seeds: string[];
}

export default Select8;
