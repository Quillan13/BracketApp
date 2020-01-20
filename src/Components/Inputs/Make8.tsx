import React, { useState } from "react";
import Select4 from "Pages/select4";

const Make8 = () => {

    function handleClick() {
        setReady(true);
    }
    const [seed1, setSeed1] = useState('Team 1');
    const [seed2, setSeed2] = useState('Team 2');
    const [seed3, setSeed3] = useState('Team 3');
    const [seed4, setSeed4] = useState('Team 4');
    const [ready, setReady] = useState(false);

    if (ready) {
        return (
            <>
                <Select4 seed1={seed1} seed2={seed2} seed3={seed3} seed4={seed4}></Select4>

            </>
        )

    }
    else {
        return (
            <>
                <form>
                    <label>Seed 1</label><br></br>
                    <input name="Seed 1" onChange={(event) => setSeed1(event.target.value)} value={seed1} />
                    <br></br><label>Seed 2</label><br></br>
                    <input name="Seed 2" onChange={(event) => setSeed2(event.target.value)} value={seed2} />
                    <br></br><label>Seed 3</label><br></br>
                    <input name="Seed 3" onChange={(event) => setSeed3(event.target.value)} value={seed3} />
                    <br></br><label>Seed 4</label><br></br>
                    <input name="Seed 4" onChange={(event) => setSeed4(event.target.value)} value={seed4} />
                    <br></br><button onClick={handleClick}>Submit</button>
                </form>
            </>
        )
    }
};


export default Make8;
