import "../styles/bracketDisplay.css";
import React from "react";
import Match from "../utilities/Match";
import SemiFinal from "../utilities/SemiFinal";
import Championship from "../utilities/Championship";

const Select8 = () => {
    return (
        <>
            <div className="bracket-left">
                <div className="round">
                    <Match direction="left" team1="Team 1" team2="Team 2"></Match>
                    <Match direction="left" team1="Team 3" team2="Team 4"></Match>
                </div>

                <SemiFinal direction="left" team1="Team 1" team2="Team 4"></SemiFinal>

                <Championship team1="Team 1"></Championship>
            </div>

            <div className="bracket-center">Championship</div>

            <div className="bracket-right">
                <Championship team1="Team 7"></Championship>

                <SemiFinal direction="right" team1="Team 5" team2="Team 7"></SemiFinal>

                <div className="round">
                    <Match direction="right" team1="Team 5" team2="Team 6"></Match>
                    <Match direction="right" team1="Team 7" team2="Team 8"></Match>
                </div>
            </div>
        </>
    );
};

export default Select8;
