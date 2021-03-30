import React from 'react';
import styled, { css } from 'styled-components';
import Can from './Can';
import sodaData, { sodaType } from '../../asset/brand';
import { useDispatch, useSelector } from 'react-redux';
import { pick } from '../../modules/picking';
import { RootState } from '../../modules';
import { perchase } from '../../modules/calc';

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
    overflow:hidden;
`;

const SodaItem = styled.li`
    width: 25%;
`;

const SodaPriceBx = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px 0;
    background-color: #207532;
`;

const SodaPriceTag = styled.div`
    width: 50px;
    margin: 3px 0;
    padding: 3px 0;
    background-color: #eee;
    font-family: 'Righteous', cursive;
    font-size: 0.8rem;
    text-align: center;
`;

export const SodaBuyBtn = styled.button`
    display: block;
    width: 50px;
    padding: 5px 0;
    margin: 3px auto 0;
    border-radius: 5px 5px 50% 50%;
    background-color: #333;
    outline: none;
    cursor: pointer;
    user-select: none;

    &:active {
        transform: scale(0.95);
    }
`;

export const SoldOut = styled.span<{ soldOut: boolean }>`
    color: ${({ soldOut }) => (soldOut ? '#e03131' : '#555')};
    font-family: 'Righteous', cursive;
    font-size: 0.6rem;
    font-weight: bold;
`;

export const BuyPossible = styled.div<{ possible: boolean }>`
    position: relative;
    width: 35px;
    height: 10px;
    margin: 0 auto;
    border-radius: 10px 10px 20px 20px;
    ${({ possible }) =>
        possible
            ? css`
                  background-color: #94d82d;
                  box-shadow: 0px 0px 20px #d8f5a2;
              `
            : css`
                  background-color: #666;
              `}

    &::after {
        content: '';
        position: absolute;
        top: 2px;
        right: 4px;
        width: 7px;
        height: 5px;
        border-radius: 50%;
        ${({ possible }) =>
            possible
                ? css`
                      background-color: #c0eb75;
                  `
                : css`
                      background-color: #aaa;
                  `}
        transform: rotate(30deg);
    }
`;

type sodaListType = {
    soda: number;
};

function CanList({ soda }: sodaListType) {
    const machineCoin: number = useSelector((state: RootState) => state.calc.machineCoin);
    const picking = useSelector((state: RootState) => state.picking.soda);
    const dispatch = useDispatch();
    const firstLine: Array<sodaType> = sodaData.filter((val) => val.id <= 4);
    const secondLine: Array<sodaType> = sodaData.filter((val) => val.id > 4);
    return (
        <SodaList soda={soda}>
            {soda === 1
                ? firstLine.map((val: sodaType) => {
                      const { id, label, product, price, remaining, color } = val;
                      const remainArray = Object.values(picking);
                      const filteredSoda = remainArray.some(
                          (item: sodaType): boolean => item.label === label
                      );
                      return (
                          <SodaItem key={id}>
                              <Can product={product} color={color} />
                              <SodaPriceBx>
                                  <SodaPriceTag>{price}</SodaPriceTag>
                                  <SodaBuyBtn
                                      onClick={() => {
                                          dispatch(pick(id, machineCoin));
                                          dispatch(perchase(price, remaining));
                                      }}
                                  >
                                      <BuyPossible possible={machineCoin >= price ? true : false} />
                                      <SoldOut
                                          soldOut={filteredSoda && remaining > 0 ? false : true}
                                      >
                                          Sold Out
                                      </SoldOut>
                                  </SodaBuyBtn>
                              </SodaPriceBx>
                          </SodaItem>
                      );
                  })
                : secondLine.map((val: sodaType) => {
                      const { id, label, product, price, remaining, color } = val;
                      const remainArray = Object.values(picking);
                      const filteredSoda = remainArray.some(
                          (item: sodaType): boolean => item.label === label
                      );
                      return (
                          <SodaItem key={id}>
                              <Can product={product} color={color} />
                              <SodaPriceBx>
                                  <SodaPriceTag>{price}</SodaPriceTag>
                                  <SodaBuyBtn
                                      onClick={() => {
                                          dispatch(pick(id, machineCoin));
                                          dispatch(perchase(price, remaining));
                                      }}
                                  >
                                      <BuyPossible possible={machineCoin >= price ? true : false} />
                                      <SoldOut
                                          soldOut={filteredSoda && remaining > 0 ? false : true}
                                      >
                                          Sold Out
                                      </SoldOut>
                                  </SodaBuyBtn>
                              </SodaPriceBx>
                          </SodaItem>
                      );
                  })}
        </SodaList>
    );
}

export default CanList;
