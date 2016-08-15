import angular from 'angular';

import AuthUserService from './auth-user.service';
import AuthenticationService from './authentication.service';
import SessionService from './session.service';
import CurrentUserService from './current-user.service';
import READ_AUTH_EVENTS from './auth-events.constant';
import SecurityConfig from './security.config';

const security = angular.module('read.security', []);

security
    .config(SecurityConfig)
    .constant('READ_AUTH_EVENTS', READ_AUTH_EVENTS)
    .service('readAuthUser', AuthUserService)
    .service('readCurrentUser', CurrentUserService)
    .service('readSession', SessionService)
    .provider('readAuthentication', AuthenticationService);

export default security.name;