function routes($stateProvider) {
    $stateProvider
        .state('read.tag', {
            url: '/tag',
            views: {
                content: {
                    template: require('./tag.html'),
                    controller: 'TagPageController',
                    controllerAs: 'vm'
                }
            }
        });
}

routes.$inject = ['$stateProvider'];

export default routes;