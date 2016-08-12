import angular from 'angular';

import ApplicationConfiguratorService from './application-configurator.service';

import environment from '../environment/environment.module';
import resource from '../resource/resource.module';

let application = angular.module('read.application', [environment, resource]);

application
    .provider('readApplicationConfigurator', ApplicationConfiguratorService);

export default application.name;