import React from 'react';
import DisplayPrice from '../../components/common/Middle/DisplayPrice';

export default {
    title: 'Middle/Price',
    component: DisplayPrice,
    argTypes: {
        coinAmount: {
            controls: {
                type: 'text',
            },
        },
    },
};

type priceType = {
    coinAmount: number;
};

export const PriceTemplate = ({ coinAmount = 0 }: priceType) => (
    <DisplayPrice coinAmount={coinAmount} />
);
