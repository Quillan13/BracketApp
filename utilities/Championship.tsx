import "../styles/bracketDisplay.css";
import React from "react";

const Championship: React.FC<ChamProps> = ({ team1 }) => {
    return (
        <div className="round">
            <div className="group">
                <button className="group-team group-team-top team-button">{team1}</button>
            </div>
        </div>
    );
};
interface ChamProps {
    team1: string;
}
export default Championship;
