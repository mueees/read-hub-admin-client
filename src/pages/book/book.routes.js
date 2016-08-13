function routes($stateProvider) {
    $stateProvider
        .state('read.book', {
            url: '/book',
            abstract: true,
            views: {
                content: {
                    template: require('./book.html'),
                    controller: 'BookController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('read.book.add', {
            url: '/add',
            views: {
                content: {
                    template: require('./add-book.controller.html'),
                    controller: 'AddBookController'
                }
            }
        });
}

routes.$inject = ['$stateProvider'];

export default routes;