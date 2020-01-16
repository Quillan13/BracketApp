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
	const [seed1, setSeed1] = useState('Team 1');
	const [seed2, setSeed2] = useState('Team 2');
	const [seed3, setSeed3] = useState('Team 3');
	const [seed4, setSeed4] = useState('Team 4');

	return (
		<>
			<>
				<form>
					<label>Seed 1</label>
					<input name="Seed 1" onChange={(event) => setSeed1(event.target.value)} value={seed1} />
					<label>Seed 2</label>
					<input name="Seed 2" onChange={(event) => setSeed2(event.target.value)} value={seed2} />
					<label>Seed 3</label>
					<input name="Seed 3" onChange={(event) => setSeed3(event.target.value)} value={seed3} />
					<label>Seed 4</label>
					<input name="Seed 4" onChange={(event) => setSeed4(event.target.value)} value={seed4} />
				</form>
			</>
			<>
				<div className="bracket-left">
					<div className="round">
						<Match direction="left" team1={seed1} team2={seed4} click={() => { }} id={0} />
					</div>

					<Championship team1="Team 1" click={handleChamp1} color={left}></Championship>
				</div>

				<div className="bracket-center">Championship</div>

				<div className="bracket-right">
					<Championship team1="Team 4" click={handleChamp2} color={right}></Championship>

					<div className="round">
						<Match direction="right" team1={seed2} team2={seed3} click={() => { }} id={0} />
					</div>
				</div>
			</>
		</>
	);
};

export default Select4;
