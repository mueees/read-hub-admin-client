'use strict';

import {isDevelopment} from '../environment';

const HOST = isDevelopment() ? '' : 'http://hub.mue.in.ua';

export function getHost() {
    return HOST;
}