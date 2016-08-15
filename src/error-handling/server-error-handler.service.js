function ServeErrorHandler() {
    function handleServerResponseError(response) {
        var errorHandled = false;

        if (response.config && _.isFunction(response.config.handleResponseError)) {
            errorHandled = response.config.handleResponseError(response);
        }

        if (!errorHandled) {
            var errorMessage = getServerResponseErrorDetails(response);

            if (errorMessage) {
                addErrorMessage(errorMessage);
            }
        }
    }

    function getServerResponseErrorDetails(response) {
        return response.message;
    }

    function addErrorMessage(errorMessage) {
        alert(errorMessage);
    }

    return {
        handleServerResponseError: handleServerResponseError
    }
}

export default ServeErrorHandler;