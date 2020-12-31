import React from 'react';
import styled from 'styled-components';
import Can from './Can';
import sodaData, { sodaType } from '../../asset/brand';

const SodaList = styled.ul`
    display: flex;
    padding-top: 20px;
`;

const SodaItem = styled.li`
    width: 25%;
`;

type sodaListType = {
    soda: number;
};

function CanList({ soda }: sodaListType) {
    const firstLine: Array<sodaType> = sodaData.filter((val) => val.id <= 4);
    const secondLine: Array<sodaType> = sodaData.filter((val) => val.id > 4);
    console.log(firstLine, secondLine);
    return (
        <SodaList>
            {soda === 1
                ? firstLine.map((val) => {
                      const { id, product, price } = val;
                      return (
                          <SodaItem key={id}>
                              <Can product={product} price={price} />
                          </SodaItem>
                      );
                  })
                : secondLine.map((val) => {
                      const { id, product, price } = val;
                      return (
                          <SodaItem key={id}>
                              <Can product={product} price={price} />
                          </SodaItem>
                      );
                  })}
        </SodaList>
    );
}

export default CanList;
