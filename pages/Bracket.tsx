import React from "react";
import dynamic from "next/dynamic";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import createMuiTheme, { Theme } from "../material-ui/src/styles/createMuiTheme";
import makeStyles from "../material-ui/src/styles/makeStyles";
import createStyles from "../material-ui/src/styles/createStyles";

//const BracketView = dynamic(() => import("../components/BracketView"), { ssr: false });
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120
        },
        selectEmpty: {
            marginTop: theme.spacing(2)
        }
    })
);

const Bracket = () => {
    const classes = useStyles(createMuiTheme());

    const inputLabel = React.useRef<HTMLLabelElement>(null);

    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    const [bracketSize, setBracketSize] = React.useState<number>();
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                Bracket Size
            </InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={bracketSize}
                onChange={event => setBracketSize(parseInt(event.target.value as string))}
                labelWidth={labelWidth}
            >
                <MenuItem value={undefined}>
                    <em>None</em>
                </MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={16}>16</MenuItem>
                <MenuItem value={32}>32</MenuItem>
            </Select>
        </FormControl>
    );
};

export default Bracket;
