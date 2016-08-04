import { Observable } from 'rxjs/Observable';

class AddCategoryController {
    constructor(readCategoryManager) {
        Object.assign(this, {readCategoryManager});

        this.category = {};

        this.initializeApi();
    }

    initializeApi() {
        let self = this;

        this.api = {};

        let createStream = Observable.create(function (observer) {
            self.createStreamObserver = observer;
        });

        Object.assign(this.api, {
            createStream: createStream
        });

        if (_.isFunction(this.readConfiguration.onRegisterApi)) {
            this.readConfiguration.onRegisterApi(this.api);
        }
    }

    create() {
        var self = this;

        this.readCategoryManager.create(this.category.name, this.category.description).then(function (categoryResource) {
            Object.assign(self.category, categoryResource.plain());

            self.createStreamObserver.next(self.category);

            self.resetForm();
        });
    }

    resetForm() {
        this.category = {};
    }
}

function AddCategoryDirective() {
    return {
        restrict: 'E',
        template: require('./add-category.html'),
        scope: {
            readConfiguration: '='
        },
        bindToController: true,
        controller: AddCategoryController,
        controllerAs: 'vm'
    }
}

AddCategoryDirective.$inject = ['readCategoryManager'];

export default AddCategoryDirective;