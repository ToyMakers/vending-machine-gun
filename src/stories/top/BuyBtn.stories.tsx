import React from 'react';
import { SodaBuyBtn, SoldOut, BuyPossible } from '../../components/common/CanList';

export default {
    title: 'Top/BuyBtn',
    component: [SodaBuyBtn, SoldOut, BuyPossible],
    argTypes: {
        possible: {
            control: {
                type: 'select',
                options: [true, false],
            },
        },
        soldOut: {
            control: {
                type: 'select',
                options: [true, false],
            },
        },
    },
};

type BuyType = {
    possible: boolean;
    soldOut: boolean;
};

export const BuyBtn = ({ possible, soldOut }: BuyType) => (
    <SodaBuyBtn>
        <BuyPossible possible={possible} />
        <SoldOut soldOut={soldOut}>SoldOut</SoldOut>
    </SodaBuyBtn>
);
