function FilterBook(READ_BOOK) {
    return {
        restrict: 'E',
        template: require('./filter-book.html'),

        scope: {
            readConfiguration: '='
        }
    }
}

FilterBook.$inject = ['READ_BOOK'];

export default FilterBook;