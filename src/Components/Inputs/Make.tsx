import React, { useState } from "react";
import Select4 from "Pages/select4";
import Select8 from "Pages/select8";
import Select16 from "Pages/select16";
import Select32 from "Pages/select32";
import Select64 from "Pages/select64";
import Select128 from "Pages/select128";
import CustomBracket from "Pages/Brackets/CustomBracket";
import { Grid } from "@material-ui/core";

const Make: React.FC<MakeProps> = ({ num }) => {

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
        else { return (<><CustomBracket /></>) }

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

            // <>
            //     <form>
            //         <label>Seed 1</label><br></br>
            //         <input name="Seed 1" onChange={(event) => setSeed1(event.target.value)} value={seed1} />
            //         <br></br><label>Seed 2</label><br></br>
            //         <input name="Seed 2" onChange={(event) => setSeed2(event.target.value)} value={seed2} />
            //         <br></br><label>Seed 3</label><br></br>
            //         <input name="Seed 3" onChange={(event) => setSeed3(event.target.value)} value={seed3} />
            //         <br></br><label>Seed 4</label><br></br>
            //         <input name="Seed 4" onChange={(event) => setSeed4(event.target.value)} value={seed4} />
            //         <br></br><button onClick={handleClick}>Submit</button>
            //     </form>
            // </>
        )
    }
};
interface MakeProps {
    num: number;
}


export default Make;
