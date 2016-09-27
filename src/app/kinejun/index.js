import angular from 'angular';

import kinejunComponent from './kinejun.component.js';

const kinejun = angular
    .module('kinejun',[])
    .component('kinejun', kinejunComponent);

// 受賞年用のフィルタ
kinejun.filter('yearStart', function() {
    return function(input, from) {
        if(!from) {
            return input;
        }
        var arr = [];
        input.some(function(v, i) {
            if (v.year >= from) {
                arr.push(input[i]);
            }
        });
        return arr;
    };
});
kinejun.filter('yearEnd', function() {
    return function(input, to) {
        if(!to) {
            return input;
        }
        var arr = [];
        input.some(function(v, i) {
            if (v.year <= to) {
                arr.push(input[i]);
            }
        });
        return arr;
    };
});

// ランク用のフィルタ
kinejun.filter('rankStart', function() {
    return function(input, from) {
        if(!from) {
            return input;
        }
        var arr = [];
        input.some(function(v, i) {
            if (v.rank >= from) {
                arr.push(input[i]);
            }
        });
        return arr;
    };
});
kinejun.filter('rankEnd', function() {
    return function(input, to) {
        if(!to) {
            return input;
        }
        var arr = [];
        input.some(function(v, i) {
            if (v.rank <= to) {
                arr.push(input[i]);
            }
        });
        return arr;
    };
});

export default kinejun;
