import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import Championship from 'Components/Championship';

const Select4: React.FC<Select4Props> = ({ seeds }) => {
	function handleChamp1() {
		if (winner1 != null && winner2 != null) {
			if (winner1 !== "" && winner2 !== "") {
				setLeft('green');
				setRight('red');
			}
		}
	}

	function handleChamp2() {
		if (winner1 != null && winner2 != null) {
			if (winner1 !== "" && winner2 !== "") {
				setLeft('red');
				setRight('green');
			}
		}
	}

	function handleWinner(winner: string, id: number, loser: string) {
		// winners[id] = winner;
		if (winner != null && loser != null) {
			if (id === 1) setWinner1(winner);
			else if (id === 2) setWinner2(winner);
		}
	}

	const [left, setLeft] = useState('default');
	const [right, setRight] = useState('default');

	const [winner1, setWinner1] = useState();
	const [winner2, setWinner2] = useState();

	return (
		<>
			<div className="bracket-left">
				<div className="round">
					<Match direction="left" team1={seeds[0]} team2={seeds[3]} click={handleWinner} id={1} />
				</div>

				<Championship team1={winner1} click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1={winner2} click={handleChamp2} color={right}></Championship>

				<div className="round">
					<Match direction="right" team1={seeds[1]} team2={seeds[2]} click={handleWinner} id={2} />
				</div>
			</div>
		</>
	);
};

interface Select4Props {
	seeds: string[];
}

export default Select4;
