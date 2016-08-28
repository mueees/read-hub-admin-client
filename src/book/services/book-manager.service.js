function BookManagerService(ReadHubResource, READ_BOOK) {
    var BookResource = ReadHubResource.withConfig(function (RestangularConfigurer) {
    });

    return {
        create: function (book) {
            var bookResource = BookResource.one(READ_BOOK.url);

            _.assign(bookResource, book);

            return bookResource.post();
        },

        save: function (data) {
            let bookResource = BookResource.one(READ_BOOK.url + '/' + data._id);

            Object.assign(bookResource, data);

            delete bookResource._id;

            return bookResource.put();
        },

        delete: function (id) {
            return BookResource.one(READ_BOOK.url, id).remove();
        },

        getAll: function () {
            return BookResource.all(READ_BOOK.url).getList().then(function (books) {
                _.each(books, function (book) {
                    book.create_data = new Date(book.create_data);
                });

                return books;
            });
        },

        get: function (id) {
            return this.getAll().then(function (books) {
                return _.find(books, {
                    _id: id
                })
            });
        }
    };
}

BookManagerService.$inject = ['ReadHubResource', 'READ_BOOK'];

export default BookManagerService;