function TagManagerService(ReadHubResource) {
    var TagResource = ReadHubResource.withConfig(function (RestangularConfigurer) {});

    return {
        create: function (tagName) {
            var tag = TagResource.one('/read-hub/tags');

            tag.name = tagName;

            return tag.put();
        }
    }
}

TagManagerService.$inject = ['ReadHubResource'];

export default TagManagerService;