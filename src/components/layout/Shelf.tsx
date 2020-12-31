import React from 'react';
import styled from 'styled-components';
import CanList from '../common/CanList';
import sodaData from '../../asset/brand';

const VendingShelf = styled.div`
    width: 440px;
    margin: 0 auto;
    background-color: #165022;
`;

function Shelf() {
    return (
        <VendingShelf>
            <CanList soda={1} />
        </VendingShelf>
    );
}

export default Shelf;
