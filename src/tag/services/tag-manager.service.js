function TagManagerService(Restangular) {
    return {
        create: function (tagName) {
            var tag = Restangular.one('http://hub.mue.in.ua/api/read-hub/tag');

            tag.name = tagName;

            return tag.put();
        }
    }
}

TagManagerService.$inject = ['Restangular'];

export default TagManagerService;