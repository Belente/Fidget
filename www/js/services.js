angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory("Auth", ['$firebaseAuth', function($firebaseAuth) {
  var usersRef = new Firebase("https//fidget.firebaseio.com/users");
  return $firebaseAuth(usersRef);
}])

.factory("Fidgets", ['$firebaseArray', function($firebaseArray) {
  var fidgetsRef = new Firebase("https://fidget.firebaseio.com/figets");
  return $firebaseArray(fidgetsRef);
}]);
