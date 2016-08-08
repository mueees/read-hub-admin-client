function CategoryManagerService(ReadHubResource) {
    var CategoryResource = ReadHubResource.withConfig(function (RestangularConfigurer) {
    });

    return {
        create: function (name, description, parentId) {
            var category = CategoryResource.one('/read-hub/categories');

            category.name = name;
            category.description = description;
            category.parentId = parentId;

            return category.put();
        },

        save: function (data) {
            let category = CategoryResource.one('/read-hub/categories/' + data._id);

            Object.assign(category, data);
            return category.save();
        },

        delete: function (id) {
            return CategoryResource.one('/read-hub/categories', id).remove();
        },

        getAll: function () {
            return CategoryResource.all('/read-hub/categories').getList();
        }
    }
}

CategoryManagerService.$inject = ['ReadHubResource'];

export default CategoryManagerService;