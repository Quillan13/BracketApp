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

	const handleWinner = (winner: string, index: number, loser: string) => (event: any) => {
		if (winner != null && loser != null) {
			const newWinners = [...winners];
			newWinners[index] = event.target.value;
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
					{/* {seeds.filter((_, index) => index < seeds.length / 4).map((team: string, index: number) => (
						<>
							<Match direction="left" team1={seeds[index]} team2={seeds[seeds.length - index - 1]} click={handleWinner} id={index} />
						</>
					))
					} */}
					<Match direction="left" team1={seeds[0]} team2={seeds[15]} click={handleWinner} id={1} />
					<Match direction="left" team1={seeds[1]} team2={seeds[14]} click={handleWinner} id={2} />
					<Match direction="left" team1={seeds[2]} team2={seeds[13]} click={handleWinner} id={3} />
					<Match direction="left" team1={seeds[3]} team2={seeds[12]} click={handleWinner} id={4} />
				</div>

				<div className="round">
					<Match direction="left" team1={winners[1]} team2={winners[2]} click={handleWinner} id={9} />
					<Match direction="left" team1={winners[3]} team2={winners[4]} click={handleWinner} id={10} />
				</div>

				<SemiFinal direction="left" team1={winners[9]} team2={winners[10]} click={handleWinner} id={13} />

				<Championship team1={winners[13]} click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1={winners[14]} click={handleChamp2} color={right}></Championship>

				<SemiFinal direction="right" team1={winners[11]} team2={winners[12]} click={handleWinner} id={14} />

				<div className="round">
					<Match direction="right" team1={winners[5]} team2={winners[6]} click={handleWinner} id={11} />
					<Match direction="right" team1={winners[7]} team2={winners[8]} click={handleWinner} id={12} />
				</div>

				<div className="round">
					{/* {seeds.filter((_, index) => index < seeds.length / 4).map((team: string, index: number) => (
						<>
							<Match direction="left" team1={seeds[(seeds.length / 4) + index]} team2={seeds[seeds.length - index - 5]} click={handleWinner} id={index + 4} />
						</>
					))
					} */}
					<Match direction="right" team1={seeds[4]} team2={seeds[11]} click={handleWinner} id={5} />
					<Match direction="right" team1={seeds[5]} team2={seeds[10]} click={handleWinner} id={6} />
					<Match direction="right" team1={seeds[6]} team2={seeds[9]} click={handleWinner} id={7} />
					<Match direction="right" team1={seeds[7]} team2={seeds[8]} click={handleWinner} id={8} />
				</div>
			</div>
		</>
	);
};

interface Select16Props {
	seeds: string[];
}

export default Select16;
