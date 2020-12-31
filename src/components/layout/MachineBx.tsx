import React from 'react';
import styled from 'styled-components';
import Shelf from './Shelf';

const Machine = styled.div`
    width: 100%;
    max-width: 500px;
    height: 700px;
    margin: 100px auto 0;
    padding-top: 30px;
    background: -webkit-linear-gradient(50deg, #1e652c 0%, #578454 52%, #649952 100%);
`;

function MachineBx() {
    return (
        <Machine>
            <Shelf />
        </Machine>
    );
}

export default MachineBx;
