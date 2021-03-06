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

    defaultCoverUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',

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

    availabilities: [
        {
            displayValue: 'Absent',
            value: 'absent'
        },
        {
            displayValue: 'Available',
            value: 'available'
        },
        {
            displayValue: 'Booked',
            value: 'booked'
        }
    ],

    defaultAvailability: 'available',

    promoLabels: [
        'new',
        'promo',
        'bestseller'
    ],

    url: '/read-hub/books'
};

export default BOOK;