import React from 'react';
import { Story } from '@storybook/react';
import Can, { propsType } from '../components/common/Can';

export default {
    title: 'Can',
    component: Can,
    argTypes: {
        product: { control: 'text' },
    },
};

const Template: Story<propsType> = (args: propsType) => <Can {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: ['#000'],
    product: 'Demi\nSoda',
};
