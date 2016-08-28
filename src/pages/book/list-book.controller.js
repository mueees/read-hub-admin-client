function ListBookController($scope, readBookManager, READ_BOOK) {
    let books = [];

    $scope.listBookConfiguration = {
        books: books
    };

    readBookManager.getAll().then(function (bookResources) {
        books = bookResources.plain();

        books.sort(function(a, b){return a.createDate < b.createDate});

        filterBooks();
    });

    $scope.filterBookConfiguration = {
        filter: {}
    };

    $scope.$watch('filterBookConfiguration.filter', filterBooks, true);

    function filterBooks() {
        // books result after filtering
        let filteredBooks = [];

        if (!_($scope.filterBookConfiguration.filter).values().compact().value().length) {
            // no filter were checked
            filteredBooks = books;
        } else {
            _.each(books, function (book) {
                let addToFilteredBook = true;

                _.each($scope.filterBookConfiguration.filter, function (filterValue, filterKey) {
                    // check only checked value
                    if (filterValue && addToFilteredBook) {
                        // is continue to itterate throw filter values for certaine book
                        let isContinue = true;

                        switch (filterKey) {
                            case 'cover':
                                if (!_.isEmpty(book.covers)) {
                                    addToFilteredBook = false;
                                    isContinue = false;
                                }

                                break;

                            default:
                                if (book[filterKey]) {
                                    addToFilteredBook = false;
                                    isContinue = false;
                                }

                                break;
                        }

                        return isContinue;
                    }
                });

                if (addToFilteredBook) {
                    filteredBooks.push(book);
                }
            });
        }

        $scope.listBookConfiguration.books = filteredBooks;
    }
}

ListBookController.$inject = ['$scope', 'readBookManager', 'READ_BOOK'];

export default ListBookController;