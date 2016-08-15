function LoginController(readAuthentication, READ_AUTH_EVENTS, $rootScope){
    readAuthentication.login().then(function () {
        $rootScope.$broadcast(READ_AUTH_EVENTS.loginSuccess);
    });
}

LoginController.$inject = ['readAuthentication', 'READ_AUTH_EVENTS', '$rootScope'];

export default LoginController;