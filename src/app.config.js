function routing($urlRouterProvider, ReadHubResourceProvider, readEnvironmentProvider) {
    $urlRouterProvider.otherwise('/read/book');

    if (readEnvironmentProvider.isDevelopment()) {
        // ReadHubResourceProvider.setBaseUrl('http://localhost:20000/api');
    }
}

routing.$inject = [
    '$urlRouterProvider',
    'ReadHubResourceProvider',
    'readEnvironmentProvider'
];

export default routing;