class CategoryPageController {
    constructor(readCategoryManager) {
        let self = this;

        var categoryList = [];

        readCategoryManager.getAll().then(function (categories) {
            onUpdateCategories(categories.plain());
        });

        this.addCategoryConfiguration = {
            categories: [],

            onCreate: function (newCategory) {
                self.isShowAddCategory = false;

                categoryList.push(newCategory);

                self.listCategoryConfiguration.categories = categoryList;
            },

            onCancel: function () {
                self.isShowAddCategory = false;
            }
        };

        this.listCategoryConfiguration = {
            categories: [],

            onDelete: function (idsForRemoving) {
                _.each(idsForRemoving, function (idForRemoving) {
                    _.remove(categoryList, {
                        _id: idForRemoving
                    });
                });

                onUpdateCategories(categoryList);
            },

            onSave: function (savedCategory) {
                var oldCategory = _.find(categoryList, {
                    _id: savedCategory._id
                });

                _.assign(oldCategory, savedCategory);

                onUpdateCategories(categoryList);
            }
        };

        function onUpdateCategories(categories) {
            categoryList = categories;

            self.listCategoryConfiguration.categories = categories;
            self.addCategoryConfiguration.categories = categories;
        }
    }
}

CategoryPageController.$inject = ['readCategoryManager'];

export default CategoryPageController;