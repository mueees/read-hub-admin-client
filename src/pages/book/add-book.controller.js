function AddBookController($q, readCategoryManager, readTagManager, readBookManager, $scope, $state) {
    $q.all({
        books: readBookManager.getAll(),
        tags: readTagManager.getAll(),
        categories: readCategoryManager.getAll()
    }).then(function (results) {
        $scope.editorBookConfiguration.categories = results.categories.plain();
        $scope.editorBookConfiguration.tags = results.tags.plain();
        $scope.editorBookConfiguration.books = results.books.plain();
    });

    $scope.editorBookConfiguration = {
        onSave: function () {
            $state.go('read.book.list');
        },

        onDelete: function () {
            $state.go('read.book.list');
        }
    };
}

AddBookController.$inject = ['$q', 'readCategoryManager', 'readTagManager', 'readBookManager', '$scope', '$state'];

export default AddBookController;