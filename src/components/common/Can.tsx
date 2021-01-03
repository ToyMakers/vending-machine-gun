import React from 'react';
import styled from 'styled-components';

const NoNameCan = styled.div<{
    basicColor: string;
    gradient1: string;
    gradient2: string;
    gradient3: string;
}>`
    position: relative;
    width: 50px;
    height: 80px;
    margin: 0 auto;
    background-color: tomato;
    overflow: hidden;

    ${({ basicColor, gradient1, gradient2, gradient3 }) =>
        `background:${basicColor} linear-gradient(90deg, ${gradient1} 20%, ${gradient2}, rgba(255,255,255,0.5), ${gradient3})`};
`;

const DrinkLabel = styled.span`
    position: absolute;
    top: 50%;
    left: 30%;
    padding: 5px 100px;
    border-top: 2px solid #999;
    border-bottom: 2px solid #999;
    color: #fff;
    font-family: 'Fugaz One', cursive;
    -webkit-text-stroke: 1px #999;
    transform: rotate(30deg) translateY(-50%) translateX(-50%);
    transform-origin: left;
    opacity: 0.7;
`;

export interface propsType {
    product?: string;
    color: string[];
}

function Can({ product, color }: propsType) {
    console.log(product, color);
    return (
        <NoNameCan
            basicColor={color[0]}
            gradient1={color[1]}
            gradient2={color[2]}
            gradient3={color[3]}
        >
            <DrinkLabel>{product}</DrinkLabel>
        </NoNameCan>
    );
}

export default Can;

Can.defaultProps = {
    product: 'cider',
    color: ['#000', '#000', '#000', '#000'],
};
