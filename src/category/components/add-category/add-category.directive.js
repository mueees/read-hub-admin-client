import {Observable} from 'rxjs/Observable';

function AddCategoryDirective(readCategoryManager) {
    return {
        restrict: 'E',
        template: require('./add-category.html'),

        scope: {
            readConfiguration: '='
        },

        controller: function ($scope) {
            var createStreamObserver,
                api = {};

            $scope.showForm = false;

            $scope.category = {};

            Object.assign($scope, {
                create: create
            });

            initializeApi();

            function create() {
                readCategoryManager.create($scope.category.name, $scope.category.description, $scope.category.parentId).then(function (categoryResource) {
                    Object.assign($scope.category, categoryResource.plain());

                    createStreamObserver.next($scope.category);

                    resetForm();
                });
            }

            function resetForm() {
                $scope.category = {};
            }

            function initializeApi() {
                let createStream = Observable.create(function (observer) {
                    createStreamObserver = observer;
                });

                Object.assign(api, {
                    createStream: createStream
                });

                if (_.isFunction($scope.readConfiguration.onRegisterApi)) {
                    $scope.readConfiguration.onRegisterApi(api);
                }
            }
        }
    }
}

AddCategoryDirective.$inject = ['readCategoryManager'];

export default AddCategoryDirective;