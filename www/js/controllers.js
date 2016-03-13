angular.module('app.controllers', [])
  
.controller('whatIsThisAboutCtrl', function($scope) {

})

.controller('loginCtrl', function($scope, Auth, $state) {

	$scope.login = function() {
	    Auth.$authWithOAuthRedirect("google").then(function(authData) {
	      // User successfully logged in
	    }).catch(function(error) {
	      if (error.code === "TRANSPORT_UNAVAILABLE") {
	        Auth.$authWithOAuthPopup("google").then(function(authData) {
	          // User successfully logged in. We can log to the console
	          // since we’re using a popup here
	          console.log(authData);
	        });
	      } else {
	        // Another error occurred
	        console.log(error);
	      }
	    });
	};

	Auth.$onAuth(function(authData) {
	  if (authData === null) {
	    console.log("Not logged in yet");
	  } else {
	    console.log("Logged in as", authData);
	    $state.go('menu.doubleTask');
	  }
	  $scope.authData = authData; // This will display the user's name in our view
	});

})
   
.controller('doubleTaskCtrl', function($scope, Fidgets) {

	var fidgetsRef = new Firebase("https://fidget.firebaseio.com/figets");

	$scope.fidgets = Fidgets;

	var now = moment();
	var later = moment().add(1, 'minute')
	var query = fidgetsRef.orderByChild('time'); //.startAt(now).endAt(later);

	$scope.tapMe = function () {
		console.log(new Date());
		$scope.fidgets.$add({
			time: new Date().toString()
		});
		console.log($scope.fidgets);
	};

})
   
.controller('cartCtrl', function($scope) {

})
   
.controller('cloudCtrl', function($scope) {

})
    