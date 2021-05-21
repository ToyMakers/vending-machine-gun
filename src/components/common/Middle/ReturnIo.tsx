/* eslint-disable */
import React from 'react';
import { CoinIo, ReturnBx, ReturnLabel, ReturnBtn, Slot } from './MiddleComponent';

type ReturnType = {
    returnEvent: any;
    drop: any;
};

const ReturnIo = ({ returnEvent, drop }: ReturnType) => {
    return (
        <CoinIo>
            <ReturnBx>
                <ReturnLabel>RETURN</ReturnLabel>

                <ReturnBtn onClick={returnEvent || false} />
            </ReturnBx>
            {drop ? <Slot ref={drop} /> : <Slot />}
        </CoinIo>
    );
};

export default ReturnIo;
