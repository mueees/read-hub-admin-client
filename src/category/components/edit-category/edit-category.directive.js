function EditCategoryDirective(readCategoryManager) {
    return {
        restrict: 'E',
        template: require('./edit-category.html'),

        scope: {
            readConfiguration: '='
        },

        controller: function ($scope) {
            _.assign($scope, {
                category: _.cloneDeep($scope.readConfiguration.category),

                save: function () {
                    readCategoryManager.save($scope.category).then(function () {
                        if (_.isFunction($scope.readConfiguration.onSave)) {
                            $scope.readConfiguration.onSave($scope.category);
                        }
                    });
                },

                cancel: function () {
                    if (_.isFunction($scope.readConfiguration.onCancel)) {
                        $scope.readConfiguration.onCancel();
                    }
                },

                delete: function () {
                    if (window.confirm('Are you sure?')) {
                        readCategoryManager.delete($scope.category._id).then(function () {
                            if (_.isFunction($scope.readConfiguration.onDelete)) {
                                $scope.readConfiguration.onDelete($scope.category);
                            }
                        });
                    }
                }
            });
        }
    }
}

EditCategoryDirective.$inject = ['readCategoryManager'];

export default EditCategoryDirective;