import base from './base';
import links from './links';
import papers from './papers';

export default {
    links,
    base,
    papers,
    header: {
        logo: {
            to: '/',
            title: 'Lena Voita',
        },
        links: [
            {
                to: '/posts',
                title: 'Blog',
            },
            {
                to: '/papers',
                title: 'Publications',
            },
            {
                to: '/talks',
                title: 'Talks & Service',
            },
            {
                to: '/nlp-course',
                title: 'NLP Course | For You',
            },
        ],
    },
    footer: {
        right: `Last updated by `,
        icons: [
            {
                to: links.uvaUrlLena,
                icon: '/img/icons/test.jpg',
            },
            {
                to: `mailto:${base.email}`,
                icon: '',
            },
            {
                to: `https://scholar.google.com/citations?user=${base.scholarId}`,
                icon: '',
            },
            {
                to: `https://github.com/${base.github}`,
                icon: '',
            },
            {
                to: `https://twitter.com/${base.twitter}`,
                icon: '',
            },
        ],
    },
};
