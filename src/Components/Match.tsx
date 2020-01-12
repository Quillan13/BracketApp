import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';

const Match: React.FC<MatchProps> = ({ direction, team1, team2, click, id }) => {
	function clickTop() {
		setTop('green');
		setBottom('red');
	}
	function clickBottom() {
		setTop('red');
		setBottom('green');
	}
	const [top, setTop] = useState('default');
	const [bottom, setBottom] = useState('default');
	if (direction === 'left') {
		return (
			<div className="group">
				<button
					onClick={() => {
						clickTop();
						click(team1, id);
					}}
					className={'group-team group-team-top team-button ' + top}>
					{team1}
				</button>
				<div className="group-team group-team-divider"></div>
				<button
					onClick={() => {
						clickBottom();
						click(team2, id);
					}}
					className={'group-team group-team-bottom team-button ' + bottom}>
					{team2}
				</button>
			</div>
		);
	} else if (direction === 'right') {
		return (
			<div className="group">
				<button
					onClick={() => {
						clickTop();
						click(team1, id);
					}}
					className={'button group-team group-team-top team-button ' + top}>
					{team1}
				</button>
				<div className="group-team group-team-divider-bracket-right"></div>
				<button
					onClick={() => {
						clickBottom();
						click(team2, id);
					}}
					className={'group-team group-team-bottom team-button ' + bottom}>
					{team2}
				</button>
			</div>
		);
	}
	return null;
};
interface MatchProps {
	direction: string;
	team1: string;
	team2: string;
	click: (winner: string, id: number) => void;
	id: number;
}
export default Match;
