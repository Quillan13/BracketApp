import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import SemiFinal from 'Components/SemiFinal';
import Championship from 'Components/Championship';

const Select8: React.FC<Select8Props> = ({ seeds }) => {
	function handleChamp1() {
		if ((winners[4] ?? "") !== "" && (winners[5] ?? "") !== "") {
			setLeft('green');
			setRight('red');
		}
	}

	function handleChamp2() {
		if ((winners[4] ?? "") !== "" && (winners[5] ?? "") !== "") {
			setLeft('red');
			setRight('green');
		}
	}

	const handleWinner = (winner: string, index: number, loser: string) => {
		if (winner != null && loser != null) {
			const newWinners = [...winners];
			newWinners[index] = winner;
			setWinner(newWinners);
		}
	};

	const [left, setLeft] = useState('default');
	const [right, setRight] = useState('default');
	const [winners, setWinner] = useState([].map(() => ""));



	return (
		<>
			<div className="bracket-left">
				<div className="round">
					<Match direction="left" team1={seeds[0]} team2={seeds[7]} click={handleWinner} id={0} />
					<Match direction="left" team1={seeds[1]} team2={seeds[6]} click={handleWinner} id={1} />
				</div>

				<SemiFinal direction="left" team1={winners[0]} team2={winners[1]} click={handleWinner} id={4} />

				<Championship team1={winners[4]} click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1={winners[5]} click={handleChamp2} color={right}></Championship>

				<SemiFinal direction="right" team1={winners[2]} team2={winners[3]} click={handleWinner} id={5} />

				<div className="round">
					<Match direction="right" team1={seeds[2]} team2={seeds[5]} click={handleWinner} id={2} />
					<Match direction="right" team1={seeds[3]} team2={seeds[4]} click={handleWinner} id={3} />
				</div>
			</div>
		</>
	);
};

interface Select8Props {
	seeds: string[];
}

export default Select8;
