export type Paper = {
    image?: string;
    authors: string[];
    to?: string;
    links?: {
        title: string;
        to: string;
    }[];
    conf?: {
        name: string;
        year?: string;
    };
};

export type PaperMeta = {
    title: string;
};

const Papers: (Paper & PaperMeta)[] = [
    {
        title: 'Language Modeling, Lexical Translation, Reordering: The Training Process of NMT through the Lens of Classical SMT',
        image: '/papers/emnlp21_nmt_training-min.webp',
        authors: [
            // first author always emphasized, if it is necessary to remove emphasis, then the first author must be ''
            'Elena Voita',
            'Rico Sennrich',
            'Ivan Titov',
        ],
        to: 'https://arxiv.org/abs/2109.01396',
        links: [
            {
                title: 'blog',
                to: '/posts/nmt-training-through-smt-lens',
            },
            {
                title: 'paper',
                to: 'https://arxiv.org/abs/2109.01396',
            },
        ],
        conf: {
            name: 'EMNLP',
            year: '2021',
        },
    },
];

export default Papers;
