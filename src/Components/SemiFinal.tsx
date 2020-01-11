import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';

const SemiFinal: React.FC<SemiFinalProps> = ({ direction, team1, team2 }) => {
	function clickTop() {
		setTop('green');
		setBottom('red');
		// winner = { team1 };
	}
	function clickBottom() {
		setTop('red');
		setBottom('green');
		// winner = { team2 };
	}
	const [top, setTop] = useState('default');
	const [bottom, setBottom] = useState('default');

	if (direction === 'left') {
		return (
			<div className="round">
				<div className="group">
					<button id="team1" onClick={clickTop} className={'group-team group-team-top team-button ' + top}>
						{team1}
					</button>
					<div className="group-team group-team-divider-semi-final"></div>
					<button id="team2" onClick={clickBottom} className={'group-team group-team-bottom team-button ' + bottom}>
						{team2}
					</button>
				</div>
			</div>
		);
	} else if (direction === 'right') {
		return (
			<div className="round">
				<div className="group">
					<button id="team1" onClick={clickTop} className={'group-team group-team-top team-button ' + top}>
						{team1}
					</button>
					<div className="group-team group-team-divider-semi-final-right"></div>
					<button id="team2" onClick={clickBottom} className={'group-team group-team-bottom team-button ' + bottom}>
						{team2}
					</button>
				</div>
			</div>
		);
	}
	return null;
};
interface SemiFinalProps {
	direction: string;
	team1: string;
	team2: string;
}
export default SemiFinal;
