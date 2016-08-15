let BOOK = {
    bindings: {
        soft: {
            value: 'soft',
            displayValue: 'Soft cover'
        },
        hard: {
            value: 'hard',
            displayValue: 'Hard cover'
        }
    },

    defaultCover: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',

    languages: {
        en: {
            displayValue: 'English',
            value: 'en'
        },
        ua: {
            displayValue: 'Ukrainian',
            value: 'ua'
        },
        ru: {
            displayValue: 'Russian',
            value: 'ru'
        }
    },

    owners: {
        svitlana: {
            displayValue: 'svitlana',
            value: 'svitlana'
        },
        andrey: {
            displayValue: 'andrey',
            value: 'andrey'
        }
    },

    defaultExist: true,

    promoLabels: [
        'new',
        'promo',
        'bestseller'
    ],

    url: '/read-hub/books'
};

export default BOOK;