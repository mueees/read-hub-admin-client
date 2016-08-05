import {Observable} from 'rxjs/Observable';

function AddCategoryDirective(readCategoryManager) {
    return {
        restrict: 'E',
        template: require('./list-category.html'),

        scope: {
            readConfiguration: '='
        },

        controller: function ($scope) {
            $scope.tree = [];

            $scope.$watch('readConfiguration.categories', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    let clonedCategories = _.cloneDeep($scope.readConfiguration.categories);

                    $scope.tree = buildTree(clonedCategories);
                }
            }, true);

            $scope.delete = function (category, $event) {
                $event.stopPropagation();
                console.log(category);
            };

            $scope.treeOptions = {
                dirSelectable: false,
                nodeChildren: "children",

                // allow nodes to have the same label
                // https://github.com/wix/angular-tree-control/issues/98
                equality: function (node1, node2) {
                    return angular.equals(node1, node2);
                }
            };

            $scope.showSelected = function (node, selected) {
                console.log(node);
            };

            function buildChildren(category, categories) {
                var children = _.filter(categories, {
                    parentId: category._id
                });

                category.children = children;

                $scope.expandedNodes = $scope.expandedNodes.concat(children);

                _.each(children, function (childCategory) {
                    buildChildren(childCategory, categories);
                });
            }

            function buildTree(categories) {
                var firstLevelCategories = _.filter(categories, function (category) {
                    return !category.parentId;
                });

                _.each(firstLevelCategories, function (firstLevelCategory) {
                    buildChildren(firstLevelCategory, categories);

                    $scope.expandedNodes.push(firstLevelCategory);
                });

                return firstLevelCategories;
            }
        }
    }
}

AddCategoryDirective.$inject = ['readCategoryManager'];

export default AddCategoryDirective;