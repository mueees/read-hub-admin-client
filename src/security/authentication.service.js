function Authentication() {
    let _loginState = null,
        _appState = null,
        afterLoginState = null,
        _token = null,
        _authenticationServiceName = null;

    function loginState(stateName, stateParams) {
        if (arguments.length) {
            _loginState = {
                name: stateName,
                params: stateParams
            };
        }

        return _loginState;
    }

    function appState(stateName, stateParams) {
        if (arguments.length) {
            if (_.isString(stateName)) {
                _appState = {
                    name: stateName,
                    params: stateParams
                };
            } else if (_.isFunction(stateName)) {
                _appState = stateName;
            } else if (_.isObject(stateName) && _.isString(stateName.name)) {
                _appState = stateName;
            }
        }

        return _appState;
    }

    function redirectToAppState() {
    }

    return {
        loginState: loginState,

        appState: appState,

        useAuthentication: function (authenticationServiceName) {
            _authenticationServiceName = authenticationServiceName;
        },

        $inject: ['$injector', '$state', '$q', 'readSession'],

        $get: function ($injector, $state, $q, readSession, $rootScope, READ_AUTH_EVENTS) {
            var authenticationService = $injector.get(_authenticationServiceName);

            function login(credentials) {
                return authenticationService.login(credentials).then(function (token) {
                    if (!token) {
                        throw new Error('Login method should return token');
                    }

                    _token = token;
                });
            }

            $rootScope.$on(READ_AUTH_EVENTS.notAuthenticated, function () {
                readSession.destroy();
                _token = null;

                _redirectToLoginState();
            });

            function _redirectToLoginState() {
                _redirectToState(_loginState);
            }

            function _redirectToState(state) {
                var targetState;

                if (_.isFunction(state)) {
                    targetState = state();
                } else {
                    targetState = _.cloneDeep(state);
                }

                if (_.isString(targetState)) {
                    targetState = {
                        name: targetState
                    };
                }

                $state.go(targetState.name, targetState.params);
            }

            $rootScope.$on(READ_AUTH_EVENTS.loginSuccess, redirectToTargetState);

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                if (toState && toState.name !== _loginState.name) {
                    afterLoginState = {
                        name: toState.name,
                        params: toParams
                    };
                }
            });

            function redirectToTargetState() {
                if (!afterLoginState) {
                    redirectToAppState();
                } else {
                    _redirectToState(afterLoginState);
                    afterLoginState = _appState;
                }
            }

            function redirectToAppState() {
                if (_appState) {
                    _redirectToState(_appState);
                }
            }

            function initSession() {
                return $q(function (resolve, reject) {
                    if (readSession.isAlive()) {
                        resolve();
                    } else {
                        authenticationService.getCurrentUser(_token).then(function (user) {
                            readSession.create(user);

                            resolve();
                        }, function () {
                            $rootScope.$broadcast(READ_AUTH_EVENTS.notAuthenticated);
                            reject();
                        });
                    }
                });
            }

            return {
                login: login,
                initSession: initSession,
                redirectToAppState: redirectToAppState
            }
        }
    };
}

export default Authentication;