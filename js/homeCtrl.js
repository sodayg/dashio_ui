app.controller('homeCtrl',function($scope){

});


app.controller('datePickerCtrl',function($scope){
	$scope.dt = new Date();


  $scope.disabled = function(date, mode) {
    return mode === 'day' && (date.getDay() === 5 || date.getDay() === 6);
  };

   
  $scope.maxDate = new Date(2020, 5, 22);
  $scope.minDate = new Date();

  

   

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.format = 'dd-MMMM-yyyy';
  

  
});
