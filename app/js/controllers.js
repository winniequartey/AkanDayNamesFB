'use strict';

/*controllers*/

var myApp = angular.module('myApp',[]);

myApp.controller('testCtrl', ['$scope', function($scope) {
  $scope.students = [
    {'name': 'Winifred',
     'birthday': 'Friday, 26th March 1993.',
	 'dayname': ''},
    {'name': 'Kutorkor',
     'birthday': 'Wednesday, June, ',
	 'day name': ''},
    {'name': 'Nienna',
     'birthday': '1st March',
	 'day name': ''}
  ];
    
  $scope.getDayName = function(){
     
	var date = new Date( document.getElementById("birthday").innerHTML);
         alert(document.getElementById("birthday").innerHTML);
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var theDay = days[date.getDay()];
    
        var gender = document.getElementById("gender").innerHTML;
	if(theDay === "Sunday"){
            if( gender === "female")
            {
                $scope.name1 ="Akosua";
                $scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
            }
        
            else
            {
                scope.name1 = "Kwasi";
            }
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	} 
       
        else if (theDay === "Monday"){
            if(gender === "female")
            {
                $scope.name1="Adwoa";
            }
            else
            {
                $scope.name1="Kwadwo";
            }
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	}
        
        else if (theDay === "Tuesday"){
            if(gender === "female")
            {
                $scope.name1="Abena";
            }
		else
                {
                 $scope.name1 = "Kwabena";   
                }
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	}
       
        else if (theDay === "Wednesday"){
            if(gender === "female")
            {
                $scope.name1="Akua";
//                alert("akue");
            }
		else
                {
                    $scope.name1="Kwaku";
                }
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	}
        else if (theDay == "Thursday"){
		if(gender =="female")
            {
                $scope.name1="Yaa";
            }
		else
                {
                    $scope.name1="Yaw";
                }
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	}
        else if (theDay == "Friday"){
		if(gender =="female")
            {
                $scope.name1="Afia";
            }
		else
                {
                    $scope.name1="Kofi";
                }
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	}
        else if (theDay == "Saturday"){
		if(gender =="female")
            {
                $scope.name1="Ama";
            }
		else
                {
                    $scope.name1="Kwame";
                }
		$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
	}
	
}  
}]);