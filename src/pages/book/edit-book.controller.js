function EditBookController($q, readBookManager, readCategoryManager, readTagManager, $stateParams, $scope, $state) {

    $q.all({
        books: readBookManager.getAll(),
        book: readBookManager.get($stateParams.id),
        tags: readTagManager.getAll(),
        categories: readCategoryManager.getAll()
    }).then(function (results) {
        $scope.editorBookConfiguration.categories = results.categories.plain();
        $scope.editorBookConfiguration.tags = results.tags.plain();
        $scope.editorBookConfiguration.book = results.book.plain();
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

EditBookController.$inject = ['$q', 'readBookManager', 'readCategoryManager', 'readTagManager', '$stateParams', '$scope', '$state'];

export default EditBookController;