function LocalAuthentication($q) {
    return {
        login: function () {
            var password = window.prompt('Enter pass');

            if (password === 'asd') {
                return $q.resolve('local token');
            } else {
                return $q.reject();
            }
        },

        getCurrentUser: function (token) {
            if (token) {
                return $q.when({
                    email: 'test@gmail.com'
                });
            } else {
                return $q.reject();
            }
        }
    };
}

LocalAuthentication.$inject = ['$q'];

export default LocalAuthentication;