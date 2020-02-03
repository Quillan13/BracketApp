import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import SemiFinal from 'Components/SemiFinal';
import Championship from 'Components/Championship';

const Select16: React.FC<Select16Props> = ({ seeds }) => {
	function handleChamp1() {
		if ((winners[12] ?? "") !== "" && (winners[13] ?? "") !== "") {
			setLeft('green');
			setRight('red');
		}
	}

	function handleChamp2() {
		if ((winners[12] ?? "") !== "" && (winners[13] ?? "") !== "") {
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
					{seeds.filter((_, index) => index < seeds.length / 4).map((team: string, index: number) => (
						<>
							<Match direction="left" team1={seeds[index]} team2={seeds[seeds.length - index - 1]} click={handleWinner} id={index} />
						</>
					))
					}
				</div>

				<div className="round">
					<Match direction="left" team1={winners[0]} team2={winners[1]} click={handleWinner} id={8} />
					<Match direction="left" team1={winners[2]} team2={winners[3]} click={handleWinner} id={9} />
				</div>

				<SemiFinal direction="left" team1={winners[8]} team2={winners[9]} click={handleWinner} id={12} />

				<Championship team1={winners[12]} click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1={winners[13]} click={handleChamp2} color={right}></Championship>

				<SemiFinal direction="right" team1={winners[10]} team2={winners[11]} click={handleWinner} id={13} />

				<div className="round">
					<Match direction="right" team1={winners[4]} team2={winners[5]} click={handleWinner} id={10} />
					<Match direction="right" team1={winners[6]} team2={winners[7]} click={handleWinner} id={11} />
				</div>

				<div className="round">
					{seeds.filter((_, index) => index < seeds.length / 4).map((team: string, index: number) => (
						<>
							<Match direction="left" team1={seeds[(seeds.length / 4) + index]} team2={seeds[seeds.length - index - 5]} click={handleWinner} id={index + 4} />
						</>
					))
					}
				</div>
			</div>
		</>
	);
};

interface Select16Props {
	seeds: string[];
}

export default Select16;
