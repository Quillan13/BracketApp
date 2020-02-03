import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import Championship from 'Components/Championship';
import SemiFinal from 'Components/SemiFinal';

const Select4: React.FC<Select4Props> = ({ seeds }) => {
	function handleChamp1() {
		if ((winners[3] ?? "") !== "" && (winners[6] ?? "") !== "") {
			setLeft('green');
			setRight('red');
		}
	}

	function handleChamp2() {
		if ((winners[3] ?? "") !== "" && (winners[6] ?? "") !== "") {
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
					<Match direction="left" team1={seeds[0]} team2={seeds[3]} click={handleWinner} id={1} />
					<Match direction="left" team1={seeds[1]} team2={seeds[2]} click={handleWinner} id={2} />
				</div>

				<SemiFinal direction="left" team1={winners[1]} team2={winners[2]} click={handleWinner} id={3} />

				<Championship team1={winners[3]} click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1={winners[6]} click={handleChamp2} color={right}></Championship>

				<SemiFinal direction="right" team1={winners[4]} team2={winners[5]} click={handleWinner} id={6} />


				<div className="round">
					<Match direction="right" team1={losers[1]} team2={losers[2]} click={handleWinner} id={4} />
					<Match direction="right" team1={losers[3]} team2={"BYE"} click={handleWinner} id={5} />
				</div>
				<div className="bracket-center">Losers</div>
			</div>
		</>
	);
};

interface Select4Props {
	seeds: string[];
}

export default Select4;
