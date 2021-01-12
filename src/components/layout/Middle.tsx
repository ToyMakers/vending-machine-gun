import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { CoinType } from '../../constants/ItemTypes';

const MiddleWrap = styled.div`
    display: flex;
    margin-top: 15px;
`;

const BigIconBx = styled.div`
    position: relative;
    width: 50%;
    border-top: 5px solid #185c0a;
    border-left: 5px solid #185c0a;
    border-right: 2px solid #185c0a;
    border-bottom: 1px solid #185c0a;
    border-radius: 10px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
        160deg,
        rgba(255, 255, 255, 1) 20%,
        rgb(34, 125, 15) 40%,
        rgba(20, 117, 0, 1) 60%,
        rgba(255, 255, 255, 1) 80%
    );

    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        background: rgb(255, 255, 255);
        background: linear-gradient(
            160deg,
            rgba(255, 255, 255, 1) 15%,
            rgba(135, 204, 120, 1) 35%,
            rgba(58, 189, 31, 1) 50%,
            rgba(135, 204, 120, 1) 65%,
            rgba(255, 255, 255, 1) 85%
        );
        clip-path: polygon(
            50% 0%,
            67% 26%,
            98% 35%,
            78% 60%,
            79% 91%,
            50% 79%,
            21% 91%,
            22% 60%,
            2% 35%,
            33% 28%
        );
    }

    &::before {
        top: 15px;
        left: 15px;
        width: 20%;
        height: 27%;
        transform: rotate(20deg) skew(353deg);
    }

    &::after {
        bottom: 15px;
        right: 15px;
        width: 14%;
        height: 17%;
        transform: rotate(-40deg) skew(10deg);
    }
`;

const BigIcon = styled.div`
    padding-bottom: 85%;
`;

const IconTxt = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) skew(-10deg) rotate(-20deg);
    color: #fff;
    font-family: 'Righteous', cursive;
    font-size: 2rem;
    text-shadow: 2px 2px 2px #333;
`;

const InsertBx = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 50%;
`;

export const DisplayPrice = styled.div`
    width: 50%;
    height: 50px;
    padding: 5px 10px;
    box-shadow: inset 0 0 10px 3px rgba(255, 255, 255, 0.2), -1px 1px 5px 2px rgba(24, 24, 24, 0.5);
    background-color: #222;
`;

const PanMaeing = styled.span`
    text-align: left;
    text-shadow: 0 0 5px #d67a60;
    font-size: 0.7rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    color: #f77757;
`;

const Price = styled.strong`
    display: block;
    text-align: right;
    text-shadow: 0 0 3px #d67a60;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.95rem;
    color: #f77757;
    & span {
        font-family: 'Righteous', cursive;
        font-size: 1rem;
    }
`;

const CoinIo = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    padding-top: 20px;
`;

const ReturnBx = styled.div``;
const ReturnLabel = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 0.7rem;
`;
const ReturnBtn = styled.button`
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    margin-top: 5px;
    border-radius: 50%;
    background-color: #f77757;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    box-shadow: -1px 1px 5px 2px rgba(24, 24, 24, 0.5);
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: linear-gradient(225deg, #ff7f5d, #de6b4e);
        box-shadow: -3px 3px 5px #944734, 3px -3px 5px #ffa77a;
        transform: translate(-50%, -50%);
    }
    &:active::after {
        background: #f77757;
        box-shadow: inset -4px 4px 8px #d2654a, inset 4px -4px 8px #ff8964;
    }
`;

const Slot = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    margin-top: 20px;
    border: 4px solid #f77757;
    border-left: 4px solid #d2654a;
    border-bottom: 4px solid #c3715c;
    border-radius: 50%;
    background-color: gray;
    background-image: linear-gradient(75deg, #676767, #5a5a5a 45%, transparent 55%),
        linear-gradient(45deg, #5a5a5a 45%, rgba(255, 255, 255, 0.3), transparent 55%);
    box-shadow: -1px 1px 5px 2px rgba(24, 24, 24, 0.5);
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3px;
        height: 20px;
        background-color: #333;
        transform: translate(-50%, -50%);
    }
`;

function Middle() {
    const [{ isOver }, drop] = useDrop({
        accept: CoinType.COIN,
        drop: () => ({ name: '!' }),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });
    return (
        <MiddleWrap>
            <BigIconBx>
                <BigIcon>
                    <IconTxt>
                        Chilsung
                        <br />
                        Cider
                    </IconTxt>
                </BigIcon>
            </BigIconBx>
            <InsertBx>
                <DisplayPrice>
                    <PanMaeing>판매중</PanMaeing>
                    <Price>
                        <span>{2000}</span>원
                    </Price>
                </DisplayPrice>
                <CoinIo>
                    <ReturnBx>
                        <ReturnLabel>RETURN</ReturnLabel>
                        <ReturnBtn />
                    </ReturnBx>
                    <Slot ref={drop} />
                </CoinIo>
            </InsertBx>
        </MiddleWrap>
    );
}

export default Middle;
