import React from 'react';
import DisplayPrice from '../components/layout/Middle';

export default {
    title: 'Price',
    component: DisplayPrice,
    argTypes: {
        price: {
            controls: {
                type: 'text',
            },
        },
    },
};

type priceType = {
    price: number;
};

// export const PriceTemplate = ({ price }: priceType) => {
//     <DisplayPrice>{2000}</DisplayPrice>;
// };
