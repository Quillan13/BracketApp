import "../styles/bracketDisplay.css";
import React, { useState } from "react";

const Match: React.FC<MatchProps> = ({ direction, team1, team2 }) => {
    function clickTop() {
        setTop("green");
        setBottom("red");
        // winner = { team1 };
    }
    function clickBottom() {
        setTop("red");
        setBottom("green");
        // winner = { team2 };
    }
    const [top, setTop] = useState("default");
    const [bottom, setBottom] = useState("default");

    if (direction === "left") {
        return (
            <div className="group">
                <button id="team1" onClick={clickTop} className={"group-team group-team-top team-button " + top}>
                    {team1}
                </button>
                <div className="group-team group-team-divider"></div>
                <button id="team2" onClick={clickBottom} className={"group-team group-team-bottom team-button " + bottom}>
                    {team2}
                </button>
            </div>
        );
    } else if (direction === "right") {
        return (
            <div className="group">
                <button id="team1" onClick={clickTop} className={"group-team group-team-top team-button " + top}>
                    {team1}
                </button>
                <div className="group-team group-team-divider-bracket-right"></div>
                <button id="team2" onClick={clickBottom} className={"group-team group-team-bottom team-button " + bottom}>
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
    // winner: string;
}
export default Match;
