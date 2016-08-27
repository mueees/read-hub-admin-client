function RelatedBooksEditor() {
    return {
        restrict: 'E',
        template: require('./related-books-editor.directive.html'),

        require: ['^form', 'ngModel'],

        scope: {
            readConfiguration: '='
        },

        link: function ($scope, $element, attrs, controllers) {
            $scope.form = controllers[0];

            let ngModel = controllers[1];

            /*
             * ngModelController cycle
             * http://radify.io/blog/understanding-ngmodelcontroller-by-example-part-1/ng-model-controller-flow.png
             * */

            /*
             * Array of functions to execute, as a pipeline,
             * whenever the model value changes
             *
             * Should return $viewValue
             * */
            ngModel.$formatters.push(function (modelValue) {
                _.each(modelValue, function (bookId) {
                    let book = _.find($scope.readConfiguration.books, function (book) {
                        return book._id === bookId;
                    });

                    if (book) {
                        $scope.selectedBooks.push(book);
                    }
                });
            });

            $scope.localSearch = function (request) {
                return _.filter($scope.readConfiguration.books, function (book) {
                    return _.includes(book.title, request) && !_.find($scope.selectedBooks, {_id: book._id}) &&
                        book._id !== $scope.readConfiguration.currentBookId;
                });

            };

            $scope.selectedBook = null;

            $scope.selectedBooks = [];

            $scope.removeBook = function (book) {
                _.remove($scope.selectedBooks, {
                    _id: book._id
                });
            };

            $scope.$watchCollection('selectedBooks', function () {
                ngModel.$setViewValue(_.map($scope.selectedBooks, '_id'));
            });

            $scope.$watch('selectedBook', function () {
                if (_.get($scope, 'selectedBook.originalObject')) {
                    $scope.selectedBooks.push($scope.selectedBook.originalObject);

                    $scope.selectedBook = null;
                }
            }, true);
        }
    }
}

export default RelatedBooksEditor;