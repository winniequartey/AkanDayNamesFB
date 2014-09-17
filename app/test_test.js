describe('testCtrl', function(){

beforeEach(module('myApp'));
it('should define the Akan day name given gender and birthday', inject(function($controller) {
        var mockScope={},
        BirthdayCtrl = $controller('testCtrl',{$scope:mockScope});
		expect(mockScope.students.name).toBeDefined();
    }))

});