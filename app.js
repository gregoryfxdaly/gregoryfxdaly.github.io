
var app = angular.module('gregoryDaly', ['ui.router']);



app.config([
'$stateProvider',
'$urlRouterProvider',
'$locationProvider',
function($stateProvider, $urlRouterProvider,$locationProvider) {

  $stateProvider
    .state('home', {
	  title: 'HomePage',    	
      url: '/home',
      templateUrl: 'home.html',
      controller: 'MainCtrl'
  });
  
  $stateProvider
    .state('biography', {
	  title: 'Biography',    	
      url: '/biography',
      templateUrl: 'biography.html',
      controller: 'BioCtrl'
  });
  
  $stateProvider
    .state('about', {
	  title: 'About',    	
      url: '/about',
      templateUrl: 'about.html',
      controller: 'AboutCtrl'
  });
  
  $stateProvider
    .state('news', {
	  title: 'News',    	
      url: '/news',
      templateUrl: 'news.html',
      controller: 'NewsCtrl'
  });  

  $stateProvider
    .state('contact', {
	  title: 'Contact',    	
      url: '/contact',
      templateUrl: 'contact.html',
      controller: 'ContactCtrl'
  });      

  $urlRouterProvider.otherwise('home');
  
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});  

}]);



app.controller('MainCtrl', [
'$rootScope',
'$scope',
function($rootScope,$scope){
	 	
 	$rootScope.pageTitle = 'GregoryF .X. Daly - Home';
 	$rootScope.pageKeywords = 'GregoryFX, Gregory F.X. Daly';
 	$rootScope.pageDescription = 'Gregory F.X. Daly';

}]);

app.controller('BioCtrl', [
'$rootScope',
'$scope',
function($rootScope,$scope){
	 	
 	$rootScope.pageTitle = 'GregoryF .X. Daly - Biography';
 	$rootScope.pageKeywords = 'GregoryFX, Gregory F.X. Daly, Gregory F.X. Daly Biography';
 	$rootScope.pageDescription = "Gregory F.X. Daly's biography.";

}]);

app.controller('AboutCtrl', [
'$rootScope',
'$scope',
function($rootScope,$scope){
	 	
 	$rootScope.pageTitle = 'GregoryF .X. Daly - About The Office';
 	$rootScope.pageKeywords = 'GregoryFX, Gregory F.X. Daly, Gregory F.X. Daly About The Office';
 	$rootScope.pageDescription = "About the Gregory F.X. Daly office.";

}]);

app.controller('NewsCtrl', [
'$rootScope',
'$scope',
function($rootScope,$scope){
	 	
 	$rootScope.pageTitle = 'GregoryF .X. Daly - News';
 	$rootScope.pageKeywords = 'GregoryFX, Gregory F.X. Daly, Gregory F.X. Daly News';
 	$rootScope.pageDescription = "Gregory F.X. Daly news.";

}]);

app.controller('ContactCtrl', [
'$rootScope',
'$scope',
'$http',
function($rootScope,$scope,$http){
	 	
 	$rootScope.pageTitle = 'GregoryF .X. Daly - Contact Us';
 	$rootScope.pageKeywords = 'GregoryFX, Gregory F.X. Daly, Gregory F.X. Daly, Contact Us';
 	$rootScope.pageDescription = "Contact Gregory F.X. Daly.";
 	
 	
 	
 	

    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    
   
    $scope.submit = function(contactform) {
	    

    
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        
        
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed  Please fill out all the fields.';
            $scope.result='bg-danger';
        }
        
        
        
    } 
   	
 	
 	

}]);

app.directive('isActiveNav', [ '$location', function($location) {
return {
 restrict: 'A',
 link: function(scope, element) {
   scope.location = $location;
   scope.$watch('location.path()', function(currentPath) {
     if(currentPath === element[0].attributes['href'].nodeValue) {
       element.parent().addClass('active');
     } else {
       element.parent().removeClass('active');
     }
   });
 }
 };
}]);

