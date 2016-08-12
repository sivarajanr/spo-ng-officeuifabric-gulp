'use strict';

var app = angular.module('app',[]);


app.controller('mainController',['$scope',
function ($scope) {
    
    $scope.message = 'from controller (demo for sathish) :' + Date();
    init();


    function init() {
        console.log('main controller-updated');
    }

}]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL21haW5Db250cm9sbGVyLmpzIiwic2VydmljZXMvbWFpblNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBIiwiZmlsZSI6ImNvbWJpbmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLFtdKTtcclxuXHJcbiIsImFwcC5jb250cm9sbGVyKCdtYWluQ29udHJvbGxlcicsWyckc2NvcGUnLFxyXG5mdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICBcclxuICAgICRzY29wZS5tZXNzYWdlID0gJ2Zyb20gY29udHJvbGxlciAoZGVtbyBmb3Igc2F0aGlzaCkgOicgKyBEYXRlKCk7XHJcbiAgICBpbml0KCk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21haW4gY29udHJvbGxlci11cGRhdGVkJyk7XHJcbiAgICB9XHJcblxyXG59XSk7IiwiIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
