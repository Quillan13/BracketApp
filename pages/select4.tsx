import "../styles/bracketDisplay.css";
import React from "react";
import Round1 from "../utilities/Round";
import Championship from "../utilities/Championship";

const Select4 = () => {
    return (
        <>
            <div className="bracket-left">
                <div className="round">
                    <Round1 direction="left" team1="Team 1" team2="Team 2"></Round1>
                </div>

                <Championship team1="Team 1"></Championship>
            </div>

            <div className="bracket-center">Championship</div>

            <div className="bracket-right">
                <Championship team1="Team 4"></Championship>

                <div className="round">
                    <Round1 direction="right" team1="Team 3" team2="Team 4"></Round1>
                </div>
            </div>
        </>
    );
};

export default Select4;
