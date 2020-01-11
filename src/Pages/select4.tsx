import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import Championship from 'Components/Championship';

const Select4 = () => {
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
				</div>

				<Championship team1="Team 1" click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1="Team 4" click={handleChamp2} color={right}></Championship>

				<div className="round">
					<Match direction="right" team1="Team 3" team2="Team 4" click={() => {}} id={0} />
				</div>
			</div>
		</>
	);
};

export default Select4;
