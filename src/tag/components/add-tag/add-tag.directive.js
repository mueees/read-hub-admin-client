import Rx from 'rxjs/Rx';

class AddTagController {
    constructor(readTagManager) {
        Object.assign(this, {readTagManager});

        this.tag = {};

        this.initializeApi();
    }

    initializeApi() {
        let self = this;

        this.api = {};

        let createStream = Rx.Observable.create(function (observer) {
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

        this.readTagManager.create(this.tag.name, this.tag.description).then(function (tagResource) {
            Object.assign(self.tag, tagResource.plain());

            self.createStreamObserver.next(self.tag);

            self.resetForm();
        });
    }

    resetForm() {

        this.tag = {};
    }
}

function AddTagDirective() {
    return {
        restrict: 'E',
        template: require('./add-tag.html'),
        scope: {
            readConfiguration: '='
        },
        bindToController: true,
        controller: AddTagController,
        controllerAs: 'vm'
    }
}

AddTagDirective.$inject = ['readTagManager'];

export default AddTagDirective;