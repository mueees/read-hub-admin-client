import angular from 'angular';

const environment = angular.module('read.environment', []);

const ENV = process.env.ENV || 'production';

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

environment.provider('readEnvironment', function () {
    function isDevelopment() {
        return ENV === DEVELOPMENT;
    }

    function isProduction() {
        return ENV === PRODUCTION;
    }

    return {
        isDevelopment: isDevelopment,
        isProduction: isProduction,

        $get: function () {
            return {
                isDevelopment: isDevelopment,
                isProduction: isProduction
            };
        }
    }
});

export default environment.name;