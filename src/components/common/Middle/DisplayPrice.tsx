import React from 'react';
import { DisplayPriceWrap, PanMaeing, Price } from './MiddleComponent';

type coinType = {
    coinAmount: number;
};

function DisplayPrice({ coinAmount }: coinType) {
    return (
        <>
            <DisplayPriceWrap>
                <PanMaeing>판매중</PanMaeing>
                <Price>
                    <span>{coinAmount}</span>원
                </Price>
            </DisplayPriceWrap>
        </>
    );
}

export default DisplayPrice;
