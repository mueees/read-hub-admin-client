function ListBookController($scope, readBookManager, READ_BOOK) {
    let books = [];

    $scope.listBookConfiguration = {
        books: books
    };

    readBookManager.getAll().then(function (bookResources) {
        books = bookResources.plain();

        filterBooks();
    });

    $scope.filterBookConfiguration = {
        filter: {}
    };

    $scope.$watch('filterBookConfiguration.filter', function () {
        filterBooks();
    }, true);

    function filterBooks() {
        let filteredBooks = [];

        if (!_($scope.filterBookConfiguration.filter).values().compact().value().length) {
            filteredBooks = books;
        } else {
            _.each(books, function (book) {
                let addToFilter = true;

                _.each($scope.filterBookConfiguration.filter, function (filterValue, filterKey) {
                    if (filterValue && addToFilter) {
                        let isContinue = true;

                        switch (filterKey) {
                            case filterKey === 'cover':
                                if (book.cover !== READ_BOOK.defaultCover) {
                                    addToFilter = false;
                                    isContinue = false;
                                }

                                break;

                            default:
                                if (book[filterKey]) {
                                    addToFilter = false;
                                    isContinue = false;
                                }

                                break;
                        }

                        return isContinue;
                    }
                });
            });
        }

        $scope.listBookConfiguration.books = filteredBooks;
    }
}

ListBookController.$inject = ['$scope', 'readBookManager', 'READ_BOOK'];

export default ListBookController;