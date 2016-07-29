function routes($stateProvider) {
    $stateProvider
        .state('read.category', {
            url: '/category',
            views: {
                content: {
                    template: require('./category.html'),
                    controller: 'CategoryPageController',
                    controllerAs: 'vm'
                }
            }
        });
}

routes.$inject = ['$stateProvider'];

export default routes;