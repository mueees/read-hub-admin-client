function EditorCategory() {
    return {
        restrict: 'E',
        template: require('./editor-category.html'),

        scope: {
            readConfiguration: '='
        },

        require: ['^form', 'ngModel'],

        link: function ($scope, $element, attrs, controllers) {
            let flatCategories = _.cloneDeep($scope.readConfiguration.categories);

            $scope.form = controllers[0];

            let ngModel = controllers[1];

            _.assign($scope, {
                onPrimaryHandler: function (categoryId, firstLevelCategoryId) {
                    let firstLevelCategoryContainer = _.find($scope.categories, {
                        firstLevelCategoryId: firstLevelCategoryId
                    });

                    _.each(firstLevelCategoryContainer.categories, function (category) {
                        if (category._id === categoryId) {
                            category.primary = true;
                        } else {
                            delete category.primary;
                        }
                    });
                },

                onSelectedHandler: function (categoryId, firstLevelCategoryId) {
                    let firstLevelCategoryContainer = _.find($scope.categories, {
                        firstLevelCategoryId: firstLevelCategoryId
                    });

                    let selectedCategories = _.filter(firstLevelCategoryContainer.categories, 'selected');

                    if (selectedCategories.length === 0) {
                        _.each(firstLevelCategoryContainer.categories, function (category) {
                            delete category.primary;
                        });
                    } else if (selectedCategories.length === 1) {
                        _.each(firstLevelCategoryContainer.categories, function (category) {
                            if (category.selected) {
                                category.primary = true;
                            } else {
                                delete category.primary;
                            }
                        });
                    }
                }
            });

            function getModelData() {
                let modelData = [];

                _.each($scope.categories, function (categoryContainer) {
                    _.each(categoryContainer.categories, function (category) {
                        if (category.selected) {
                            modelData.push(_.pick(category, ['_id', 'selected', 'primary']));
                        }
                    });
                });

                return modelData;
            }

            ngModel.$formatters.push(function (modelValue) {
                _.each(flatCategories, function (flatCategory) {
                    let modelCategory = _.find(modelValue, {
                        _id: flatCategory._id
                    });

                    if (modelCategory) {
                        flatCategory.selected = true;
                        flatCategory.primary = Boolean(modelCategory.primary);
                    }
                });

                let firstLevelCategories = _.filter(flatCategories, function (flatCategory) {
                    return !Boolean(flatCategory.parentId);
                });

                function getAllChildCategories(categoryId, categories) {
                    var _childCategories = _(categories)
                        .filter(function (category) {
                            return String(category.parentId) === categoryId;
                        })
                        .map(function (category) {
                            return {
                                _id: category._id,
                                selected: category.selected,
                                primary: category.primary,
                                name: category.name
                            }
                        })
                        .value();

                    var childCategories = [];

                    _.each(_childCategories, function (childCategory) {
                        childCategories = childCategories.concat(getAllChildCategories(childCategory._id, categories));
                    });

                    return childCategories.concat(_childCategories);
                }

                return _.map(firstLevelCategories, function (firstLevelCategory) {
                    return {
                        firstLevelCategoryId: firstLevelCategory._id,
                        firstLevelCategoryName: firstLevelCategory.name,
                        categories: getAllChildCategories(firstLevelCategory._id, flatCategories)
                    }
                });
            });

            ngModel.$render = function () {
                $scope.categories = ngModel.$viewValue;
            };

            ngModel.$parsers.push(function (viewValue) {
                return viewValue;
            });

            $scope.$watch('categories', function () {
                ngModel.$setViewValue(getModelData());
            }, true);
        }
    }
}

export default EditorCategory;