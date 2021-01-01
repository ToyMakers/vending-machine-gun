import React from 'react';
import styled, { css } from 'styled-components';
import Can from './Can';
import sodaData, { sodaType } from '../../asset/brand';

const SodaList = styled.ul<{ soda: number }>`
    display: flex;
    padding-top: 20px;
    background-color: #165022;
    ${({ soda }) =>
        soda === 1
            ? css`
                  border-radius: 10px 10px 0 0;
              `
            : css`
                  border-radius: 0 0 10px 10px;
              `}
`;

const SodaItem = styled.li`
    width: 25%;
`;

const SodaPriceTag = styled.div``;

type sodaListType = {
    soda: number;
};

function CanList({ soda }: sodaListType) {
    const firstLine: Array<sodaType> = sodaData.filter((val) => val.id <= 4);
    const secondLine: Array<sodaType> = sodaData.filter((val) => val.id > 4);
    console.log(firstLine, secondLine);
    return (
        <SodaList soda={soda}>
            {soda === 1
                ? firstLine.map((val) => {
                      const { id, product, price, color } = val;
                      return (
                          <SodaItem key={id}>
                              <Can product={product} color={color} />
                              <SodaPriceTag>{price}</SodaPriceTag>
                          </SodaItem>
                      );
                  })
                : secondLine.map((val) => {
                      const { id, product, price, color } = val;
                      return (
                          <SodaItem key={id}>
                              <Can product={product} color={color} />
                          </SodaItem>
                      );
                  })}
        </SodaList>
    );
}

export default CanList;
