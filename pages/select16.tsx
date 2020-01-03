import "../styles/bracketDisplay.css";
import React, { useState } from "react";
import Match from "../utilities/Match";
import SemiFinal from "../utilities/SemiFinal";
import Championship from "../utilities/Championship";

const Select16 = () => {
    function handleChamp1() {
        setLeft("green");
        setRight("red");
    }

    function handleChamp2() {
        setLeft("red");
        setRight("green");
    }
    const [left, setLeft] = useState("default");
    const [right, setRight] = useState("default");

    return (
        <>
            <div className="bracket-left">
                <div className="round">
                    <Match direction="left" team1="Team 1" team2="Team 2"></Match>
                    <Match direction="left" team1="Team 3" team2="Team 4"></Match>
                    <Match direction="left" team1="Team 5" team2="Team 6"></Match>
                    <Match direction="left" team1="Team 7" team2="Team 8"></Match>
                </div>

                <div className="round">
                    <Match direction="left" team1="Team 1" team2="Team 4"></Match>
                    <Match direction="left" team1="Team 6" team2="Team 7"></Match>
                </div>

                <SemiFinal direction="left" team1="Team 1" team2="Team 6"></SemiFinal>

                <Championship team1="Team 1" click={handleChamp1} color={left}></Championship>
            </div>

            <div className="bracket-center">Championship</div>

            <div className="bracket-right">
                <Championship team1="Team 2" click={handleChamp2} color={right}></Championship>

                <SemiFinal direction="right" team1="Team 11" team2="Team 15"></SemiFinal>

                <div className="round">
                    <Match direction="right" team1="Team 9" team2="Team 11"></Match>
                    <Match direction="right" team1="Team 14" team2="Team 15"></Match>
                </div>

                <div className="round">
                    <Match direction="right" team1="Team 9" team2="Team 10"></Match>
                    <Match direction="right" team1="Team 11" team2="Team 12"></Match>
                    <Match direction="right" team1="Team 13" team2="Team 14"></Match>
                    <Match direction="right" team1="Team 15" team2="Team 16"></Match>
                </div>
            </div>
        </>
    );
};

export default Select16;
