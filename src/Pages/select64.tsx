import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import SemiFinal from 'Components/SemiFinal';
import Championship from 'Components/Championship';

const Select64 = () => {
	function handleChamp1() {
		setLeft('green');
		setRight('red');
	}

	function handleChamp2() {
		setLeft('red');
		setRight('green');
	}
	const [left, setLeft] = useState('default');
	const [right, setRight] = useState('default');

	return (
		<>
			<div className="bracket-left">
				<div className="round">
					<Match direction="left" team1="Team 1" team2="Team 2" click={() => {}} id={0} />
					<Match direction="left" team1="Team 3" team2="Team 4" click={() => {}} id={0} />
					<Match direction="left" team1="Team 5" team2="Team 6" click={() => {}} id={0} />
					<Match direction="left" team1="Team 7" team2="Team 8" click={() => {}} id={0} />
					<Match direction="left" team1="Team 9" team2="Team 10" click={() => {}} id={0} />
					<Match direction="left" team1="Team 11" team2="Team 12" click={() => {}} id={0} />
					<Match direction="left" team1="Team 13" team2="Team 14" click={() => {}} id={0} />
					<Match direction="left" team1="Team 15" team2="Team 16" click={() => {}} id={0} />
					<Match direction="left" team1="Team 17" team2="Team 18" click={() => {}} id={0} />
					<Match direction="left" team1="Team 19" team2="Team 20" click={() => {}} id={0} />
					<Match direction="left" team1="Team 21" team2="Team 22" click={() => {}} id={0} />
					<Match direction="left" team1="Team 23" team2="Team 24" click={() => {}} id={0} />
					<Match direction="left" team1="Team 25" team2="Team 26" click={() => {}} id={0} />
					<Match direction="left" team1="Team 27" team2="Team 28" click={() => {}} id={0} />
					<Match direction="left" team1="Team 29" team2="Team 30" click={() => {}} id={0} />
					<Match direction="left" team1="Team 31" team2="Team 32" click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="left" team1="Team 1" team2="Team 3" click={() => {}} id={0} />
					<Match direction="left" team1="Team 5" team2="Team 8" click={() => {}} id={0} />
					<Match direction="left" team1="Team 10" team2="Team 11" click={() => {}} id={0} />
					<Match direction="left" team1="Team 14" team2="Team 16" click={() => {}} id={0} />
					<Match direction="left" team1="Team 18" team2="Team 20" click={() => {}} id={0} />
					<Match direction="left" team1="Team 22" team2="Team 24" click={() => {}} id={0} />
					<Match direction="left" team1="Team 26" team2="Team 28" click={() => {}} id={0} />
					<Match direction="left" team1="Team 30" team2="Team 32" click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="left" team1="Team 1" team2="Team 8" click={() => {}} id={0} />
					<Match direction="left" team1="Team 11" team2="Team 14" click={() => {}} id={0} />
					<Match direction="left" team1="Team 20" team2="Team 24" click={() => {}} id={0} />
					<Match direction="left" team1="Team 28" team2="Team 32" click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="left" team1="Team 1" team2="Team 11" click={() => {}} id={0} />
					<Match direction="left" team1="Team 24" team2="Team 32" click={() => {}} id={0} />
				</div>

				<SemiFinal direction="left" team1="Team 1" team2="Team 24" click={() => {}} id={0} />

				<Championship team1="Team 1" click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1="Team 64" click={handleChamp2} color={right}></Championship>

				<SemiFinal direction="right" team1="Team 33" team2="Team 64" click={() => {}} id={0} />

				<div className="round">
					<Match direction="right" team1="Team 33" team2="Team 47" click={() => {}} id={0} />
					<Match direction="right" team1="Team 56" team2="Team 64" click={() => {}} id={0} />
				</div>
				<div className="round">
					<Match direction="right" team1="Team 33" team2="Team 40" click={() => {}} id={0} />
					<Match direction="right" team1="Team 41" team2="Team 47" click={() => {}} id={0} />
					<Match direction="right" team1="Team 51" team2="Team 56" click={() => {}} id={0} />
					<Match direction="right" team1="Team 60" team2="Team 64" click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="right" team1="Team 33" team2="Team 36" click={() => {}} id={0} />
					<Match direction="right" team1="Team 38" team2="Team 40" click={() => {}} id={0} />
					<Match direction="right" team1="Team 41" team2="Team 43" click={() => {}} id={0} />
					<Match direction="right" team1="Team 45" team2="Team 47" click={() => {}} id={0} />
					<Match direction="right" team1="Team 49" team2="Team 51" click={() => {}} id={0} />
					<Match direction="right" team1="Team 54" team2="Team 56" click={() => {}} id={0} />
					<Match direction="right" team1="Team 58" team2="Team 60" click={() => {}} id={0} />
					<Match direction="right" team1="Team 62" team2="Team 64" click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="right" team1="Team 33" team2="Team 34" click={() => {}} id={0} />
					<Match direction="right" team1="Team 35" team2="Team 36" click={() => {}} id={0} />
					<Match direction="right" team1="Team 37" team2="Team 38" click={() => {}} id={0} />
					<Match direction="right" team1="Team 39" team2="Team 40" click={() => {}} id={0} />
					<Match direction="right" team1="Team 41" team2="Team 42" click={() => {}} id={0} />
					<Match direction="right" team1="Team 43" team2="Team 44" click={() => {}} id={0} />
					<Match direction="right" team1="Team 45" team2="Team 46" click={() => {}} id={0} />
					<Match direction="right" team1="Team 47" team2="Team 48" click={() => {}} id={0} />
					<Match direction="right" team1="Team 49" team2="Team 50" click={() => {}} id={0} />
					<Match direction="right" team1="Team 51" team2="Team 52" click={() => {}} id={0} />
					<Match direction="right" team1="Team 53" team2="Team 54" click={() => {}} id={0} />
					<Match direction="right" team1="Team 55" team2="Team 56" click={() => {}} id={0} />
					<Match direction="right" team1="Team 57" team2="Team 58" click={() => {}} id={0} />
					<Match direction="right" team1="Team 59" team2="Team 60" click={() => {}} id={0} />
					<Match direction="right" team1="Team 61" team2="Team 62" click={() => {}} id={0} />
					<Match direction="right" team1="Team 63" team2="Team 64" click={() => {}} id={0} />
				</div>
			</div>
		</>
	);
};

export default Select64;
