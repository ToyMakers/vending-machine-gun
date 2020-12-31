import React from 'react';
import styled from 'styled-components';

const NoNameCan = styled.div`
    width: 50px;
    height: 80px;
    margin: 0 auto;
    background-color: tomato;
`;

type propsType = {
    product: string;
    price: number;
};

function Can({ product, price }: propsType) {
    console.log(product, price);
    return <NoNameCan />;
}

export default Can;
