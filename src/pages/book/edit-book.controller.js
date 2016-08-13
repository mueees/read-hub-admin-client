function EditBookController(readBookManager, $stateParams, $scope) {
    readBookManager.get($stateParams.id).then(function (book) {
        $scope.editorBookConfiguration.book = book.plain();
    });

    $scope.editorBookConfiguration = {
        onSave: function () {
            console.log('saved');
        }
    };
}

EditBookController.$inject = ['readBookManager', '$stateParams', '$scope'];

export default EditBookController;