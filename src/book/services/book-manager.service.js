function BookManagerService(ReadHubResource, READ_BOOK) {
    var BookResource = ReadHubResource.withConfig(function (RestangularConfigurer) {
    });

    return {
        create: function (book) {
            var bookResource = BookResource.one(READ_BOOK.url);

            _.assign(bookResource, book);

            return bookResource.put();
        },

        save: function (data) {
            let bookResource = BookResource.one(READ_BOOK.url + '/' + data._id);

            Object.assign(bookResource, data);

            return bookResource.save();
        },

        delete: function (id) {
            return BookResource.one(READ_BOOK.url, id).remove();
        },

        getAll: function () {
            return BookResource.all(READ_BOOK.url).getList();
        }
    };
}

BookManagerService.$inject = ['ReadHubResource', 'READ_BOOK'];

export default BookManagerService;