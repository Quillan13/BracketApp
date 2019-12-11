import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <Link href="/Bracket" passHref>
                    <Button component="a">Build a Bracket</Button>
                </Link>{" "}
            </div>
            <div>
                <Link href="/DisneyAnimatedMovies" passHref>
                    <Button component="a">Disney Animated Movies</Button>
                </Link>{" "}
            </div>
        </React.Fragment>
    );
};

export default Home;
