/* eslint-disable no-case-declarations */
import sodaData, { sodaType } from '../asset/brand';

const PICK = 'picking/PICK' as const;
const BRING_SODA = 'picking/BRING_SODA' as const;

export const pick = (number: number, money: number) => ({
    type: PICK,
    payload: {
        selectNumber: number,
        money,
    },
});

export const bringSoda = () => ({ type: BRING_SODA });

type sodaAction = ReturnType<typeof pick> | ReturnType<typeof bringSoda>;

type soda = {
    demisoda: sodaType;
    sprite: sodaType;
    bongbong: sodaType;
    milkis: sodaType;
    twopercent: sodaType;
    mountaindew: sodaType;
    confidence: sodaType;
    powerade: sodaType;
};

type sodaState = {
    soda: soda;
    middleStage: sodaType[];
    basket: sodaType[];
};

const initialState: sodaState = {
    soda: {
        demisoda: sodaData[0],
        sprite: sodaData[1],
        bongbong: sodaData[2],
        milkis: sodaData[3],
        twopercent: sodaData[4],
        mountaindew: sodaData[5],
        confidence: sodaData[6],
        powerade: sodaData[7],
    },
    middleStage: [],
    basket: [],
};

function picking(state: sodaState = initialState, action: sodaAction): sodaState {
    switch (action.type) {
        case PICK:
            const filteringSoda = sodaData.filter(
                (item) => item.id === action.payload.selectNumber
            );
            const selectSoda = filteringSoda[0];
            const { label, remaining, price } = selectSoda;
            const { money } = action.payload;
            return {
                ...state,
                soda: {
                    ...state.soda,
                    [label]: {
                        ...selectSoda,
                        remaining:
                            remaining > 0 && money > price ? --selectSoda.remaining : remaining,
                    },
                },
                middleStage:
                    remaining > 0 && money > price
                        ? state.middleStage.concat(selectSoda)
                        : state.middleStage,
            };
        case BRING_SODA:
            return {
                ...state,
                middleStage: [],
                basket: state.basket.concat(state.middleStage), //concat
            };
        default:
            return state;
    }
}

export default picking;
