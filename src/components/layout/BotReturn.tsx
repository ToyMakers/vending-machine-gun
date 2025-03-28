import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';
import PushBtn from '../common/PushBtn';
import { bringCoin } from '../../modules/calc';
import { bringSoda } from '../../modules/picking';
import Can from '../common/Can';
import { sodaType } from '../../asset/brand';

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
    position: relative;
    width: 85%;
    height: 80px;
    margin: 10px auto 0;
    border-radius: 5% 5% 20px 20px;
    background-color: #165022;
    overflow: hidden;
    perspective: 150px;
`;

const ReturnSodaBtn = styled(PushBtn)`
    position: relative;
    z-index: 1;
    border-radius: 0 0 20px 20px;
`;

const SodaCan = styled.div<{ location: number }>`
    position: absolute;
    top: 20px;
    left: ${({ location }) => `${location}px`};
    transform: rotate(90deg);
    animation-name: drop;
    animation-duration: 1s;
    animation-timing-function: linear;

    @keyframes drop {
        0% {
            top: -100px;
            transform: rotate(-260deg);
        }
        40% {
            top: 20px;
            transform: rotate(90deg);
        }

        60% {
            top: 10px;
            transform: rotate(60deg);
            transform-origin: center;
        }

        100% {
            top: 20px;
            transform: rotate(90deg);
        }
    }
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
    const middle = useSelector((state: RootState) => state.picking.middleStage);
    const dispatch = useDispatch();
    return (
        <BotWrap>
            <ReturnSodaBx>
                <ReturnIn>
                    <ReturnSodaBtn onClick={() => dispatch(bringSoda())}>PUSH</ReturnSodaBtn>
                    {
                        /* <SodaCan> */
                        middle.map((soda: sodaType, idx) => {
                            const { product, color, location } = soda;
                            return (
                                <SodaCan key={idx} location={location}>
                                    <Can product={product} color={color} />
                                </SodaCan>
                            );
                        })
                    }
                </ReturnIn>
            </ReturnSodaBx>
            <ReturnCoin remain={remain}>
                <ReturnCoinBtn onClick={() => dispatch(bringCoin())}>COIN</ReturnCoinBtn>
            </ReturnCoin>
        </BotWrap>
    );
}

export default BotReturn;
