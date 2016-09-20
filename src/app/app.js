import angular from 'angular';
import 'ngComponentRouter';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

angular.module('app', [
        'ngComponentRouter'
    ]).config(($locationProvider) => {
        $locationProvider.html5Mode(false);
    }).value('$routerRootComponent', 'app')
    .component('app', {
        template: require('./app.template.html'),
        $routeConfig: [{
            // path: '/slides',
            // name: 'Slides',
            // component: 'slides'
        }]
    });
