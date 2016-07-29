class AddTagController {
    constructor(readTagManager) {
        Object.assign(this, {readTagManager});
    }

    create() {
        this.readTagManager.create(this.name);
    }
}

function AddTagDirective() {
    return {
        restrict: 'E',
        template: require('./add-tag.html'),
        controller: AddTagController,
        controllerAs: 'tag'
    }
}

AddTagDirective.$inject = ['readTagManager'];

export default AddTagDirective;