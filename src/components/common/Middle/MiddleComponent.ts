import styled from 'styled-components';

export const DisplayPriceWrap = styled.div`
    width: 50%;
    height: 50px;
    padding: 5px 10px;
    box-shadow: inset 0 0 10px 3px rgba(255, 255, 255, 0.2), -1px 1px 5px 2px rgba(24, 24, 24, 0.5);
    background-color: #222;
`;

export const PanMaeing = styled.span`
    text-align: left;
    text-shadow: 0 0 5px #d67a60;
    font-size: 0.7rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    color: #f77757;
`;

export const Price = styled.strong`
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
