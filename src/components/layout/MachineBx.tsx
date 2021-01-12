import React from 'react';
import styled from 'styled-components';
import BotReturn from './BotReturn';
import Middle from './Middle';
import Shelf from './Shelf';
import Radiator from './Radiator';

const Machine = styled.div`
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 800px;
    padding-top: 30px;
    border-radius: 5px;
    background: -webkit-linear-gradient(50deg, #1e652c 0%, #578454 52%, #649952 100%);
`;

const Inner = styled.div`
    padding: 0 30px;
`;

function MachineBx() {
    return (
        <Machine>
            <Inner>
                <Shelf />
                <Middle />
                <BotReturn />
                <Radiator />
            </Inner>
        </Machine>
    );
}

export default MachineBx;
