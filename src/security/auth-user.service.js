function AuthUser($q) {
    function login() {
        var password = window.prompt('Enter pass');

        if (password === 'asd') {
            return $q.resolve();
        } else {
            return $q.reject;
        }
    }

    return {
        login: login
    }
}

AuthUser.$inject = ['$q'];

export default AuthUser;