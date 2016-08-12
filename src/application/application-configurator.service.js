function ApplicationConfigurator($urlRouterProvider,
                                 readAuthenticationProvider,
                                 readEnvironmentProvider,
                                 ReadHubResourceProvider) {
    var defaultApplicationConfig = {},
        applicationConfig;

    function configure(config) {
        applicationConfig = _.cloneDeep(defaultApplicationConfig);

        _.assign(applicationConfig, config);

        readAuthenticationProvider.loginState(applicationConfig.defaultLoginState || 'login');

        if (applicationConfig.defaultApplicationState) {
            readAuthenticationProvider.appState(applicationConfig.defaultApplicationState);

            $urlRouterProvider.otherwise(applicationConfig.defaultApplicationState);
        }

        if (readEnvironmentProvider.isDevelopment()) {
            ReadHubResourceProvider.setBaseUrl(applicationConfig.productionBaseUrl);
        } else {
            ReadHubResourceProvider.setBaseUrl(applicationConfig.developmentBaseUrl);
        }
    }

    return {
        configure: configure,

        $get: function () {
            return {};
        }
    }
}

ApplicationConfigurator.$inject = [
    '$urlRouterProvider',
    'readAuthenticationProvider',
    'readEnvironmentProvider',
    'ReadHubResourceProvider'
];

export default ApplicationConfigurator;