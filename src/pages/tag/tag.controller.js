import Rx from 'rxjs/Rx';

class TagPageController {
    constructor(readTagManager) {
        let self = this;

        this.addTagConfiguration = {
            placeholder: 'test',
            onRegisterApi: function (addTagApi) {
                addTagApi.createStream.subscribe(function (tag) {
                    self.tagStreamObserver.next(tag);
                });
            }
        };

        this.tagStream = Rx.Observable.create(function (observer) {
            self.tagStreamObserver = observer;
        });

        readTagManager.getAll().then(function (tags) {
            self.tagStreamObserver.next(tags.plain());
        });

        this.listTagConfiguration = {
            tagStream: self.tagStream
        };
    }
}

TagPageController.$inject = ['readTagManager'];

export default TagPageController;