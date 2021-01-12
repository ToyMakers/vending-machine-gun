import React from 'react';
import styled from 'styled-components';
import Basket from './Basket';
import Wallet from './Wallet';

const AppRight = styled.div`
    width: 50%;
    padding-left: 20px;
`;

function WalletBasket() {
    return (
        <AppRight>
            <Wallet />
            <Basket />
        </AppRight>
    );
}

export default WalletBasket;
