export interface sodaType {
    id: number;
    product: string;
    price: number;
}

const sodaData: Array<sodaType> = [
    {
        id: 1,
        product: 'Demi<br />Soda',
        price: 500,
    },
    {
        id: 2,
        product: 'Sprite',
        price: 700,
    },
    {
        id: 3,
        product: 'Bong<br />Bong',
        price: 650,
    },
    {
        id: 4,
        product: 'Milkis',
        price: 700,
    },
    {
        id: 5,
        product: '2%',
        price: 500,
    },
    {
        id: 6,
        product: 'Mountain<br />Dew',
        price: 800,
    },
    {
        id: 7,
        product: 'Confidence',
        price: 1200,
    },
    {
        id: 8,
        product: 'Power<br />Ade',
        price: 900,
    },
];

export default sodaData;
