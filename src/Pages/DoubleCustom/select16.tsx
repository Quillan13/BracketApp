import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import SemiFinal from 'Components/SemiFinal';
import Championship from 'Components/Championship';

const Select16: React.FC<Select16Props> = ({ seeds }) => {
	function handleChamp1() {
		if ((winners[14] ?? "") !== "" && (winners[13] ?? "") !== "") {
			setLeft('green');
			setRight('red');
		}
	}

	function handleChamp2() {
		if ((winners[14] ?? "") !== "" && (winners[13] ?? "") !== "") {
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
					{seeds.filter((_, index) => index < seeds.length / 2).map((team: string, index: number) => (
						<>
							<Match direction="left" team1={seeds[index]} team2={seeds[seeds.length - index - 1]} click={handleWinner} id={index} />
						</>
					))
					}
				</div>

				<div className="round">
					<Match direction="left" team1={winners[0]} team2={winners[1]} click={handleWinner} id={8} />
					<Match direction="left" team1={winners[2]} team2={winners[3]} click={handleWinner} id={9} />
					<Match direction="left" team1={winners[4]} team2={winners[5]} click={handleWinner} id={10} />
					<Match direction="left" team1={winners[6]} team2={winners[7]} click={handleWinner} id={11} />
				</div>

				<div className="round">
					<Match direction="left" team1={winners[8]} team2={winners[9]} click={handleWinner} id={12} />
					<Match direction="left" team1={winners[10]} team2={winners[11]} click={handleWinner} id={13} />

				</div>

				<SemiFinal direction="left" team1={winners[12]} team2={winners[13]} click={handleWinner} id={14} />

				<Championship team1={winners[14]} click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1={winners[28]} click={handleChamp2} color={right}></Championship>

				<SemiFinal direction="right" team1={winners[26]} team2={winners[27]} click={handleWinner} id={28} />

				<div className="round">
					<Match direction="right" team1={winners[23]} team2={winners[24]} click={handleWinner} id={26} />
					<Match direction="right" team1={winners[25]} team2={losers[14]} click={handleWinner} id={27} />
				</div>

				<div className="round">
					<Match direction="right" team1={winners[19]} team2={losers[12]} click={handleWinner} id={23} />
					<Match direction="right" team1={winners[20]} team2={losers[13]} click={handleWinner} id={24} />
					<Match direction="right" team1={winners[21]} team2={winners[22]} click={handleWinner} id={25} />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
				</div>

				<div className="round">
					<Match direction="right" team1={winners[15]} team2={losers[8]} click={handleWinner} id={19} />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1={winners[16]} team2={losers[9]} click={handleWinner} id={20} />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1={winners[17]} team2={losers[10]} click={handleWinner} id={21} />
					<Match direction="right" team1={winners[18]} team2={losers[11]} click={handleWinner} id={22} />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
				</div>

				<div className="round">
					<Match direction="right" team1={losers[0]} team2={losers[1]} click={handleWinner} id={15} />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1={losers[2]} team2={losers[3]} click={handleWinner} id={16} />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1={losers[4]} team2={losers[5]} click={handleWinner} id={17} />
					<Match direction="right" team1="-------" team2="-------" click={handleWinner} id={99} view="no" />
					<Match direction="right" team1={losers[6]} team2={losers[7]} click={handleWinner} id={18} />
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

interface Select16Props {
	seeds: string[];
}

export default Select16;
