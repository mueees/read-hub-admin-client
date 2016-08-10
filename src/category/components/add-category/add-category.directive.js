import {Observable} from 'rxjs/Observable';

function AddCategoryDirective(readCategoryManager) {
    return {
        restrict: 'E',
        template: require('./add-category.html'),

        scope: {
            readConfiguration: '='
        },

        controller: function ($scope) {
            _.assign($scope, {
                category: {},

                create: function () {
                    readCategoryManager.create($scope.category.name, $scope.category.description, $scope.category.parentId).then(function (categoryResource) {
                        if (_.isFunction($scope.readConfiguration.onCreate)) {
                            $scope.readConfiguration.onCreate($scope.category);
                        }

                        Object.assign($scope.category, categoryResource.plain());

                        resetForm();
                    });
                },

                cancel: function () {
                    if (_.isFunction($scope.readConfiguration.onCancel)) {
                        $scope.readConfiguration.onCancel();
                    }
                }
            });

            function resetForm() {
                $scope.category = {};
            }
        }
    }
}

AddCategoryDirective.$inject = ['readCategoryManager'];

export default AddCategoryDirective;