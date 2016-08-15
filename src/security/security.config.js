function SecurityConfig($httpProvider) {
    $httpProvider.interceptors.push(function ($rootScope, $q, READ_AUTH_EVENTS) {
        return {
            responseError: function (response) {
                $rootScope.$broadcast({
                    401: READ_AUTH_EVENTS.notAuthenticated,
                    403: READ_AUTH_EVENTS.notAuthorized
                }[response.status]);

                return $q.reject(response);
            }
        };
    });
}

SecurityConfig.$inject = ['$httpProvider'];

export default SecurityConfig;