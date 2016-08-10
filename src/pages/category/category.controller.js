import {Observable} from 'rxjs/Observable';

class CategoryPageController {
    constructor(readCategoryManager) {
        let self = this;

        var categoryList = [];

        readCategoryManager.getAll().then(function (categories) {
            categoryList = categories.plain();

            self.listCategoryConfiguration.categories = categories.plain();
            self.addCategoryConfiguration.categories = categories.plain();
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
            categories: []
        };
    }
}

CategoryPageController.$inject = ['readCategoryManager'];

export default CategoryPageController;