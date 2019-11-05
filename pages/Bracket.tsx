import React from "react";
import dynamic from "next/dynamic";

const BracketView = dynamic(() => import("../components/BracketView"), { ssr: false });

const Bracket = () => {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <BracketView />
        </div>
    );
};

export default Bracket;
