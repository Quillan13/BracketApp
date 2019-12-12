import "../styles/bracketDisplay.css";
import React from "react";
import Match from "../utilities/Match";
import SemiFinal from "../utilities/SemiFinal";
import Championship from "../utilities/Championship";

const Select64 = () => {
    return (
        <>
            <div className="bracket-left">
                <div className="round">
                    <Match direction="left" team1="Team 1" team2="Team 2"></Match>
                    <Match direction="left" team1="Team 3" team2="Team 4"></Match>
                    <Match direction="left" team1="Team 5" team2="Team 6"></Match>
                    <Match direction="left" team1="Team 7" team2="Team 8"></Match>
                    <Match direction="left" team1="Team 9" team2="Team 10"></Match>
                    <Match direction="left" team1="Team 11" team2="Team 12"></Match>
                    <Match direction="left" team1="Team 13" team2="Team 14"></Match>
                    <Match direction="left" team1="Team 15" team2="Team 16"></Match>
                    <Match direction="left" team1="Team 17" team2="Team 18"></Match>
                    <Match direction="left" team1="Team 19" team2="Team 20"></Match>
                    <Match direction="left" team1="Team 21" team2="Team 22"></Match>
                    <Match direction="left" team1="Team 23" team2="Team 24"></Match>
                    <Match direction="left" team1="Team 25" team2="Team 26"></Match>
                    <Match direction="left" team1="Team 27" team2="Team 28"></Match>
                    <Match direction="left" team1="Team 29" team2="Team 30"></Match>
                    <Match direction="left" team1="Team 31" team2="Team 32"></Match>
                </div>

                <div className="round">
                    <Match direction="left" team1="Team 1" team2="Team 3"></Match>
                    <Match direction="left" team1="Team 5" team2="Team 8"></Match>
                    <Match direction="left" team1="Team 10" team2="Team 11"></Match>
                    <Match direction="left" team1="Team 14" team2="Team 16"></Match>
                    <Match direction="left" team1="Team 18" team2="Team 20"></Match>
                    <Match direction="left" team1="Team 22" team2="Team 24"></Match>
                    <Match direction="left" team1="Team 26" team2="Team 28"></Match>
                    <Match direction="left" team1="Team 30" team2="Team 32"></Match>
                </div>

                <div className="round">
                    <Match direction="left" team1="Team 1" team2="Team 8"></Match>
                    <Match direction="left" team1="Team 11" team2="Team 14"></Match>
                    <Match direction="left" team1="Team 20" team2="Team 24"></Match>
                    <Match direction="left" team1="Team 28" team2="Team 32"></Match>
                </div>

                <div className="round">
                    <Match direction="left" team1="Team 1" team2="Team 11"></Match>
                    <Match direction="left" team1="Team 24" team2="Team 32"></Match>
                </div>

                <SemiFinal direction="left" team1="Team 1" team2="Team 24"></SemiFinal>

                <Championship team1="Team 1"></Championship>
            </div>

            <div className="bracket-center">Championship</div>

            <div className="bracket-right">
                <Championship team1="Team 64"></Championship>

                <SemiFinal direction="right" team1="Team 33" team2="Team 64"></SemiFinal>

                <div className="round">
                    <Match direction="right" team1="Team 33" team2="Team 47"></Match>
                    <Match direction="right" team1="Team 56" team2="Team 64"></Match>
                </div>
                <div className="round">
                    <Match direction="right" team1="Team 33" team2="Team 40"></Match>
                    <Match direction="right" team1="Team 41" team2="Team 47"></Match>
                    <Match direction="right" team1="Team 51" team2="Team 56"></Match>
                    <Match direction="right" team1="Team 60" team2="Team 64"></Match>
                </div>

                <div className="round">
                    <Match direction="right" team1="Team 33" team2="Team 36"></Match>
                    <Match direction="right" team1="Team 38" team2="Team 40"></Match>
                    <Match direction="right" team1="Team 41" team2="Team 43"></Match>
                    <Match direction="right" team1="Team 45" team2="Team 47"></Match>
                    <Match direction="right" team1="Team 49" team2="Team 51"></Match>
                    <Match direction="right" team1="Team 54" team2="Team 56"></Match>
                    <Match direction="right" team1="Team 58" team2="Team 60"></Match>
                    <Match direction="right" team1="Team 62" team2="Team 64"></Match>
                </div>

                <div className="round">
                    <Match direction="right" team1="Team 33" team2="Team 34"></Match>
                    <Match direction="right" team1="Team 35" team2="Team 36"></Match>
                    <Match direction="right" team1="Team 37" team2="Team 38"></Match>
                    <Match direction="right" team1="Team 39" team2="Team 40"></Match>
                    <Match direction="right" team1="Team 41" team2="Team 42"></Match>
                    <Match direction="right" team1="Team 43" team2="Team 44"></Match>
                    <Match direction="right" team1="Team 45" team2="Team 46"></Match>
                    <Match direction="right" team1="Team 47" team2="Team 48"></Match>
                    <Match direction="right" team1="Team 49" team2="Team 50"></Match>
                    <Match direction="right" team1="Team 51" team2="Team 52"></Match>
                    <Match direction="right" team1="Team 53" team2="Team 54"></Match>
                    <Match direction="right" team1="Team 55" team2="Team 56"></Match>
                    <Match direction="right" team1="Team 57" team2="Team 58"></Match>
                    <Match direction="right" team1="Team 59" team2="Team 60"></Match>
                    <Match direction="right" team1="Team 61" team2="Team 62"></Match>
                    <Match direction="right" team1="Team 63" team2="Team 64"></Match>
                </div>
            </div>
        </>
    );
};

export default Select64;
