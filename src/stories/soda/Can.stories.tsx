import React from 'react';
import Can from '../../components/common/Can';
import sodaData from '../../asset/brand';

export default {
    title: 'Top/Can',
    component: Can,
    argTypes: {
        sodaColor: {
            control: {
                type: 'select',
                options: [...sodaData.map((val) => val.color)],
            },
        },
        sodaName: {
            control: {
                type: 'text',
            },
        },
    },
};

export const CanTemplate = ({ sodaColor, sodaName }: never) => (
    <Can color={sodaColor} product={sodaName} />
);
