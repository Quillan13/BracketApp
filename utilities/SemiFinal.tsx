import "../styles/bracketDisplay.css";
import React from "react";

const SemiFinal: React.FC<SemiFinalProps> = ({ direction, team1, team2 }) => {
    if (direction === "left") {
        return (
            <div className="round">
                <div className="group">
                    <div className="group-team group-team-top">{team1}</div>
                    <div className="group-team group-team-divider-semi-final"></div>
                    <div className="group-team group-team-bottom">{team2}</div>
                </div>
            </div>
        );
    } else if (direction === "right") {
        return (
            <div className="round">
                <div className="group">
                    <div className="group-team group-team-top">{team1}</div>
                    <div className="group-team group-team-divider-semi-final-right"></div>
                    <div className="group-team group-team-bottom">{team2}</div>
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
