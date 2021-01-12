import React from 'react';
import styled from 'styled-components';
import Can from '../../common/Can';
import { WalletBasketTitle } from '../../common/WalletBasketTitle';

const BasketWrap = styled.div`
    width: 100%;
    margin-top: 40px;
`;

const BasketTitle = styled(WalletBasketTitle)`
    color: #f08c00;
`;

const BasketBx = styled.ul`
    width: 100%;
    height: 400px;
    padding: 20px;
    border-radius: 10px;
    background-color: #f59f00;
`;

const CanItem = styled.li`
    width: 25%;
`;

const CanNumber = styled.span`
    display: block;
    width: 50px;
    margin: 0 auto;
    line-height: 1.5rem;
    text-align: center;
    color: #ccc;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 50%);
`;

function Basket() {
    return (
        <BasketWrap>
            <BasketTitle>BASKET</BasketTitle>
            <BasketBx>
                <CanItem>
                    <Can />
                    <CanNumber>X {0}</CanNumber>
                </CanItem>
            </BasketBx>
        </BasketWrap>
    );
}

export default Basket;
