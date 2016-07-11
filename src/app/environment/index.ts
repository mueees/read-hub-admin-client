'use strict';

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

export function isDevelopment() {
    return process.env.ENV === DEVELOPMENT;
}

export function isProduction() {
    return process.env.ENV === PRODUCTION;
}