import React from 'react';
import styled from 'styled-components';
import MachineBx from './components/layout/MachineBx';
import WalletBasket from './components/layout/WalletBasket/WalletBasket';

const AppWrap = styled.div`
    display: flex;
    width: 850px;
    margin: 100px auto 0;
`;

function App() {
    return (
        <AppWrap>
            <MachineBx />
            <WalletBasket />
        </AppWrap>
    );
}

export default App;
