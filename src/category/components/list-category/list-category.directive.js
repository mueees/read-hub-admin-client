import {Observable} from 'rxjs/Observable';

function AddCategoryDirective(readCategoryManager) {
    return {
        restrict: 'E',
        template: require('./list-category.html'),

        scope: {
            readConfiguration: '='
        },

        controller: function ($scope) {
            _.assign($scope, {
                flatCategoryList: [],
                treeCategories: [],

                treeOptions: {
                    dirSelectable: false,
                    nodeChildren: "children",

                    // allow nodes to have the same label
                    // https://github.com/wix/angular-tree-control/issues/98
                    equality: function (node1, node2) {
                        return angular.equals(node1, node2);
                    }
                },

                getCategoryConfig: function (category) {
                    return {
                        category: category,
                        categories: $scope.flatCategoryList,

                        getSome: function () {
                            return 'some';
                        }
                    };
                },

                isCategoryExpanded: function (category) {
                    return Boolean(_.find($scope.expandedNodes, {
                        _id: category._id
                    }));
                },

                collapseCategory: function (category) {
                    _.remove($scope.expandedNodes, {
                        _id: category._id
                    });
                },

                expandCategory: function (category) {
                    if (!$scope.isCategoryExpanded(category)) {
                        $scope.expandedNodes.push(category);
                    }
                },

                editCategory: function (category) {

                },

                removeCategory: function (category) {
                    if (window.confirm('Are you sure?')) {
                        _.each(getChildrenCategoryIds(category), function (idForRemoving) {
                            _.remove($scope.flatCategoryList, {
                                _id: idForRemoving
                            });
                        });

                        rebuildTreeCategories();

                        readCategoryManager.delete(category._id);
                    }
                },

                onCategoryHandler: function ($event) {
                    $event.stopPropagation();
                }
            });

            $scope.$watch('readConfiguration.categories', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    $scope.flatCategoryList = _.cloneDeep($scope.readConfiguration.categories);

                    rebuildTreeCategories();
                }
            }, true);

            function getChildrenCategoryIds(category) {
                let ids = [category._id];

                if (category.children) {
                    _.each(category.children, function (category) {
                        ids = ids.concat(getChildrenCategoryIds(category));
                    });
                }

                return ids;
            }

            function buildChildrenCategory(category, categories) {
                category.children = _.filter(categories, {
                    parentId: category._id
                });

                _.each(category.children, function (childCategory) {
                    buildChildrenCategory(childCategory, categories);
                });
            }

            function buildTreeCategories(categories) {
                var firstLevelCategories = _.filter(categories, function (category) {
                    return !category.parentId;
                });

                _.each(firstLevelCategories, function (firstLevelCategory) {
                    buildChildrenCategory(firstLevelCategory, categories);

                    $scope.expandedNodes.push(firstLevelCategory);
                });

                return firstLevelCategories;
            }

            function rebuildTreeCategories() {
                $scope.treeCategories = buildTreeCategories($scope.flatCategoryList);
            }
        }
    }
}

AddCategoryDirective.$inject = ['readCategoryManager'];

export default AddCategoryDirective;