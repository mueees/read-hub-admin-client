function CategoryManagerService(ReadHubResource, READ_CATEGORY) {
    var CategoryResource = ReadHubResource.withConfig(function (RestangularConfigurer) {
    });

    return {
        create: function (name, description, parentId) {
            var category = CategoryResource.one(READ_CATEGORY.url);

            category.name = name;
            category.description = description;
            category.parentId = parentId;

            return category.put();
        },

        save: function (data) {
            let category = CategoryResource.one(READ_CATEGORY.url + '/' + data._id);

            Object.assign(category, data);

            return category.save();
        },

        delete: function (id) {
            return CategoryResource.one(READ_CATEGORY.url, id).remove();
        },

        getAll: function () {
            return CategoryResource.all(READ_CATEGORY.url).getList();
        }
    }
}

CategoryManagerService.$inject = ['ReadHubResource', 'READ_CATEGORY'];

export default CategoryManagerService;