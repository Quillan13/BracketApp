import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@material-ui/core";

const Home = () => {
    return (
        <div>
            <Link href="/Bracket" passHref>
                <Button component="a">Build a Bracket</Button>
            </Link>{" "}
        </div>
    );
};

export default Home;
