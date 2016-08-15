'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './assets/scss/index.scss';

import run from './app.run';
import config from './app.config';

// modules
import errorHandling from './error-handling/error-handling.module.js';
import security from './security/security.module';
import application from './application/application.module';

// pages
import login from './pages/login/login.module';
import category from './pages/category/category.module';
import tag from './pages/tag/tag.module';
import book from './pages/book/book.module';
import viewport from './pages/viewport/viewport.module';

angular.module('read', [
    uirouter,
    errorHandling,
    security,
    application,
    login,
    viewport,
    book,
    tag,
    category
]).run(run).config(config);