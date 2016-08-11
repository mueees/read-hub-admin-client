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

                editConfiguration: {
                    category: $scope.readConfiguration.category,
                    categories: $scope.readConfiguration.categories,

                    onCancel: function () {
                        $scope.state = 'read';
                    },

                    onSave: function (savedCategory) {
                        if (_.isFunction($scope.readConfiguration.onSave)) {
                            $scope.readConfiguration.onSave(savedCategory);
                        }

                        $scope.state = 'read';

                        $scope.previewConfiguration.category = savedCategory;
                        $scope.editConfiguration.category = savedCategory;

                        if (_.isFunction($scope.readConfiguration.onSave)) {
                            $scope.readConfiguration.onSave(savedCategory);
                        }
                    },

                    onDelete: function () {
                        if (_.isFunction($scope.readConfiguration.onDelete)) {
                            $scope.readConfiguration.onDelete($scope.readConfiguration.category);
                        }
                    }
                },

                switchToEdit: function () {
                    $scope.state = 'edit';
                }
            });
        }
    }
}

export default EditableCategoryDirective;