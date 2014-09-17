'use strict';

/*controllers*/

var myApp = angular.module('myApp',[]);

myApp.controller('testCtrl',['$scope', function($scope) {
  $scope.students = [
    {'name': 'Winifred',
     'birthday': 'Friday, 26th March 1993.',
	 'dayname': ''},
    {'name': 'Kutokor',
     'birthday': 'Wednesday, June, ',
	 'day name': ''},
    {'name': 'Nienna',
     'birthday': '1st March',
	 'day name': ''}
  ];
  
  
  $scope.getDayName = function(){
	var date = new Date($scope.birthdayText);
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var theDay = days[date.getDay()];
	if(theDay == "Sunday"){
		$scope.name1 ="Akosua, Kwasi";
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	} else if (theDay == "Monday"){
		$scope.name1="Adwoa, Kwadwo";
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	}else if (theDay == "Tuesday"){
		$scope.name1="Kwabena, Abenaa";
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	}else if (theDay == "Wednesday"){
		$scope.name1="Kwaku, Akua";
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	}else if (theDay == "Thursday"){
		$scope.name1="Yaw, Yaa";
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	}else if (theDay == "Friday"){
		$scope.name1="Kofi, Afia";
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	}else if (theDay == "Saturday"){
		$scope.name1="Kwame, Amma";
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	}
	
}  
}]);