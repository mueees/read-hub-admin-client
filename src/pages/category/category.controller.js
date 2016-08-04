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
                    self.categoryStreamObserver.next(category);
                });
            }
        };

        this.categoryStream = Observable.create(function (observer) {
            self.categoryStreamObserver = observer;
        });

        this.categoryStream.subscribe(function () {

        });

        readCategoryManager.getAll().then(function (categories) {
            self.categories = categories.plain();
            self.addCategoryConfiguration.categories = self.categories;

            self.canShowAddCategoryComponent = true;
        });
    }
}

CategoryPageController.$inject = ['readCategoryManager'];

export default CategoryPageController;