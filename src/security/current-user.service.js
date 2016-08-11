function CurrentUser() {
    let _user = null;

    function set(user) {
        _user = user;
    }

    function get() {
        return _user;
    }

    function getName() {
        return _user && _user.email;
    }
 
    return {
        set: set,
        get: get,
        getName: getName
    };
}


export default CurrentUser;