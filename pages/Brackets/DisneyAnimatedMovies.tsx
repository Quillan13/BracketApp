import "../../styles/bracketDisplay.css";
import React, { useState } from "react";
import Match from "../../utilities/Match";
import SemiFinal from "../../utilities/SemiFinal";
import Championship from "../../utilities/Championship";
import Bracket from "../../data/DisneyAnimatedFilms";
import { makeStyles, Theme, createStyles, createMuiTheme, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        selectGrid: {
            height: "70px",
            width: "100vw"
        },
        bracket: {
            margin: "auto",
            width: "fit-content",
            minHeight: "calc(100vh - 70px)",
            padding: theme.spacing(3)
        },
        formControl: {
            margin: theme.spacing(1),
            //Keep the Drop Down From Getting Clustered
            minWidth: 200
        },
        selectEmpty: {
            marginTop: theme.spacing(2)
        }
    })
);

const DisneyAnimatedMovies = () => {
    function handleChamp1() {
        setLeft("green");
        setRight("red");
    }

    function handleChamp2() {
        setLeft("red");
        setRight("green");
    }

    const classes = useStyles(createMuiTheme());
    const [left, setLeft] = useState("default");
    const [right, setRight] = useState("default");
    // const [bottom, setBottom] = useState("default");

    return (
        <Grid container wrap="nowrap" className={classes.bracket}>
            <div className="bracket-left">
                <div className="round">
                    <Match direction="left" team1={Bracket.Princesses[0].title} team2={Bracket.Princesses[15].title}></Match>
                    <Match direction="left" team1={Bracket.Princesses[1].title} team2={Bracket.Princesses[14].title}></Match>
                    <Match direction="left" team1={Bracket.Princesses[2].title} team2={Bracket.Princesses[13].title}></Match>
                    <Match direction="left" team1={Bracket.Princesses[3].title} team2={Bracket.Princesses[12].title}></Match>
                    <Match direction="left" team1={Bracket.Princesses[4].title} team2={Bracket.Princesses[11].title}></Match>
                    <Match direction="left" team1={Bracket.Princesses[5].title} team2={Bracket.Princesses[10].title}></Match>
                    <Match direction="left" team1={Bracket.Princesses[6].title} team2={Bracket.Princesses[9].title}></Match>
                    <Match direction="left" team1={Bracket.Princesses[7].title} team2={Bracket.Princesses[8].title}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[0].title} team2={Bracket.EarlyYears[15].title}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[1].title} team2={Bracket.EarlyYears[14].title}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[2].title} team2={Bracket.EarlyYears[13].title}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[3].title} team2={Bracket.EarlyYears[12].title}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[4].title} team2={Bracket.EarlyYears[11].title}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[5].title} team2={Bracket.EarlyYears[10].title}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[6].title} team2={Bracket.EarlyYears[9].title}></Match>
                    <Match direction="left" team1={Bracket.EarlyYears[7].title} team2={Bracket.EarlyYears[8].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[0].title} team2={Bracket.Sequals2[15].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[1].title} team2={Bracket.Sequals2[14].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[2].title} team2={Bracket.Sequals2[13].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[3].title} team2={Bracket.Sequals2[12].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[4].title} team2={Bracket.Sequals2[11].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[5].title} team2={Bracket.Sequals2[10].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[6].title} team2={Bracket.Sequals2[9].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[7].title} team2={Bracket.Sequals2[8].title}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[0].title} team2={Bracket.TVMovies[15].title}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[1].title} team2={Bracket.TVMovies[14].title}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[2].title} team2={Bracket.TVMovies[13].title}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[3].title} team2={Bracket.TVMovies[12].title}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[4].title} team2={Bracket.TVMovies[11].title}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[5].title} team2={Bracket.TVMovies[10].title}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[6].title} team2={Bracket.TVMovies[9].title}></Match>
                    <Match direction="left" team1={Bracket.TVMovies[7].title} team2={Bracket.TVMovies[8].title}></Match>
                </div>

                <div className="round">
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                </div>

                <div className="round">
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                </div>

                <div className="round">
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                </div>

                <div className="round">
                    <Match direction="left" team1="" team2=""></Match>
                    <Match direction="left" team1="" team2=""></Match>
                </div>

                <SemiFinal direction="left" team1="" team2=""></SemiFinal>

                <Championship team1="" click={handleChamp1} color={left}></Championship>
            </div>

            <div className="bracket-center">Championship</div>

            <div className="bracket-right">
                <Championship team1="" click={handleChamp2} color={right}></Championship>

                <SemiFinal direction="right" team1="" team2=""></SemiFinal>

                <div className="round">
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                </div>

                <div className="round">
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                </div>

                <div className="round">
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                </div>

                <div className="round">
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                    <Match direction="right" team1="" team2=""></Match>
                </div>

                <div className="round">
                    <Match direction="right" team1={Bracket.ComingofAge[0].title} team2={Bracket.ComingofAge[15].title}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[1].title} team2={Bracket.ComingofAge[14].title}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[2].title} team2={Bracket.ComingofAge[13].title}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[3].title} team2={Bracket.ComingofAge[12].title}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[4].title} team2={Bracket.ComingofAge[11].title}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[5].title} team2={Bracket.ComingofAge[10].title}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[6].title} team2={Bracket.ComingofAge[9].title}></Match>
                    <Match direction="right" team1={Bracket.ComingofAge[7].title} team2={Bracket.ComingofAge[8].title}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[0].title} team2={Bracket.Sequals1[15].title}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[1].title} team2={Bracket.Sequals1[14].title}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[2].title} team2={Bracket.Sequals1[13].title}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[3].title} team2={Bracket.Sequals1[12].title}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[4].title} team2={Bracket.Sequals1[11].title}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[5].title} team2={Bracket.Sequals1[10].title}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[6].title} team2={Bracket.Sequals1[9].title}></Match>
                    <Match direction="right" team1={Bracket.Sequals1[7].title} team2={Bracket.Sequals1[8].title}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[0].title} team2={Bracket.Pixarish[15].title}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[1].title} team2={Bracket.Pixarish[14].title}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[2].title} team2={Bracket.Pixarish[13].title}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[3].title} team2={Bracket.Pixarish[12].title}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[4].title} team2={Bracket.Pixarish[11].title}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[5].title} team2={Bracket.Pixarish[10].title}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[6].title} team2={Bracket.Pixarish[9].title}></Match>
                    <Match direction="right" team1={Bracket.Pixarish[7].title} team2={Bracket.Pixarish[8].title}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[0].title} team2={Bracket.TFCentury[15].title}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[1].title} team2={Bracket.TFCentury[14].title}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[2].title} team2={Bracket.TFCentury[13].title}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[3].title} team2={Bracket.TFCentury[12].title}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[4].title} team2={Bracket.TFCentury[11].title}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[5].title} team2={Bracket.TFCentury[10].title}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[6].title} team2={Bracket.TFCentury[9].title}></Match>
                    <Match direction="right" team1={Bracket.TFCentury[7].title} team2={Bracket.TFCentury[8].title}></Match>
                </div>
            </div>
        </Grid>
    );
};

export default DisneyAnimatedMovies;
