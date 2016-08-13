function ListBookController($scope, readBookManager) {
    $scope.listBookConfiguration = {
        books: []
    };

    readBookManager.getAll().then(function (books) {
        $scope.listBookConfiguration.books = books.plain();
    });
}

ListBookController.$inject = ['$scope', 'readBookManager'];

export default ListBookController;