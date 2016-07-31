function TagManagerService(ReadHubResource) {
    var TagResource = ReadHubResource.withConfig(function (RestangularConfigurer) {
    });

    return {
        create: function (tagName, tagDescription) {
            var tag = TagResource.one('/read-hub/tags');

            tag.name = tagName;
            tag.tagDescription = tagDescription;

            return tag.put();
        },

        getAll: function () {
            return TagResource.all('/read-hub/tags').getList();
        }
    }
}

TagManagerService.$inject = ['ReadHubResource'];

export default TagManagerService;