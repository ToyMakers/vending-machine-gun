import React from 'react';
import styled from 'styled-components';

const RadiatorWrap = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
`;

const Vent = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    border-radius: 50% 50% 0 0;
    background-color: #666;
    overflow: hidden;
`;

const VentFan = styled.div`
    width: 20%;
    &:not(:last-of-type) {
        margin-right: 5px;
    }
`;

const VentLittleFan = styled.div`
    width: 100%;
    height: 5px;
    background-color: #333;

    &:nth-of-type(2) {
        margin: 3px 0;
    }
`;

const VentBot = styled.div`
    width: 100%;
    height: 4px;
    background-color: #666;
`;

function Radiator() {
    return (
        <RadiatorWrap>
            <Vent>
                <VentFan>
                    <VentLittleFan />
                    <VentLittleFan />
                    <VentLittleFan />
                </VentFan>
                <VentFan>
                    <VentLittleFan />
                    <VentLittleFan />
                    <VentLittleFan />
                </VentFan>
                <VentFan>
                    <VentLittleFan />
                    <VentLittleFan />
                    <VentLittleFan />
                </VentFan>
                <VentFan>
                    <VentLittleFan />
                    <VentLittleFan />
                    <VentLittleFan />
                </VentFan>
                <VentFan>
                    <VentLittleFan />
                    <VentLittleFan />
                    <VentLittleFan />
                </VentFan>
            </Vent>
            <VentBot />
        </RadiatorWrap>
    );
}

export default Radiator;
