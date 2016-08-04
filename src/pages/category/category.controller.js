import { Observable } from 'rxjs/Observable';

class CategoryPageController {
    constructor() {
        let self = this;

        this.tab = 'list';

        this.categoryStream = Observable.create(function (observer) {
            self.categoryStreamObserver = observer;
        });

        this.addCategoryConfiguration = {
            onRegisterApi: function (addCategoryApi) {
                addCategoryApi.createStream.subscribe(function (category) {
                    self.categoryStreamObserver.next(category);
                });
            }
        };
    }
}


export default CategoryPageController;