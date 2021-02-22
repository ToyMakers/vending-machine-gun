/* eslint-disable no-case-declarations */
import sodaData, { sodaType } from '../asset/brand';

const PICK = 'picking/PICK' as const;

export const pick = (number: number, money: number) => ({
    type: PICK,
    payload: {
        selectNumber: number,
        money,
    },
});

type sodaAction = ReturnType<typeof pick>;

interface soda {
    demisoda: sodaType;
    sprite: sodaType;
    bongbong: sodaType;
    milkis: sodaType;
    twopercent: sodaType;
    mountaindew: sodaType;
    confidence: sodaType;
    powerade: sodaType;
}

const initialState: soda = {
    demisoda: sodaData[0],
    sprite: sodaData[1],
    bongbong: sodaData[2],
    milkis: sodaData[3],
    twopercent: sodaData[4],
    mountaindew: sodaData[5],
    confidence: sodaData[6],
    powerade: sodaData[7],
};

function picking(state: soda = initialState, action: sodaAction): soda {
    switch (action.type) {
        case PICK:
            const filteringSoda = sodaData.filter(
                (item) => item.id === action.payload.selectNumber + 1
            );
            const selectSoda = filteringSoda[0];
            const { label, remaining, price } = selectSoda;
            const { money } = action.payload;
            return {
                ...state,
                [label]: {
                    ...selectSoda,
                    remaining: remaining > 0 && money > price ? --selectSoda.remaining : remaining,
                },
            };
        default:
            return state;
    }
}

export default picking;
