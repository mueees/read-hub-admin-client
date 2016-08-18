function EditorBookDirective(readBookManager, READ_BOOK) {
    return {
        restrict: 'E',
        template: require('./editor-book.html'),

        scope: {
            readConfiguration: '='
        },

        controller: function ($scope) {
            let book = {
                title: '',
                description: '',
                exist: READ_BOOK.defaultExist,
                authors: [],
                categories: [{
                    _id: '123',
                    primary: true
                }],
                tags: [],
                quotes: [],
                promo: '',
                pages: 0,
                language: READ_BOOK.languages.ru.value,
                binding: READ_BOOK.bindings.hard.value,
                owner: READ_BOOK.owners.svitlana.value,
                cover: READ_BOOK.defaultCover
            };

            $scope.book = initializeBook();

            if (!_.isEmpty($scope.book.tags)) {
                _.each($scope.book.tags, function (tagId) {
                    let tag = _.find($scope.readConfiguration.tags, {
                        _id: tagId
                    });

                    tag.selected = true;
                });
            }

            _.assign($scope, {
                isNewBook: !Boolean($scope.book._id),

                bindings: READ_BOOK.bindings,

                languages: READ_BOOK.languages,

                promoLabels: READ_BOOK.promoLabels,

                owners: READ_BOOK.owners,

                editorCategoryConfiguration: {
                    categories: $scope.readConfiguration
                },

                deleteAuthor: function (author) {
                    _.remove($scope.book.authors, {
                        name: author.name
                    });
                },

                deleteQuote: function (quote) {
                    _.remove($scope.book.quotes, {
                        text: quote.text
                    });
                },

                save: function () {
                    let promise;

                    if ($scope.isNewBook) {
                        promise = readBookManager.create($scope.book);
                    } else {
                        promise = readBookManager.save($scope.book);
                    }

                    promise.then(function () {
                        if (_.isFunction($scope.readConfiguration.onSave)) {
                            $scope.readConfiguration.onSave($scope.book);
                        }

                        if ($scope.isNewBook) {
                            resetForm();
                        } else {
                            $scope.addBookForm.$setPristine();
                        }
                    });
                }
            });

            $scope.$watch('readConfiguration.tags|filter:{selected:true}', function (tags) {
                $scope.book.tags = _.map(tags, '_id');
            }, true);

            $scope.$watch('book.quotes', function () {
                let emptyQuotes = _.filter($scope.book.quotes, {
                    text: ''
                });

                if (_.isEmpty(emptyQuotes)) {
                    $scope.book.quotes.push({text: ''});
                } else if (emptyQuotes.length > 1) {
                    _.remove($scope.book.quotes, {
                        text: ''
                    });

                    $scope.book.quotes.push({text: ''});
                }
            }, true);

            $scope.$watch('book.authors', function () {
                let emptyAuthors = _.filter($scope.book.authors, {
                    name: ''
                });

                if (_.isEmpty(emptyAuthors)) {
                    $scope.book.authors.push({name: ''});
                } else if (emptyAuthors.length > 1) {
                    _.remove($scope.book.authors, {
                        name: ''
                    });

                    $scope.book.authors.push({name: ''});
                }
            }, true);

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