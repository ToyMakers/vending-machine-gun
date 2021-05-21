import styled from 'styled-components';

export const DisplayPriceWrap = styled.div`
    max-width: 110px;
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

export const CoinIo = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    padding-top: 20px;
`;

export const ReturnBx = styled.div`
    display: block;
`;
export const ReturnLabel = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 0.7rem;
`;
export const ReturnBtn = styled.button`
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

export const Slot = styled.div`
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
