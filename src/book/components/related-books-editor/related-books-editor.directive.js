function RelatedBooksEditor() {
    return {
        restrict: 'E',
        tempalte: require('./related-books-editor.directive.html'),

        require: ['^form', 'ngModel'],

        link: function ($scope) {
            
        }
    }
}

export default RelatedBooksEditor;