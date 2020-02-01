import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import SemiFinal from 'Components/SemiFinal';
import Championship from 'Components/Championship';

const Select32: React.FC<Select32Props> = ({ seeds }) => {
	function handleChamp1() {
		setLeft('green');
		setRight('red');
	}

	function handleChamp2() {
		setLeft('red');
		setRight('green');
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
					<Match direction="left" team1={winners[0]} team2={winners[1]} click={handleWinner} id={16} />
					<Match direction="left" team1={winners[2]} team2={winners[3]} click={handleWinner} id={17} />
					<Match direction="left" team1={winners[4]} team2={winners[5]} click={handleWinner} id={18} />
					<Match direction="left" team1={winners[6]} team2={winners[7]} click={handleWinner} id={19} />
				</div>

				<div className="round">
					<Match direction="left" team1={winners[16]} team2={winners[17]} click={handleWinner} id={24} />
					<Match direction="left" team1={winners[18]} team2={winners[19]} click={handleWinner} id={25} />
				</div>

				<SemiFinal direction="left" team1={winners[24]} team2={winners[25]} click={handleWinner} id={28} />

				<Championship team1={winners[28]} click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1={winners[29]} click={handleChamp2} color={right}></Championship>

				<SemiFinal direction="right" team1={winners[26]} team2={winners[27]} click={handleWinner} id={29} />

				<div className="round">
					<Match direction="right" team1={winners[20]} team2={winners[21]} click={handleWinner} id={26} />
					<Match direction="right" team1={winners[22]} team2={winners[23]} click={handleWinner} id={27} />
				</div>
				<div className="round">
					<Match direction="right" team1={winners[8]} team2={winners[9]} click={handleWinner} id={20} />
					<Match direction="right" team1={winners[10]} team2={winners[11]} click={handleWinner} id={21} />
					<Match direction="right" team1={winners[12]} team2={winners[13]} click={handleWinner} id={22} />
					<Match direction="right" team1={winners[14]} team2={winners[15]} click={handleWinner} id={23} />
				</div>
				<div className="round">
					{seeds.filter((_, index) => index < seeds.length / 4).map((team: string, index: number) => (
						<>
							<Match direction="left" team1={seeds[(seeds.length / 4) + index]} team2={seeds[seeds.length - index - 9]} click={handleWinner} id={index + 8} />
						</>
					))
					}
				</div>
			</div>
		</>
	);
};

interface Select32Props {
	seeds: string[];
}

export default Select32;
