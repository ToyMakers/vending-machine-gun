export interface sodaType {
    id: number;
    label: string;
    product: string;
    price: number;
    remaining: number;
    color: string[];
}

const sodaData: Array<sodaType> = [
    {
        id: 1,
        label: 'demisoda',
        product: 'Demi\nSoda',
        price: 500,
        remaining: 3,
        color: ['#92c12e', '#175318', '#50933c', '#1f7a14'],
    },
    {
        id: 2,
        label: 'sprite',
        product: 'Sprite',
        price: 700,
        remaining: 4,
        color: ['#28b47d', '#156142', '#28b474', '#15613e'],
    },
    {
        id: 3,
        label: 'bongbong',
        product: 'Bong\nBong',
        price: 650,
        remaining: 2,
        color: ['#f4ffab', '#615c15', '#b4a328', '#646615'],
    },
    {
        id: 4,
        label: 'milkis',
        product: 'Milkis',
        price: 700,
        remaining: 3,
        color: ['#2883b4', '#1a5b7c', '#288db4', '#155661'],
    },
    {
        id: 5,
        label: 'twopercent',
        product: '2%',
        price: 500,
        remaining: 2,
        color: ['#f668a6', '#852a60', '#f868b1', '#a32665'],
    },
    {
        id: 6,
        label: 'mountaindew',
        product: 'Mountain\nDew',
        price: 800,
        remaining: 4,
        color: ['#be5fe1', '#490b5b', '#8435a5', '#4a115b'],
    },
    {
        id: 7,
        label: 'confidence',
        product: 'Confidence',
        price: 1200,
        remaining: 3,
        color: ['#e1985f', '#783b0d', '#f46815', '#a13c0b'],
    },
    {
        id: 8,
        label: 'powerade',
        product: 'Power\nAde',
        price: 900,
        remaining: 4,
        color: ['#765fe1', '#0d2378', '#154ff4', '#0f2c82'],
    },
];

export default sodaData;
