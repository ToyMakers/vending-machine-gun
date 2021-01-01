import React from 'react';
import { Story } from '@storybook/react';
import Can, { propsType } from '../components/common/Can';
import sodaData, { sodaType } from '../asset/brand';
import { stringify } from 'querystring';

export default {
    title: 'Can',
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
