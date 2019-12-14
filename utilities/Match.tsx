import "../styles/bracketDisplay.css";
import React from "react";
import { Button } from "@material-ui/core";

const Match: React.FC<MatchProps> = ({ direction, team1, team2 }) => {
    if (direction === "left") {
        return (
            <div className="group">
                <p className="group-team group-team-top">
                    <Button>{team1}</Button>
                </p>
                <div className="group-team group-team-divider"></div>
                <div className="group-team group-team-bottom">{team2}</div>
            </div>
        );
    } else if (direction === "right") {
        return (
            <div className="group">
                <div className="group-team group-team-top">{team1}</div>
                <div className="group-team group-team-divider-bracket-right"></div>
                <div className="group-team group-team-bottom">{team2}</div>
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
