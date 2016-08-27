function AddBookController($q, readCategoryManager, readTagManager, $scope, $state) {
    $q.all({
        tags: readTagManager.getAll(),
        categories: readCategoryManager.getAll()
    }).then(function (results) {
        $scope.editorBookConfiguration.categories = results.categories.plain();
        $scope.editorBookConfiguration.tags = results.tags.plain();
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

AddBookController.$inject = ['$q', 'readCategoryManager', 'readTagManager', '$scope', '$state'];

export default AddBookController;