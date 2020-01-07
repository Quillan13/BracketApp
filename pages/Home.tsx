import React from "react";
import { Button } from "@material-ui/core";

const Home = () => {
    return (
        <>
            <Button href="/Bracket">Build a Bracket</Button>
            <br />
            <Button href="Brackets/DisneyAnimatedMovies">Disney Animated Movies</Button>
            <br />
            <Button href="Brackets/DreamworksAnimatedMovies">Dreamworks Animated Movies</Button>
        </>
    );
};

export default Home;
