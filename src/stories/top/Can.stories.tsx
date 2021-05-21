import React from 'react';
import Can from '../../components/common/Can';
import sodaData from '../../asset/brand';

export default {
    title: 'Top/Can',
    component: Can,
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: [...sodaData.map((val) => val.color)],
            },
        },
        product: {
            control: {
                type: 'text',
            },
        },
    },
};

export const CanTemplate = ({ color, product }: never) => <Can color={color} product={product} />;
