import "../styles/bracketDisplay.css";
import React from "react";

const Championship: React.FC<ChamProps> = ({ team1 }) => {
    return (
        <div className="round">
            <div className="group">
                <div className="group-team group-team-top">{team1}</div>
            </div>
        </div>
    );
};
interface ChamProps {
    team1: string;
}
export default Championship;
