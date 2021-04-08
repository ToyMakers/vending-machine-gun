import React from 'react';
import { DisplayPriceWrap, PanMaeing, Price } from './MiddleComponent';

function DisplayPrice() {
    return (
        <>
            <DisplayPriceWrap>
                <PanMaeing>판매중</PanMaeing>
                <Price>
                    <span>{2000}</span>
                </Price>
            </DisplayPriceWrap>
        </>
    );
}

export default DisplayPrice;
