import {Observable} from 'rxjs/Observable';

function AddCategoryDirective() {
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
                    nodeChildren: "children"
                },

                getCategoryConfig: function (category) {
                    return {
                        category: category,
                        categories: $scope.flatCategoryList,

                        onDelete: $scope.onDelete,
                        onSave: $scope.onSave
                    };
                },

                onDelete: function (deletedCategory) {
                    let idsForRemoving = getChildrenCategoryIds(deletedCategory);

                    _.each(idsForRemoving, function (idForRemoving) {
                        _.remove($scope.flatCategoryList, {
                            _id: idForRemoving
                        });
                    });

                    rebuildTreeCategories();

                    if (_.isFunction($scope.readConfiguration.onDelete)) {
                        $scope.readConfiguration.onDelete(idsForRemoving);
                    }
                },

                onSave: function (savedCategory) {
                    var oldCategory = _.find($scope.flatCategoryList, {
                        _id: savedCategory._id
                    });

                    _.assign(oldCategory, savedCategory);

                    rebuildTreeCategories();

                    if (_.isFunction($scope.readConfiguration.onSave)) {
                        $scope.readConfiguration.onSave(savedCategory);
                    }
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

export default AddCategoryDirective;