angular.module('myApp',[])
  .controller('MyCtrl', function($scope){
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
        $scope.male = null;
        $scope.dirty = null;
        $scope.obnox = null;
        $scope.job = null;
        $scope.celeb= null;
        $scope.huge = null;
        $scope.tedious = null;
        $scope.useless = null;
        $scope.adjective = null;

    };

    $scope.display = 0;
    });
