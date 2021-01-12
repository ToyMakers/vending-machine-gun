import React from 'react';
import styled from 'styled-components';
import { WalletBasketTitle } from '../../common/WalletBasketTitle';
import Coin from '../../common/Coin';

const WalletWrap = styled.div`
    width: 100%;
`;

const WalletTitle = styled(WalletBasketTitle)`
    color: #adb5bd;
`;

const CoinWallet = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background-color: #ced4da;
    overflow: hidden;
`;

const CoinList = styled.ul`
    display: flex;
    height: 80%;
    padding: 0 10px;
`;

const CoinItem = styled.li`
    display: flex;
    align-items: center;
    width: 25%;
`;

const CoinAmount = styled.p`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 20%;
    padding: 0 10px;

    font-weight: 500;
    font-size: 1.15rem;
    color: #555;

    background-color: #ccc;
`;

function Wallet() {
    return (
        <WalletWrap>
            <WalletTitle>WALLET</WalletTitle>
            <CoinWallet>
                <CoinList>
                    <CoinItem>
                        <Coin amount={50} />
                    </CoinItem>
                    <CoinItem>
                        <Coin amount={100} />
                    </CoinItem>
                    <CoinItem>
                        <Coin amount={500} />
                    </CoinItem>
                    <CoinItem>
                        <Coin amount={1000} />
                    </CoinItem>
                </CoinList>
                <CoinAmount>{12000} Won</CoinAmount>
            </CoinWallet>
        </WalletWrap>
    );
}

export default Wallet;
