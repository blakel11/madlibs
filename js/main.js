angular.module('myApp',[])
  .controller('MyCtrl', function($scope){
    $scope.male = 'male name';
    $scope.dirty = 'dirty task';
    $scope.obnox = 'obnoxious celebrity';
    $scope.job = 'job title';
    $scope.celeb= 'celebrity';
    $scope.huge = 'huge number';
    $scope.tedious = 'tedious task';
    $scope.useless = 'useless skill';
    $scope.adjective = 'adjective';

    $scope.submit = function(){
        if( $scope.madLibForm.$valid ) {
      console.log('The form is valid');
    } else {
      console.log('The form is invalid');
    }
    };

    $scope.display = 0;
  });
