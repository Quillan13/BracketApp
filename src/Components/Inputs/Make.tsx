import React, { useState } from "react";
import Select4 from "Pages/SingleCustom/select4";
import Select8 from "Pages/SingleCustom/select8";
import Select16 from "Pages/SingleCustom/select16";
import Select32 from "Pages/SingleCustom/select32";
import Select64 from "Pages/SingleCustom/select64";
import Select128 from "Pages/SingleCustom/select128";
import SingleCustomBracket from "Pages/Brackets/SingleCustomBracket";
import { Grid } from "@material-ui/core";
import Page from 'Types/Page';


const Make: Page<MakeProps> = ({ num }) => {

    function handleClick() {
        setReady(true);
    }

    const getOnChange = (index: number) => (event: any) => {
        const newSeed = [...seeds];

        newSeed[index] = event.target.value;

        setSeed(newSeed);
    };

    const [ready, setReady] = useState(false);
    const [seeds, setSeed] = useState([...new Array(num)].map(() => ""));


    if (ready) {
        if (num === 4) { return (<><Select4 seeds={seeds} /></>) }
        else if (num === 8) { return (<><Select8 seeds={seeds} /></>) }
        else if (num === 16) { return (<><Select16 seeds={seeds} /></>) }
        else if (num === 32) { return (<><Select32 seeds={seeds} /></>) }
        else if (num === 64) { return (<><Select64 seeds={seeds} /></>) }
        else if (num === 128) { return (<><Select128 seeds={seeds} /></>) }
        else { return (<><SingleCustomBracket /></>) }

    }

    else {
        return (
            <Grid item container xs={6} justify="center">
                {seeds.filter((_, index) => index < num / 2).map((team: string, index: number) => (
                    <>
                        <Grid item xs={6}>
                            <label key={`team-${index + 1}`}>
                                Seed {index + 1}
                                <input value={team} style={{ margin: "10px" }} onChange={getOnChange(index)} />
                            </label>
                        </Grid>
                        <Grid item xs={6}>
                            <label key={`team-${seeds.length - index}`}>
                                Seed {seeds.length - index}
                                <input value={seeds[seeds.length - index - 1]} style={{ margin: "10px" }} onChange={getOnChange(seeds.length - index - 1)} />
                            </label>
                        </Grid>
                    </>
                ))
                }
                <div>
                    <br></br><button onClick={handleClick}>Submit</button>
                </div>
            </Grid>
        )
    }
};
interface MakeProps {
    num: number;
}


export default Make;
