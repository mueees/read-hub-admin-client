function Session(readCurrentUser) {
    function create(user) {
        readCurrentUser.set(user);
    }

    function destroy() {
        readCurrentUser.set(null);
    }

    function isAlive() {
        return readCurrentUser.get() !== null;
    }

    return {
        create: create,
        destroy: destroy,
        isAlive: isAlive
    };
}

Session.$inject = ['readCurrentUser'];

export default Session;