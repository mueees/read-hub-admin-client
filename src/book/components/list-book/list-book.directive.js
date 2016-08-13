function ListBook() {
    return {
        restrict: 'E',
        template: require('./list-book.html'),
        
        scope: {
            readConfiguration: '='
        }
    }
}

export default ListBook;