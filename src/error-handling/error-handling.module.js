import angular from 'angular';

import HttpResponseErrorInterceptor from './http-response-error-interceptor.service';
import ServeErrorHandlerService from './server-error-handler.service';

const errorHandling = angular.module('read.error-handling', []);

errorHandling
    .factory('readServeErrorHandler', ServeErrorHandlerService)
    .factory('readHttpResponseErrorInterceptor', HttpResponseErrorInterceptor);

export default errorHandling.name;