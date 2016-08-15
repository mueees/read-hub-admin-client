function HttpResponseErrorInterceptor($q, readServeErrorHandler) {
    function canIgnore(response) {
        var ignoreList = [
            {status: 404, contains: "/resources/i18n/locale"}
        ];

        return _.find(ignoreList, function (item) {
            return (response.status === item.status && response.data && response.data.indexOf(item.contains) !== -1);
        });
    }

    return {
        responseError: function (response) {
            if (!canIgnore(response)) {
                readServeErrorHandler.handleServerResponseError(response);
            }

            return $q.reject(response);
        }
    };
}

HttpResponseErrorInterceptor.$inject = ['$q', 'readServeErrorHandler'];

export default HttpResponseErrorInterceptor;