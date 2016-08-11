function Authentication(readAuthUser) {
    function login(credentials) {
        return readAuthUser.login(credentials);
    }

    function logout() {
    }

    function initSession() {
    }

    function setAppState() {
    }

    function getAppState() {
    }

    function redirectToAppState() {
    }

    return {
        $get: function ($rootScope, READ_AUTH_EVENTS) {
            $rootScope.$on(READ_AUTH_EVENTS.loginSuccess, redirectToTargetState);

            function redirectToTargetState() {

            }

            return {
                login: login,
                logout: logout,
                initSession: initSession,
                setAppState: setAppState,
                getAppState: getAppState,
                redirectToAppState: redirectToAppState
            }
        }
    }
}

Authentication.$inject = ['readAuthUser'];

export default Authentication;