import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import SemiFinal from 'Components/SemiFinal';
import Championship from 'Components/Championship';

const Select16 = () => {
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
				</div>

				<div className="round">
					<Match direction="left" team1="Team 1" team2="Team 4" click={() => {}} id={0} />
					<Match direction="left" team1="Team 6" team2="Team 7" click={() => {}} id={0} />
				</div>

				<SemiFinal direction="left" team1="Team 1" team2="Team 6"></SemiFinal>

				<Championship team1="Team 1" click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1="Team 2" click={handleChamp2} color={right}></Championship>

				<SemiFinal direction="right" team1="Team 11" team2="Team 15"></SemiFinal>

				<div className="round">
					<Match direction="right" team1="Team 9" team2="Team 11" click={() => {}} id={0} />
					<Match direction="right" team1="Team 14" team2="Team 15" click={() => {}} id={0} />
				</div>

				<div className="round">
					<Match direction="right" team1="Team 9" team2="Team 10" click={() => {}} id={0} />
					<Match direction="right" team1="Team 11" team2="Team 12" click={() => {}} id={0} />
					<Match direction="right" team1="Team 13" team2="Team 14" click={() => {}} id={0} />
					<Match direction="right" team1="Team 15" team2="Team 16" click={() => {}} id={0} />
				</div>
			</div>
		</>
	);
};

export default Select16;
