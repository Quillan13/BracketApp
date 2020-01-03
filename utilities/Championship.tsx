import "../styles/bracketDisplay.css";
import React from "react";

const Championship: React.FC<ChamProps> = ({ team1, click, color }) => {
    return (
        <div className="round">
            <div className="group">
                <button onClick={click} className={"group-team group-team-top team-button team-button " + color}>
                    {team1}
                </button>
            </div>
        </div>
    );
};
interface ChamProps {
    team1: string;
    click: () => void;
    color: string;
}
export default Championship;
