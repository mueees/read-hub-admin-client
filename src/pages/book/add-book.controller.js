function AddBookController($scope) {
    $scope.addBookConfiguration = {
        onSave: function () {
            console.log('saved');
        }
    };
}

export default AddBookController;