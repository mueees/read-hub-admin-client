function routing($urlRouterProvider) {
    $urlRouterProvider.otherwise('/read/book');
}

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default routing;