import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';
import PushBtn from '../common/PushBtn';
import { bringCoin } from '../../modules/calc';

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

const ReturnCoin = styled.div<remainProps>`
    position: relative;
    width: 10%;
    height: 50px;
    background-color: #165022;
    border: 7px solid #222;
    border-radius: 5px 5px 25% 25%;
    overflow: hidden;
    perspective: 150px;

    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: -25px;
        width: 3px;
        height: 15px;
        background-color: #bbb;
    }

    &::before {
        left: 6px;
        transform: rotate(30deg);
        ${({ remain }: any) =>
            remain
                ? css`
                      animation-name: falling;
                      animation-duration: 1s;
                      animation-timing-function: linear;
                  `
                : ''}
    }
    &::after {
        left: 19px;
        transform: rotate(-180deg);
        ${({ remain }: any) =>
            remain
                ? css`
                      animation-name: falling;
                      animation-duration: 1s;
                      animation-timing-function: linear;
                  `
                : ''}
    }

    @keyframes falling {
        0% {
            top: -25px;
        }
        100% {
            top: 40px;
            transform: rotate(270deg);
        }
    }
`;

const ReturnCoinBtn = styled(PushBtn)`
    position: relative;
    font-size: 0.6rem;
    font-weight: 400;
    &:hover {
        transform: rotateX(-20deg);
    }
`;

type remainProps = {
    remain: boolean;
};

function BotReturn() {
    const remain = useSelector((state: RootState) => state.calc.remainStatus);
    const dispatch = useDispatch();
    return (
        <BotWrap>
            <ReturnSodaBx>
                <ReturnIn>
                    <ReturnSodaBtn>PUSH</ReturnSodaBtn>
                </ReturnIn>
            </ReturnSodaBx>
            <ReturnCoin remain={remain}>
                <ReturnCoinBtn onClick={() => dispatch(bringCoin())}>COIN</ReturnCoinBtn>
            </ReturnCoin>
        </BotWrap>
    );
}

export default BotReturn;
