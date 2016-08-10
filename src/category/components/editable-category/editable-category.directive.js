function EditableCategoryDirective() {
    return {
        restrict: 'E',
        template: require('./editable-category.html'),

        scope: {
            readConfiguration: '='
        },

        controller: function ($scope) {
            _.assign($scope, {
                state: 'read',

                previewConfiguration: {
                    category: $scope.readConfiguration.category
                },

                switchToEdit: function () {
                    $scope.state = 'edit';
                },

                editConfiguration: {
                    onCancel: function () {
                        $scope.state = 'read';
                    }
                }
            });
        }
    }
}

export default EditableCategoryDirective;