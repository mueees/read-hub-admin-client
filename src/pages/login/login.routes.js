function routes($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            template: require('./login.html'),
            controller: 'LoginController'
        });
}

routes.$inject = ['$stateProvider'];

export default routes;