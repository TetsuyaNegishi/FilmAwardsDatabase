import angular from 'angular';
import 'ngComponentRouter';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import './kinejun';

angular.module('app', ['ngComponentRouter', 'ngMaterial', 'ngAnimate', 'kinejun'])
    .config(($locationProvider) => {
        $locationProvider.html5Mode(false);
    }).value('$routerRootComponent', 'app')
    .component('app', {
        template: require('./app.template.html'),
        $routeConfig: [{
            path: '/kinejun',
            name: 'Kinejun',
            component: 'kinejun',
            useAsDefault: true
        }]
    });
