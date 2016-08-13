function AddBookController($scope) {
    $scope.editorBookConfiguration = {
        onSave: function () {
            console.log('saved');
        }
    };
}

export default AddBookController;