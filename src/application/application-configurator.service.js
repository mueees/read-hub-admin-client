function ApplicationConfigurator($httpProvider,
                                 $urlRouterProvider,
                                 readAuthenticationProvider,
                                 readEnvironmentProvider,
                                 ReadHubResourceProvider) {
    var defaultApplicationConfig = {
            httpInterceptors: ['readHttpResponseErrorInterceptor']
        },
        applicationConfig;

    function configure(config) {
        applicationConfig = _.cloneDeep(defaultApplicationConfig);

        _.assign(applicationConfig, config);

        if (applicationConfig.httpInterceptors) {
            if (_.isArray(applicationConfig.httpInterceptors)) {
                _.each(applicationConfig.httpInterceptors, function (interceptor) {
                    $httpProvider.interceptors.push(interceptor);
                });
            } else {
                $httpProvider.interceptors.push(applicationConfig.httpInterceptors);
            }
        }

        readAuthenticationProvider.loginState(applicationConfig.defaultLoginState || 'login');

        if (applicationConfig.defaultApplicationState) {
            readAuthenticationProvider.appState(applicationConfig.defaultApplicationState);

            $urlRouterProvider.otherwise(applicationConfig.defaultApplicationState);
        }

        if (readEnvironmentProvider.isDevelopment()) {
            ReadHubResourceProvider.setBaseUrl(applicationConfig.developmentBaseUrl);
        } else {
            ReadHubResourceProvider.setBaseUrl(applicationConfig.productionBaseUrl);
        }
    }

    return {
        configure: configure,

        $inject: ['$state', 'readSession', 'readAuthentication'],

        $get: function ($state, readSession, readAuthentication, $rootScope) {
            return {
                runApplicationConfig: function (config) {
                    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
                        if (toState.name !== 'login' || (toState.access && toState.access.loginRequired === false)) {
                            if (!readSession.isAlive()) {
                                event.preventDefault();

                                readAuthentication.initSession().then(function () {
                                    $state.go(toState.name, toParams);
                                });
                            }
                        }
                    });
                }
            };
        }
    }
}

ApplicationConfigurator.$inject = [
    '$httpProvider',
    '$urlRouterProvider',
    'readAuthenticationProvider',
    'readEnvironmentProvider',
    'ReadHubResourceProvider'
];

export default ApplicationConfigurator;