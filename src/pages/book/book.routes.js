function routes($stateProvider) {
    $stateProvider
        .state('read.book', {
            url: '/book',
            views: {
                content: {
                    template: require('./book.html'),
                    controller: 'BookController',
                    controllerAs: 'vm'
                }
            }
        });
}

routes.$inject = ['$stateProvider'];

export default routes;