import React from 'react';
import ReturnIo from '../../components/common/Middle/ReturnIo';

export default {
    title: 'Middle/Return',
    component: ReturnIo,
    argTypes: {
        coinAmount: {
            controls: {
                type: 'text',
            },
        },
    },
};

export const ReturnUi = () => <ReturnIo returnEvent={false} drop={false} />;
