import filmDatas from './filmData';

export default {
    template: require('./kinejun.template.html'),
    controller: ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
        angular.element(document.getElementsByTagName('kinejun')[0]).addClass('layout-column flex');
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };
        $scope.filmDatas = filmDatas;
        $scope.query = {
            order: 'year',
            limit: 5,
            page: 1
        };
    }]
};
