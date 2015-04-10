angular.module('myApp',['ngMessages', 'ngAnimate'])
  .controller('MyCtrl', ['$scope','$timeout', function($scope,$timeout){

    $scope.answers = {};
    $scope.display = 0;

    $scope.submitForm = function(){
        if( $scope.madLibForm.$valid ) {
            console.log('The form is valid');
            $scope.display = 1;
        } else {
            console.log('The form is invalid');
        }
    };

    $scope.restart = function(){
        console.log('Restart Activated');
        $scope.display = 0;

        $timeout(
            function(){
                $scope.answers = {};
            }, 600);
    };
}]);