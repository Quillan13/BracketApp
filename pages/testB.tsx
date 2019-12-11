import React from "react";

const TestB = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Test Bracket</title>
                <link rel="stylesheet" type="text/css" href="testB.css" />
            </head>
            <body>
                <div class="bracket">
                    <div class="bracket-left">
                        <div class="round">
                            <div class="group">
                                <div class="group-team group-team-top">Team 1</div>
                                <div class="group-team group-team-divider"></div>
                                <div class="group-team group-team-bottom">Team 2</div>
                            </div>
                            <div class="group">
                                <div class="group-team group-team-top">Team 3</div>
                                <div class="group-team group-team-divider"></div>
                                <div class="group-team group-team-bottom">Team 4</div>
                            </div>
                        </div>

                        <div class="round">
                            <div class="group">
                                <div class="group-team group-team-top">Team 1</div>
                                <div class="group-team group-team-divider"></div>
                                <div class="group-team group-team-bottom">Team 4</div>
                            </div>
                        </div>

                        <div class="round">
                            <div class="group">
                                <div class="group-team group-team-top">Team 1</div>
                            </div>
                        </div>
                    </div>

                    <div class="bracket-center">Championship</div>

                    <div class="bracket-right">
                        <div class="round">
                            <div class="group">
                                <div class="group-team group-team-top">Team 7</div>
                            </div>
                        </div>

                        <div class="round">
                            <div class="group">
                                <div class="group-team group-team-top">Team 5</div>
                                <div class="group-team group-team-divider"></div>
                                <div class="group-team group-team-bottom">Team 7</div>
                            </div>
                        </div>

                        <div class="round">
                            <div class="group">
                                <div class="group-team group-team-top">Team 5</div>
                                <div class="group-team group-team-divider"></div>
                                <div class="group-team group-team-bottom">Team 6</div>
                            </div>
                            <div class="group">
                                <div class="group-team group-team-top">Team 7</div>
                                <div class="group-team group-team-divider"></div>
                                <div class="group-team group-team-bottom">Team 8</div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default TestB;