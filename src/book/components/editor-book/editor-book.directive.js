function EditorBookDirective(readBookManager, READ_BOOK) {
    return {
        restrict: 'E',
        template: require('./editor-book.html'),

        scope: {
            readConfiguration: '='
        },

        controller: function ($scope) {
            let book = {
                authors: [],
                quotes: []
            };

            $scope.book = initializeBook();

            let isNewBook = !Boolean($scope.book._id);

            _.assign($scope, {
                bindings: READ_BOOK.bindings,
                languages: READ_BOOK.languages,

                addAuthor: function () {
                    $scope.book.authors.push({
                        name: ''
                    });
                },

                deleteAuthor: function (author) {
                    _.remove($scope.book.authors, {
                        name: author.name
                    });
                },

                addQuote: function () {
                    $scope.book.quotes.push({
                        text: ''
                    });
                },

                deleteQuote: function (quote) {
                    _.remove($scope.book.quotes, {
                        text: quote.text
                    });
                },

                save: function () {
                    let promise;

                    if (isNewBook) {
                        promise = readBookManager.create($scope.book);
                    } else {
                        promise = readBookManager.save($scope.book);
                    }

                    promise.then(function () {
                        if (_.isFunction($scope.readConfiguration.onSave)) {
                            $scope.readConfiguration.onSave($scope.book);
                        }

                        if (isNewBook) {
                            resetForm();
                        } else {
                            $scope.addBookForm.$setPristine();
                        }
                    });
                }
            });

            function resetForm() {
                $scope.book = _.cloneDeep(book);
            }

            function initializeBook() {
                return $scope.readConfiguration.book ? _.cloneDeep($scope.readConfiguration.book) : _.cloneDeep(book);
            }
        }
    }
}

EditorBookDirective.$inject = ['readBookManager', 'READ_BOOK'];

export default EditorBookDirective;