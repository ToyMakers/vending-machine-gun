export interface sodaType {
    id: number;
    product: string;
    price: number;
    color: string[];
}

const sodaData: Array<sodaType> = [
    {
        id: 1,
        product: 'Demi\nSoda',
        price: 500,
        color: ['#92c12e', '#175318', '#50933c', '#1f7a14'],
    },
    {
        id: 2,
        product: 'Sprite',
        price: 700,
        color: ['#28b47d', '#156142', '#28b474', '#15613e'],
    },
    {
        id: 3,
        product: 'Bong\nBong',
        price: 650,
        color: ['#f4ffab', '#615c15', '#b4a328', '#646615'],
    },
    {
        id: 4,
        product: 'Milkis',
        price: 700,
        color: ['#2883b4', '#1a5b7c', '#288db4', '#155661'],
    },
    {
        id: 5,
        product: '2%',
        price: 500,
        color: ['#f668a6', '#852a60', '#f868b1', '#a32665'],
    },
    {
        id: 6,
        product: 'Mountain\nDew',
        price: 800,
        color: ['#be5fe1', '#490b5b', '#8435a5', '#4a115b'],
    },
    {
        id: 7,
        product: 'Confidence',
        price: 1200,
        color: ['#e1985f', '#783b0d', '#f46815', '#a13c0b'],
    },
    {
        id: 8,
        product: 'Power\nAde',
        price: 900,
        color: ['#765fe1', '#0d2378', '#154ff4', '#0f2c82'],
    },
];

export default sodaData;
