'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './assets/scss/index.scss';

import config from './app.config';

// modules
import security from './security/security.module';
import application from './application/application.module';

// pages
import category from './pages/category/category.module';
import tag from './pages/tag/tag.module';
import book from './pages/book/book.module';
import viewport from './pages/viewport/viewport.module';

angular.module('read', [
    uirouter,
    security,
    application,
    viewport,
    book,
    tag,
    category
]).config(config);