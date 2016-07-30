'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';

// modules
import environment from './environment/environment.module';

// pages
import category from './pages/category/category.module';
import tag from './pages/tag/tag.module';
import book from './pages/book/book.module';
import viewport from './pages/viewport/viewport.module';

angular.module('read', [uirouter, environment, viewport, book, tag, category])
    .config(routing);