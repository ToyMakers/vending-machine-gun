const COIN_INCREASE = 'calc/COIN_INCREASE' as const;
const PERCHASE = 'calc/PERCHASE' as const;
const RETURN_COIN = 'calc/RETURN_COIN' as const;
const BRING_COIN = 'calc/BRING_COIN' as const;

export const coinIncrease = (amount: number) => ({ type: COIN_INCREASE, payload: amount });
export const perchase = (amount: number, remain: number) => ({
    type: PERCHASE,
    payload: { amount, remain },
});
export const returnCoin = () => ({ type: RETURN_COIN });
export const bringCoin = () => ({ type: BRING_COIN });

type CoinAction =
    | ReturnType<typeof coinIncrease>
    | ReturnType<typeof perchase>
    | ReturnType<typeof bringCoin>
    | ReturnType<typeof returnCoin>;

type CoinProps = {
    machineCoin: number;
    walletCoin: number;
    remainCoin: number;
    remainStatus: boolean;
};

const initialState: CoinProps = {
    machineCoin: 0,
    walletCoin: 12000,
    remainCoin: 0,
    remainStatus: false,
};

function calc(state: CoinProps = initialState, action: CoinAction): CoinProps {
    switch (action.type) {
        case COIN_INCREASE:
            console.log(action.payload);
            if (state.walletCoin < action.payload) return state;
            return {
                ...state,
                machineCoin: state.machineCoin + action.payload,
                walletCoin: state.walletCoin - action.payload,
            };
        case RETURN_COIN:
            return {
                ...state,
                machineCoin: 0,
                remainCoin: state.remainCoin + state.machineCoin,
                remainStatus: true,
            };
        case BRING_COIN:
            return {
                ...state,
                walletCoin: state.walletCoin + state.remainCoin,
                remainCoin: 0,
                remainStatus: false,
            };
        case PERCHASE:
            return {
                ...state,
                machineCoin:
                    state.machineCoin >= action.payload.amount && action.payload.remain > 0
                        ? state.machineCoin - action.payload.amount
                        : state.machineCoin,
            };
        default:
            return state;
    }
}

export default calc;
