import React from 'react';
import styled from 'styled-components';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { CoinType } from '../../constants/ItemTypes';

const CoinShape = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    margin: 0 auto;
    border: 3px solid #777;
    border-top: 3px solid #aaa;
    border-right: 3px solid #999;
    border-radius: 50%;

    color: #555;
    font-weight: 700;
    font-size: 0.9rem;

    transform: translate(0, 0);
    background-color: gray;
    box-shadow: -1px 1px 3px 2px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    user-select: none;
    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        height: 120%;
        background-color: #aaa;
        transform: rotate(-40deg);
        opacity: 0.3;
    }
    &::before {
        top: -10px;
        right: 20px;
        width: 20%;
    }
    &::after {
        top: -10px;
        right: 5px;
        width: 10%;
    }
`;

type CoinProps = {
    amount: number;
};

function Coin({ amount }: CoinProps) {
    const [{ isDragging }, drag] = useDrag({
        item: { amount, type: CoinType.COIN },
        begin: () => {
            console.log(`${amount} drag start`);
        },
        end: (item: { amount: number } | undefined, monitor: DragSourceMonitor) => {
            const dropResult: unknown = monitor.getDropResult();
            if (item && dropResult) {
                console.log(item);
            }
            console.log(`${amount} drag end`);
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    return <CoinShape ref={drag}>{amount}</CoinShape>;
}

export default Coin;
