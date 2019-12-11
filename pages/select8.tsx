import "./bracket.css";
import React from "react";

const Select8 = () => {
    return (
        <>
            <div className="bracket">
                <div className="bracket-left">
                    <div className="round">
                        <div className="group">
                            <div className="group-team group-team-top">Team 1</div>
                            <div className="group-team group-team-divider"></div>
                            <div className="group-team group-team-bottom">Team 2</div>
                        </div>
                        <div className="group">
                            <div className="group-team group-team-top">Team 3</div>
                            <div className="group-team group-team-divider"></div>
                            <div className="group-team group-team-bottom">Team 4</div>
                        </div>
                    </div>

                    <div className="round">
                        <div className="group">
                            <div className="group-team group-team-top">Team 1</div>
                            <div className="group-team group-team-divider"></div>
                            <div className="group-team group-team-bottom">Team 4</div>
                        </div>
                    </div>

                    <div className="round">
                        <div className="group">
                            <div className="group-team group-team-top">Team 1</div>
                        </div>
                    </div>
                </div>

                <div className="bracket-center">Championship</div>

                <div className="bracket-right">
                    <div className="round">
                        <div className="group">
                            <div className="group-team group-team-top">Team 7</div>
                        </div>
                    </div>

                    <div className="round">
                        <div className="group">
                            <div className="group-team group-team-top">Team 5</div>
                            <div className="group-team group-team-divider-bracket-right"></div>
                            <div className="group-team group-team-bottom">Team 7</div>
                        </div>
                    </div>

                    <div className="round">
                        <div className="group">
                            <div className="group-team group-team-top">Team 5</div>
                            <div className="group-team group-team-divider-bracket-right"></div>
                            <div className="group-team group-team-bottom">Team 6</div>
                        </div>
                        <div className="group">
                            <div className="group-team group-team-top">Team 7</div>
                            <div className="group-team group-team-divider-bracket-right"></div>
                            <div className="group-team group-team-bottom">Team 8</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Select8;
