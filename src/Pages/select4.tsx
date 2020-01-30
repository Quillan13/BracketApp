import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import Championship from 'Components/Championship';

const Select4: React.FC<Select4Props> = ({ seeds }) => {
	function handleChamp1() {
		if ((winners[1] ?? "") !== "" && (winners[2] ?? "") !== "") {
			setLeft('green');
			setRight('red');
		}
	}

	function handleChamp2() {
		if ((winners[1] ?? "") !== "" && (winners[2] ?? "") !== "") {
			setLeft('red');
			setRight('green');
		}
	}

	const handleWinner = (winner: string, index: number, loser: string) => (event: any) => {
		if (winner != null && loser != null) {
			const newWinners = [...winners];
			newWinners[index] = event.target.value;
			setWinners(newWinners);
		}
	};

	const [left, setLeft] = useState('default');
	const [right, setRight] = useState('default');
	const [winners, setWinners] = useState([...new Array(4)].map(() => ""));

	return (
		<>
			<div className="bracket-left">
				<div className="round">
					<Match direction="left" team1={seeds[0]} team2={seeds[3]} click={handleWinner} id={1} />
				</div>

				<Championship team1={winners[1]} click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1={winners[2]} click={handleChamp2} color={right}></Championship>

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
