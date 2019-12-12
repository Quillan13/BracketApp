import "../styles/bracketDisplay.css";
import React from "react";
import Round from "../utilities/Round";
import Championship from "../utilities/Championship";

const Select4 = () => {
    return (
        <>
            <div className="bracket-left">
                <div className="round">
                    <Round direction="left" team1="Team 1" team2="Team 2"></Round>
                </div>

                <Championship team1="Team 1"></Championship>
            </div>

            <div className="bracket-center">Championship</div>

            <div className="bracket-right">
                <Championship team1="Team 4"></Championship>

                <div className="round">
                    <Round direction="right" team1="Team 3" team2="Team 4"></Round>
                </div>
            </div>
        </>
    );
};

export default Select4;
