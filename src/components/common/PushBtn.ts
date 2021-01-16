import styled from 'styled-components';

const PushBtn = styled.button`
    width: 100%;
    height: 100%;
    border: 1px solid #222;

    font-size: 1.3rem;
    font-weight: 700;
    font-family: 'Noto Sans KR', sans-serif;
    color: rgba(255, 255, 255, 0.3);

    background-color: transparent;
    background-image: linear-gradient(13deg, transparent, rgba(128, 128, 128, 0.5) 50%);
    transform-style: preserve-3d;
    transform-origin: 50% 0;
    transform: rotateX(0);
    transition: transform 0.3s;
    cursor: pointer;
    &:hover {
        transform: rotateX(-10deg);
    }
`;

export default PushBtn;
