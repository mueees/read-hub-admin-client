function AuthUser($q) {
    function login() {
        var password = window.prompt('Enter pass');

        if (password === 'asd') {
            return $q.resolve();
        } else {
            return $q.reject;
        }
    }

    function getCurrentUser() {
        return $q.when({
            email: 'admin@gmail.com'
        });
    }

    return {
        login: login,
        getCurrentUser: getCurrentUser
    }
}

AuthUser.$inject = ['$q'];

export default AuthUser;