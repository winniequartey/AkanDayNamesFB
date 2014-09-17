'use strict';

/*controllers*/

var myApp = angular.module('myApp',[]);

myApp.controller('testCtrl', ['$scope', function($scope) {
  $scope.students = [
    {'name': '',
     'birthday': '',
	 'dayname': ''},

  ];
    
  $scope.getDayName = function(){
		 
		var date = new Date( document.getElementById("birthday").innerHTML);
		
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var theDay = days[date.getDay()];
		var gender = document.getElementById("gender").innerHTML;
		if(theDay === "Sunday"){
			if( gender === "female"){
				$scope.name1 ="Akosua";
				$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
			}else{
				scope.name1 = "Kwasi";
			}
			$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
		}       
		else if (theDay === "Monday"){
			if(gender === "female"){
				$scope.name1="Adwoa";
			}else{
				$scope.name1="Kwadwo";
				}
			$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
		}
		else if (theDay === "Tuesday"){
			if(gender === "female") {
				$scope.name1="Abena";
			}else {
				$scope.name1 = "Kwabena";   
			}
			$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
		}
		else if (theDay === "Wednesday"){
			if(gender === "female"){
				$scope.name1="Akua";
			}else{
				$scope.name1="Kwaku";
			}
			$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
		}
		else if (theDay == "Thursday"){
			if(gender =="female"){
				$scope.name1="Yaa";
			}else{
				$scope.name1="Yaw";
			}
			$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
		}
		else if (theDay == "Friday"){
			if(gender =="female"){
				$scope.name1="Afia";
			}else{
				$scope.name1="Kofi";
			}
			$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
		}
		else if (theDay == "Saturday"){
			if(gender =="female"){
				$scope.name1="Ama";
			}else{
				$scope.name1="Kwame";
			}
			$scope.students.push({name:$scope.name,birthday:$scope.birthdayText,dayname:$scope.name1});
		}
	}  
	
	 $scope.getName = function(){
	var date = new Date($scope.birthday);
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var theDay = days[date.getDay()];
	var gender = $scope.gend;
			if(theDay === "Sunday"){
			if( gender === "Female"){
				$scope.name1 ="Akosua";
				$scope.students.push({name:$scope.uName,birthday:$scope.birthday,dayname:$scope.name1});
			}else{
				scope.name1 = "Kwasi";
			}
			$scope.students.push({name:$scope.uName,birthday:$scope.birthday,dayname:$scope.name1});
		}       
		else if (theDay === "Monday"){
			if(gender === "Female"){
				$scope.name1="Adwoa";
			}else{
				$scope.name1="Kwadwo";
				}
			$scope.students.push({name:$scope.uName,birthday:$scope.birthday,dayname:$scope.name1});
		}
		else if (theDay === "Tuesday"){
			if(gender === "Female") {
				$scope.name1="Abena";
			}else {
				$scope.name1 = "Kwabena";   
			}
			$scope.students.push({name:$scope.uName,birthday:$scope.birthday,dayname:$scope.name1});
		}
		else if (theDay === "Wednesday"){
			if(gender === "female"){
				$scope.name1="Akua";
			}else{
				$scope.name1="Kwaku";
			}
			$scope.students.push({name:$scope.uName,birthday:$scope.birthday,dayname:$scope.name1});
		}
		else if (theDay == "Thursday"){
			if(gender =="Female"){
				$scope.name1="Yaa";
			}else{
				$scope.name1="Yaw";
			}
			$scope.students.push({name:$scope.uName,birthday:$scope.birthday,dayname:$scope.name1});
		}
		else if (theDay == "Friday"){
			if(gender =="Female"){
				$scope.name1="Afia";
			}else{
				$scope.name1="Kofi";
			}
			$scope.students.push({name:$scope.uName,birthday:$scope.birthday,dayname:$scope.name1});
		}
		else if (theDay == "Saturday"){
			if(gender =="Female"){
				$scope.name1="Ama";
			}else{
				$scope.name1="Kwame";
			}
			$scope.students.push({name:$scope.uName,birthday:$scope.birthday,dayname:$scope.name1});
		}
	
}  
}]);