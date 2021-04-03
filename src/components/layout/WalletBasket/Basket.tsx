import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { isLabeledStatement } from 'typescript';
import { sodaType } from '../../../asset/brand';
import { RootState } from '../../../modules';
import Can, { propsType } from '../../common/Can';
import { WalletBasketTitle } from '../../common/WalletBasketTitle';

const BasketWrap = styled.div`
    width: 100%;
    margin-top: 40px;
`;

const BasketTitle = styled(WalletBasketTitle)`
    color: #f08c00;
`;

const BasketBx = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    height: 400px;
    padding: 20px;
    border-radius: 10px;
    background-color: #f59f00;
`;

const CanItem = styled.li`
    width: 33.3333%;
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
    const basketSoda = useSelector((state: RootState) => state.picking.basket);

    const label = basketSoda.map((soda) => soda.label);

    const init: { [index: string]: number } = {};
    const overlapObj = label.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, init);

    const overlapList = Object.entries(overlapObj);
    return (
        <BasketWrap>
            <BasketTitle>BASKET</BasketTitle>
            <BasketBx>
                {overlapList.map((soda) => {
                    const filtSoda = basketSoda.filter((curSoda) => curSoda.label === soda[0]);
                    const { id, product, color } = filtSoda[0];
                    return (
                        <CanItem key={soda[0]}>
                            <Can key={id} product={product} color={color} />
                            <CanNumber>X {soda[1]}</CanNumber>
                        </CanItem>
                    );
                })}
            </BasketBx>
        </BasketWrap>
    );
}

export default Basket;
