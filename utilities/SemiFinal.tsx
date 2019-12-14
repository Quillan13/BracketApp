import "../styles/bracketDisplay.css";
import React from "react";

const SemiFinal: React.FC<SemiFinalProps> = ({ direction, team1, team2 }) => {
    if (direction === "left") {
        return (
            <div className="round">
                <div className="group">
                    <button className="group-team group-team-top team-button">{team1}</button>
                    <div className="group-team group-team-divider-semi-final"></div>
                    <button className="group-team group-team-bottom team-button">{team2}</button>
                </div>
            </div>
        );
    } else if (direction === "right") {
        return (
            <div className="round">
                <div className="group">
                    <button className="group-team group-team-top team-button">{team1}</button>
                    <div className="group-team group-team-divider-semi-final-right"></div>
                    <button className="group-team group-team-bottom team-button">{team2}</button>
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
