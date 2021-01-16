import React from 'react';
import styled from 'styled-components';
import CanList from '../common/CanList';

const VendingShelf = styled.div`
    width: 100%;
    margin: 0 auto;
`;

function Shelf() {
    return (
        <VendingShelf>
            <CanList soda={1} />
            <CanList soda={2} />
        </VendingShelf>
    );
}

export default Shelf;
