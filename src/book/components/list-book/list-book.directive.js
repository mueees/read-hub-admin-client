function ListBook() {
    return {
        restrict: 'E',
        template: require('./list-book.html'),
        
        scope: {
            readConfiguration: '='
        },

        controller: function ($scope) {
            
        }
    }
}

export default ListBook;