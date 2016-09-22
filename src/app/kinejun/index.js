import angular from 'angular';

import kinejunComponent from './kinejun.component.js';

const kinejun = angular
    .module('kinejun',[])
    .component('kinejun', kinejunComponent);

export default kinejun;
