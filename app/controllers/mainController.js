app.controller('mainController',['$scope',
function ($scope) {
    
    $scope.message = 'from controller :' + Date();
    init();


    function init() {
        console.log('main controller-updated');
    }

}]);