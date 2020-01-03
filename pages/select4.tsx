import "../styles/bracketDisplay.css";
import React, { useState } from "react";
import Match from "../utilities/Match";
import Championship from "../utilities/Championship";

const Select4 = () => {
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
                </div>

                <Championship team1="Team 1" click={handleChamp1} color={left}></Championship>
            </div>

            <div className="bracket-center">Championship</div>

            <div className="bracket-right">
                <Championship team1="Team 4" click={handleChamp2} color={right}></Championship>

                <div className="round">
                    <Match direction="right" team1="Team 3" team2="Team 4"></Match>
                </div>
            </div>
        </>
    );
};

export default Select4;
