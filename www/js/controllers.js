angular.module('app.controllers', [])
  
.controller('whatIsThisAboutCtrl', function($scope) {

})

.controller('loginCtrl', function($scope, Auth, $state) {

	$scope.login = function() {
	    Auth.$authWithOAuthPopup("google").then(function(authData) {
	    	$scope.authData = authData;
	    	$state.go('menu.doubleTask');
	    });
	};

	Auth.$onAuth(function(authData) {
	  if (authData === null) {
	    console.log("Not logged in yet");
	  } else {
	    console.log("Logged in as", authData);
	    $scope.authData = authData; // This will display the user's name in our view
	    $state.go('menu.doubleTask');
	  }
	});

})
   
.controller('doubleTaskCtrl', function($scope, Fidgets) {

	$scope.fidgets = Fidgets;

	var start = 0;
	var fidgets = 0;
	var difference = 0;
	var inactivity = 0;

	var interval = setInterval(checkTaps, 1000);

	function checkTaps () {
		if (!start) return false;
		inactivity++;
		if (inactivity > 6) {
			$scope.fidgets.$add({
				duration: new Date().getSeconds() - (start.getSeconds() + inactivity),
				fidgets: fidgets
			});
			fidgets = 0;
			start = 0;
			inactivity = 0;	
		} 
	}

	$scope.tapMe = function () {
		if (!start) {
			start = new Date();
		}
		fidgets++;
		inactivity = 0;		
	};

})
   
.controller('cartCtrl', function($scope) {

})
   
.controller('cloudCtrl', function($scope) {

})
    