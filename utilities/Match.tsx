import "../styles/bracketDisplay.css";
import React from "react";

const Match: React.FC<MatchProps> = ({ direction, team1, team2 }) => {
    if (direction === "left") {
        return (
            <div className="group">
                <button className="group-team group-team-top team-button">{team1}</button>
                <div className="group-team group-team-divider"></div>
                <button className="group-team group-team-bottom team-button">{team2}</button>
            </div>
        );
    } else if (direction === "right") {
        return (
            <div className="group">
                <button className="group-team group-team-top team-button">{team1}</button>
                <div className="group-team group-team-divider-bracket-right"></div>
                <button className="group-team group-team-bottom team-button">{team2}</button>
            </div>
        );
    }
    return null;
};
interface MatchProps {
    direction: string;
    team1: string;
    team2: string;
}
export default Match;
