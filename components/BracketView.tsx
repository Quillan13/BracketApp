import React from "react";

import Tree from "react-d3-tree";

import BracketGenerator from "../utilities/BracketGenerator";
import BracketParticipant from "../types/BracketParticipant";
import BracketMatch from "../types/BracketMatch";

// const game: Game = {
// 	bracketLabel: 'Game 1',
// 	court: { name: 'Court 1', venue: { name: "Dade's Place" } },
// 	id: '1',
// 	name: "Dade's Game",
// 	scheduled: 0,
// 	sides: {
// 		home: { team: { id: '0', name: 'Dade' }, score: { score: 0 } },
// 		visitor: { team: { id: '1', name: 'Jose' }, score: { score: 0 } },
// 	},
// };

const NodeLabelComponent: React.FC<any> = ({ nodeData }) => {
    const match = nodeData as BracketMatch;

    return (
        nodeData && (
            <div>
                {match.FirstParticipant && <div>{match.FirstParticipant.name}</div>}
                {match.SecondParticipant && <div>{match.SecondParticipant.name}</div>}
            </div>
        )
    );
};
const BracketView = () => {
    const bracket = new BracketGenerator(
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"].map<BracketParticipant>(
            name => ({
                name
            })
        )
    ).GenerateBracket();

    return (
        <Tree
            data={bracket.RootMatch}
            pathFunc="elbow"
            nodeSvgShape={{
                shape: "rect",
                shapeProps: {
                    width: 20,
                    height: 20,
                    x: -10,
                    y: -10
                }
            }}
            allowForeignObjects
            nodeLabelComponent={{
                render: <NodeLabelComponent />,
                foreignObjectWrapper: {
                    x: 24,
                    y: -20
                }
            }}
        />
    );
    // return <Bracket game={game} />;
};

export default BracketView;
