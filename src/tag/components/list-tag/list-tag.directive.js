class ListTagController {
    constructor() {
        this.tags = [];

        this.readConfiguration.tagStream.subscribe(this.addTags.bind(this));
    }

    addTags (tags){
        if(!_.isArray(tags)){
            tags = [tags];
        }

        this.tags = this.tags.concat(tags);
    }
}

function ListTagDirective() {
    return {
        restrict: 'E',
        template: require('./list-tag.html'),
        scope: {
            readConfiguration: '='
        },
        bindToController: true,
        controller: ListTagController,
        controllerAs: 'vm'
    }
}

export default ListTagDirective;