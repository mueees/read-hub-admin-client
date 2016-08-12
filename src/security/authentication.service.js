function Authentication() {
    let _loginState = null,
        _appState = null;

    function logout() {
    }

    function initSession() {
    }

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

        $inject: ['readAuthUser'],

        $get: function (readAuthUser, $rootScope, READ_AUTH_EVENTS) {
            function login(credentials) {
                return readAuthUser.login(credentials);
            }

            $rootScope.$on(READ_AUTH_EVENTS.loginSuccess, redirectToTargetState);

            function redirectToTargetState() {

            }

            return {
                login: login,
                logout: logout,
                initSession: initSession,

                redirectToAppState: redirectToAppState
            }
        }
    }
}

// Authentication.$inject = ['readAuthUser'];

export default Authentication;