import angular from 'angular';
import 'ngComponentRouter';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-material-data-table/dist/md-data-table.js';

import './kinejun';

angular.module('app', ['ngComponentRouter', 'ngMaterial', 'ngAnimate', 'md.data.table', 'kinejun'])
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
