import "../styles/bracketDisplay.css";
import React from "react";
import Round from "../utilities/Round";
import SemiFinal from "../utilities/SemiFinal";
import Championship from "../utilities/Championship";

const Select8 = () => {
    return (
        <>
            <div className="bracket-left">
                <div className="round">
                    <Round direction="left" team1="Team 1" team2="Team 2"></Round>
                    <Round direction="left" team1="Team 3" team2="Team 4"></Round>
                </div>

                <SemiFinal direction="left" team1="Team 1" team2="Team 4"></SemiFinal>

                <Championship team1="Team 1"></Championship>
            </div>

            <div className="bracket-center">Championship</div>

            <div className="bracket-right">
                <Championship team1="Team 7"></Championship>

                <SemiFinal direction="right" team1="Team 5" team2="Team 7"></SemiFinal>

                <div className="round">
                    <Round direction="right" team1="Team 5" team2="Team 6"></Round>
                    <Round direction="right" team1="Team 7" team2="Team 8"></Round>
                </div>
            </div>
        </>
    );
};

export default Select8;
