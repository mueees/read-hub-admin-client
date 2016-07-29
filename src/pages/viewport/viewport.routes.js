function routes($stateProvider) {
    $stateProvider
        .state('read', {
            abstract: true,
            url: '/read',
            template: require('./viewport.html'),
            controller: 'ViewportController',
            controllerAs: 'viewport'
        });
}

routes.$inject = ['$stateProvider'];

export default routes;