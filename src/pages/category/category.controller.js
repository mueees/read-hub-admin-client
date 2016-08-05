import {Observable} from 'rxjs/Observable';

class CategoryPageController {
    constructor(readCategoryManager) {
        let self = this;

        this.canShowAddCategoryComponent = false;

        this.categories = [];

        this.addCategoryConfiguration = {
            categories: this.categories,

            onRegisterApi: function (addCategoryApi) {
                addCategoryApi.createStream.subscribe(function (category) {
                    self.listCategoryConfiguration.categories.push(category);
                });
            }
        };

        this.categoryStream = Observable.create(function (observer) {
            self.categoryStreamObserver = observer;
        });

        this.listCategoryConfiguration = {
            categories: []
        };

        readCategoryManager.getAll().then(function (categories) {
            self.addCategoryConfiguration.categories = categories.plain();
            self.listCategoryConfiguration.categories = categories.plain();

            self.canShowAddCategoryComponent = true;
        });
    }
}

CategoryPageController.$inject = ['readCategoryManager'];

export default CategoryPageController;