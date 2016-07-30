import angular from 'angular';

const resource = angular.module('read.resource', ['restangular']);

resource.provider('ReadHubResource', function () {
    let baseUrl = 'http://hub.mue.in.ua/api';

    function setBaseUrl(url) {
        baseUrl = url;
    }

    return {
        setBaseUrl: setBaseUrl,

        $get: function (Restangular) {
            return Restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(baseUrl);
            });
        }
    }
});

export default resource.name;