import "../../styles/bracketDisplay.css";
import React from "react";
import Match from "../../utilities/Match";
import SemiFinal from "../../utilities/SemiFinal";
import Championship from "../../utilities/Championship";
import { Grid, makeStyles, Theme, createStyles, createMuiTheme } from "../../material-ui/src";
import Bracket from "../../data/DisneyAnimatedFilms";

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
    const classes = useStyles(createMuiTheme());
    return (
        <Grid container wrap="nowrap" className={classes.bracket}>
            <div className="bracket-left">
                <div className="round">
                    <Match direction="left" team1={Bracket.Princesses[0].title} team2={Bracket.Princesses[15].title}></Match>
                    <Match direction="left" team1={Bracket.Princesses[1].title} team2={Bracket.Princesses[14].title}></Match>
                    <Match direction="left" team1={Bracket.Princesses[2].title} team2={Bracket.Princesses[13].title}></Match>                    <Match direction="left" team1="Team 7" team2="Team 8"></Match>
                    <Match direction="left" team1={Bracket.Princesses[3].title} team2={Bracket.Princesses[12].title}></Match>                    <Match direction="left" team1="Team 11" team2="Team 12"></Match>
                    <Match direction="left" team1={Bracket.Princesses[4].title} team2={Bracket.Princesses[11].title}></Match>                    <Match direction="left" team1="Team 15" team2="Team 16"></Match>
                    <Match direction="left" team1={Bracket.Princesses[5].title} team2={Bracket.Princesses[10].title}></Match>                    <Match direction="left" team1="Team 19" team2="Team 20"></Match>
                    <Match direction="left" team1={Bracket.Princesses[6].title} team2={Bracket.Princesses[9].title}></Match>                    <Match direction="left" team1="Team 23" team2="Team 24"></Match>
                    <Match direction="left" team1={Bracket.Princesses[7].title} team2={Bracket.Princesses[8].title}></Match>                    <Match direction="left" team1="Team 27" team2="Team 28"></Match>
                    <Match direction="left" team1={Bracket.Pixarish[0].title} team2={Bracket.Pixarish[15].title}></Match>
                    <Match direction="left" team1={Bracket.Pixarish[1].title} team2={Bracket.Pixarish[14].title}></Match>
                    <Match direction="left" team1={Bracket.Pixarish[2].title} team2={Bracket.Pixarish[13].title}></Match>
                    <Match direction="left" team1={Bracket.Pixarish[3].title} team2={Bracket.Pixarish[12].title}></Match>
                    <Match direction="left" team1={Bracket.Pixarish[4].title} team2={Bracket.Pixarish[11].title}></Match>
                    <Match direction="left" team1={Bracket.Pixarish[5].title} team2={Bracket.Pixarish[10].title}></Match>
                    <Match direction="left" team1={Bracket.Pixarish[6].title} team2={Bracket.Pixarish[9].title}></Match>
                    <Match direction="left" team1={Bracket.Pixarish[7].title} team2={Bracket.Pixarish[8].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals1[0].title} team2={Bracket.Sequals1[15].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals1[1].title} team2={Bracket.Sequals1[14].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals1[2].title} team2={Bracket.Sequals1[13].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals1[3].title} team2={Bracket.Sequals1[12].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals1[4].title} team2={Bracket.Sequals1[11].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals1[5].title} team2={Bracket.Sequals1[10].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals1[6].title} team2={Bracket.Sequals1[9].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals1[7].title} team2={Bracket.Sequals1[8].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[0].title} team2={Bracket.Sequals2[15].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[1].title} team2={Bracket.Sequals2[14].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[2].title} team2={Bracket.Sequals2[13].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[3].title} team2={Bracket.Sequals2[12].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[4].title} team2={Bracket.Sequals2[11].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[5].title} team2={Bracket.Sequals2[10].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[6].title} team2={Bracket.Sequals2[9].title}></Match>
                    <Match direction="left" team1={Bracket.Sequals2[7].title} team2={Bracket.Sequals2[8].title}></Match>

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

                <Championship team1=""></Championship>
            </div>

            <div className="bracket-center">Championship</div>

            <div className="bracket-right">
                <Championship team1="Team 33"></Championship>

                <SemiFinal direction="right" team1="Team 24" team2="Team 33"></SemiFinal>

                <div className="round">
                    <Match direction="right" team1="Team 11" team2="Team 24"></Match>
                    <Match direction="right" team1="Team 33" team2="Team 56"></Match>
                </div>

                <div className="round">
                    <Match direction="right" team1="Team 1" team2="Team 11"></Match>
                    <Match direction="right" team1="Team 24" team2="Team 32"></Match>
                    <Match direction="right" team1="Team 33" team2="Team 47"></Match>
                    <Match direction="right" team1="Team 56" team2="Team 64"></Match>
                </div>

                <div className="round">
                    <Match direction="right" team1="Team 1" team2="Team 8"></Match>
                    <Match direction="right" team1="Team 11" team2="Team 14"></Match>
                    <Match direction="right" team1="Team 20" team2="Team 24"></Match>
                    <Match direction="right" team1="Team 28" team2="Team 32"></Match>
                    <Match direction="right" team1="Team 33" team2="Team 40"></Match>
                    <Match direction="right" team1="Team 41" team2="Team 47"></Match>
                    <Match direction="right" team1="Team 51" team2="Team 56"></Match>
                    <Match direction="right" team1="Team 60" team2="Team 64"></Match>
                </div>

                <div className="round">
                    <Match direction="right" team1="Team 1" team2="Team 3"></Match>
                    <Match direction="right" team1="Team 5" team2="Team 8"></Match>
                    <Match direction="right" team1="Team 10" team2="Team 11"></Match>
                    <Match direction="right" team1="Team 14" team2="Team 16"></Match>
                    <Match direction="right" team1="Team 18" team2="Team 20"></Match>
                    <Match direction="right" team1="Team 22" team2="Team 24"></Match>
                    <Match direction="right" team1="Team 26" team2="Team 28"></Match>
                    <Match direction="right" team1="Team 30" team2="Team 32"></Match>
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
                    <Match direction="right" team1="Team 1" team2="Team 2"></Match>
                    <Match direction="right" team1="Team 3" team2="Team 4"></Match>
                    <Match direction="right" team1="Team 5" team2="Team 6"></Match>
                    <Match direction="right" team1="Team 7" team2="Team 8"></Match>
                    <Match direction="right" team1="Team 9" team2="Team 10"></Match>
                    <Match direction="right" team1="Team 11" team2="Team 12"></Match>
                    <Match direction="right" team1="Team 13" team2="Team 14"></Match>
                    <Match direction="right" team1="Team 15" team2="Team 16"></Match>
                    <Match direction="right" team1="Team 17" team2="Team 18"></Match>
                    <Match direction="right" team1="Team 19" team2="Team 20"></Match>
                    <Match direction="right" team1="Team 21" team2="Team 22"></Match>
                    <Match direction="right" team1="Team 23" team2="Team 24"></Match>
                    <Match direction="right" team1="Team 25" team2="Team 26"></Match>
                    <Match direction="right" team1="Team 27" team2="Team 28"></Match>
                    <Match direction="right" team1="Team 29" team2="Team 30"></Match>
                    <Match direction="right" team1="Team 31" team2="Team 32"></Match>
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
        </Grid>
    );
};

export default DisneyAnimatedMovies;
