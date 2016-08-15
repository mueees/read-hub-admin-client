function routes($stateProvider) {
    $stateProvider
        .state('read', {
            abstract: true,
            url: '/read',
            template: require('./viewport.html'),
            controller: 'ViewportController',
            controllerAs: 'viewport',
            resolve: {
                session: function (readAuthentication) {
                    return readAuthentication.initSession();
                }
            }
        });
}

routes.$inject = ['$stateProvider'];

export default routes;