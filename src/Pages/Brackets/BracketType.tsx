import React from 'react';
import Button from '@material-ui/core/Button';

const BracketType = () => {
    return (
        <>
            <Button href="/Brackets/SingleCustom">Single Elimination</Button>
            <br />
            <Button href="/Brackets/DoubleCustom">Double Elimination</Button>
        </>
    );
};

export default BracketType;
