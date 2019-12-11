import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

import dynamic from "next/dynamic";
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
