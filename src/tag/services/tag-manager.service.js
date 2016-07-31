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

        save: function (tagData) {
            let tag = TagResource.one('/read-hub/tags/' + tagData._id);

            Object.assign(tag, tagData);
            return tag.save();
        },

        delete: function (id) {
            return TagResource.one('/read-hub/tags', id).remove();
        },

        getAll: function () {
            return TagResource.all('/read-hub/tags').getList();
        }
    }
}

TagManagerService.$inject = ['ReadHubResource'];

export default TagManagerService;