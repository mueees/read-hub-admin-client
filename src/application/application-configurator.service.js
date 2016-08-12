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

        $get: function ($rootScope) {
            return {
                runApplicationConfig: function (config) {
                    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
                        /*if (toState.name != 'login' || !(toState.access && toState.access.loginRequired === false)) {
                            if (rxSession.isAlive()) {
                                if (options.isUserFromRestrictedGroup()) {
                                    if (options.noAccessRedirectState && !rxAuthorization.isStateAuthorized(toState)) {
                                        event.preventDefault();
                                        $state.go(options.noAccessRedirectState);
                                    }

                                    if (!event.defaultPrevented && self.debugOptions) {
                                        rxLog.debug(getStateChangeMessage(fromState, toState, toParams));
                                    }

                                } else {
                                    event.preventDefault();

                                    rxAuthentication.logout();

                                    rxNotificationMessage.error(options.noAccessMessage);
                                }
                            } else {
                                if (!rxSession.isAlive()) {
                                    event.preventDefault();

                                    rxAuthentication.initSession().then(function () {
                                        $state.go(toState.name, toParams);
                                    });
                                }

                                if (!event.defaultPrevented && self.debugOptions) {
                                    rxLog.debug(getStateChangeMessage(fromState, toState, toParams));
                                }
                            }
                        }*/
                    });
                }
            };
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