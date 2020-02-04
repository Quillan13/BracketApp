import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';

const Match: React.FC<MatchProps> = ({ direction, team1, team2, click, id, view }) => {
	function clickTop() {
		if ((team1 ?? "") !== "" && (team2 ?? "") !== "") {
			setTop('green');
			setBottom('red');
		}
	}

	function clickBottom() {
		if ((team1 ?? "") !== "" && (team2 ?? "") !== "") {
			setTop('red');
			setBottom('green');
		}
	}

	const [top, setTop] = useState('default');
	const [bottom, setBottom] = useState('default');
	let hidden: string = "";

	if (view === "no") {
		hidden = "hidden";
	}

	if (direction === 'left') {
		return (
			<div className="group">
				<button
					onClick={() => {
						clickTop();
						click(team1, id, team2);
					}}
					className={'group-team group-team-top team-button ' + top}>
					{team1}
				</button>
				<div className="group-team group-team-divider"></div>
				<button
					onClick={() => {
						clickBottom();
						click(team2, id, team1);
					}}
					className={'group-team group-team-bottom team-button ' + bottom}>
					{team2}
				</button>
			</div>
		);
	} else if (direction === 'right') {
		return (
			<div className={"group " + hidden}>
				<button
					onClick={() => {
						clickTop();
						click(team1, id, team2);
					}}
					className={'button group-team group-team-top team-button ' + top}>
					{team1}
				</button>
				<div className="group-team group-team-divider-bracket-right"></div>
				<button
					onClick={() => {
						clickBottom();
						click(team2, id, team1);
					}}
					className={'group-team group-team-bottom team-button ' + bottom}>
					{team2}
				</button>
			</div >
		);
	}
	return null;
};
interface MatchProps {
	direction: string;
	team1: string;
	team2: string;
	click: (winner: string, id: number, loser: string) => void;
	id: number;
	view?: string;
}
export default Match;
