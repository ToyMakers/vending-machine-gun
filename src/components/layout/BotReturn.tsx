import React from 'react';
import styled from 'styled-components';
import PushBtn from '../common/PushBtn';

const BotWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
`;

const ReturnSodaBx = styled.div`
    width: 65%;
    height: 100px;
    border-radius: 5px 5px 17% 17%;
    background-color: #222;
`;

const ReturnIn = styled.div`
    width: 85%;
    height: 80px;
    margin: 10px auto 0;
    border-radius: 5% 5% 20px 20px;
    background-color: #165022;
    overflow: hidden;
    perspective: 150px;
`;

const ReturnSodaBtn = styled(PushBtn)`
    border-radius: 0 0 20px 20px;
`;

const ReturnCoin = styled.div`
    width: 10%;
    height: 50px;
    background-color: #165022;
    border: 7px solid #222;
    border-radius: 5px 5px 25% 25%;
    perspective: 150px;
`;

const ReturnCoinBtn = styled(PushBtn)`
    font-size: 0.6rem;
    font-weight: 400;
    &:hover {
        transform: rotateX(-20deg);
    }
`;

function BotReturn() {
    return (
        <BotWrap>
            <ReturnSodaBx>
                <ReturnIn>
                    <ReturnSodaBtn>PUSH</ReturnSodaBtn>
                </ReturnIn>
            </ReturnSodaBx>
            <ReturnCoin>
                <ReturnCoinBtn>COIN</ReturnCoinBtn>
            </ReturnCoin>
        </BotWrap>
    );
}

export default BotReturn;
