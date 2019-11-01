import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { Bracket, BracketGame } from "react-tournament-bracket";
import { Game } from "react-tournament-bracket/lib/components/model";
const game: Game = {
    bracketLabel: "Game 1",
    court: { name: "Court 1", venue: { name: "Dade's Place" } },
    id: "1",
    name: "Dade's Game",
    scheduled: 0,
    sides: {
        home: { team: { id: "0", name: "Dade" }, score: { score: 0 } },
        visitor: { team: { id: "1", name: "Jose" }, score: { score: 0 } }
    }
};
const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />
        <Bracket game={game} />
    </div>
);

export default Home;
