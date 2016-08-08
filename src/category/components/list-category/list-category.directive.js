import {Observable} from 'rxjs/Observable';

function AddCategoryDirective(readCategoryManager) {
    return {
        restrict: 'E',
        template: require('./list-category.html'),

        scope: {
            readConfiguration: '='
        },

        controller: function ($scope) {
            let flatCategoryList = [];
            $scope.tree = [];

            $scope.$watch('readConfiguration.categories', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    flatCategoryList = _.cloneDeep($scope.readConfiguration.categories);

                    rebuildTree();
                }
            }, true);

            $scope.onClickHandler = function ($event) {
                $event.stopPropagation();
            };

            $scope.collapseCategory = function (category) {
                _.remove($scope.expandedNodes, {
                    _id: category._id
                });
            };

            $scope.expandCategory = function (category) {
                if (!$scope.isCategoryExpanded(category)) {
                    $scope.expandedNodes.push(category);
                }
            };

            $scope.removeCategory = function (category) {
                if (window.confirm('Are you sure?')) {
                    _.each(getChildrenIds(category), function (removedId) {
                        _.remove(flatCategoryList, {
                            _id: removedId
                        });
                    });

                    rebuildTree();

                    readCategoryManager.delete(category._id);
                }
            };

            function getChildrenIds(childCategory) {
                let ids = [childCategory._id];

                if (childCategory.children) {
                    _.each(childCategory.children, function (category) {
                        ids = ids.concat(getChildrenIds(category));
                    });
                }

                return ids;
            }

            $scope.save = function (_id, name, description) {

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

            function buildChildren(category, categories) {
                category.children = _.filter(categories, {
                    parentId: category._id
                });

                _.each(category.children, function (childCategory) {
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

            function rebuildTree() {
                $scope.tree = buildTree(flatCategoryList);
            }

            $scope.isCategoryExpanded = function (category) {
                return Boolean(_.find($scope.expandedNodes, {
                    _id: category._id
                }));
            }
        }
    }
}

AddCategoryDirective.$inject = ['readCategoryManager'];

export default AddCategoryDirective;