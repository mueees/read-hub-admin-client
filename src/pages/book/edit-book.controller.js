function EditBookController(readBookManager, $stateParams, $scope, $state) {
    readBookManager.get($stateParams.id).then(function (book) {
        $scope.editorBookConfiguration.book = book.plain();
    });

    $scope.editorBookConfiguration = {
        onSave: function () {
            $state.go('read.book.list');
        }
    };
}

EditBookController.$inject = ['readBookManager', '$stateParams', '$scope', '$state'];

export default EditBookController;